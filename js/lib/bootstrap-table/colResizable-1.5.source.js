/**
               _ _____           _          _     _      
              | |  __ \         (_)        | |   | |     
      ___ ___ | | |__) |___  ___ _ ______ _| |__ | | ___ 
     / __/ _ \| |  _  // _ \/ __| |_  / _` | '_ \| |/ _ \
    | (_| (_) | | | \ \  __/\__ \ |/ / (_| | |_) | |  __/
     \___\___/|_|_|  \_\___||___/_/___\__,_|_.__/|_|\___|
	 
	v 1.5 - a jQuery plug-in by Alvaro Prieto Lauroba
	
	Licences: MIT & GPL
	Feel free to use or modify this plugin as far as my full name is kept	
	
	If you are going to use this plug-in in production environments it is 
	strongly recommended to use its minified version: colResizable.min.js

*/

(function($){ 	
	
	var d = $(document); 		//window object
	var h = $("head");			//head object
	var drag = null;			//reference to the current grip that is being dragged
	var tables = [];			//array of the already processed tables (table.id as key)
	var	count = 0;				//internal count to create unique IDs when needed.	
	
	//common strings for packing
	var ID = "id";	
	var PX = "px";
	var SIGNATURE ="JColResizer";
    var FLEX = "JCLRFlex";
	
	//short-cuts
	var I = parseInt;
	var M = Math;
	var ie = navigator.userAgent.indexOf('Trident/4.0')>0;
	var S;
	try{S = sessionStorage;}catch(e){}	//Firefox crashes when executed as local file system
	
	//append required CSS rules  
	h.append("<style type='text/css'>  .JColResizer{/*table-layout:fixed;*/} .JColResizer td, .JColResizer th{overflow:hidden;/*padding-left:0!important; padding-right:0!important;*/}  .JCLRgrips{ height:0px; position:relative;} .JCLRgrip{margin-left:-5px; position:absolute; z-index:5; } .JCLRgrip .JColResizer{position:absolute;background-color:red;filter:alpha(opacity=1);opacity:0;width:10px;height:100%;cursor: e-resize;top:0px} .JCLRLastGrip{position:absolute; width:1px; } .JCLRgripDrag{ border-left:1px dotted black;	} .JCLRFlex{width:auto!important;}</style>");

	
	/**
	 * Function to allow column resizing for table objects. It is the starting point to apply the plugin.
	 * @param {DOM node} tb - reference to the DOM table object to be enhanced
	 * @param {Object} options	- some customization values
	 */
	var init = function( tb, options){	
		var t = $(tb);										//the table object is wrapped
		t.opt = options;
		if(t.opt.disable) return destroy(t);				//the user is asking to destroy a previously colResized table
		var	id = t.id = t.attr(ID) || SIGNATURE+count++;	//its id is obtained, if null new one is generated		
		t.p = t.opt.postbackSafe; 							//short-cut to detect postback safe 		
		if(!t.is("table") || tables[id] && !t.opt.partialRefresh) return; 		//if the object is not a table or if it was already processed then it is ignored.
		t.addClass(SIGNATURE).attr(ID, id).before('<div class="JCLRgrips"/>');	//the grips container object is added. Signature class forces table rendering in fixed-layout mode to prevent column's min-width
		t.g = []; t.c = []; t.w = t.width(); t.gc = t.prev(); t.f=t.opt.fixed;	//t.c and t.g are arrays of columns and grips respectively				
		if(options.marginLeft) t.gc.css("marginLeft", options.marginLeft);  	//if the table contains margins, it must be specified
		if(options.marginRight) t.gc.css("marginRight", options.marginRight);  	//since there is no (direct) way to obtain margin values in its original units (%, em, ...)
		t.cs = I(ie? tb.cellSpacing || tb.currentStyle.borderSpacing :t.css('border-spacing'))||2;	//table cellspacing (not even jQuery is fully cross-browser)
		t.b  = I(ie? tb.border || tb.currentStyle.borderLeftWidth :t.css('border-left-width'))||1;	//outer border width (again cross-browser issues)
		// if(!(tb.style.width || tb.width)) t.width(t.width()); //I am not an IE fan at all, but it is a pity that only IE has the currentStyle attribute working as expected. For this reason I can not check easily if the table has an explicit width or if it is rendered as "auto"
		tables[id] = t; 	//the table object is stored using its id as key	
		createGrips(t);		//grips are created
	
	};


	/**
	 * This function allows to remove any enhancements performed by this plugin on a previously processed table.
	 * @param {jQuery ref} t - table object
	 */
	var destroy = function(t){
		var id=t.attr(ID), t=tables[id];		//its table object is found
		if(!t||!t.is("table")) return;			//if none, then it wasn't processed	 
		t.removeClass(SIGNATURE+" "+FLEX).gc.remove();	//class and grips are removed
		delete tables[id];						//clean up data
	};


	/**
	 * Function to create all the grips associated with the table given by parameters 
	 * @param {jQuery ref} t - table object
	 */
	var createGrips = function(t){	
	
		var th = t.find(">thead>tr>th,>thead>tr>td");	//if table headers are specified in its semantically correct tag, are obtained
		if(!th.length) th = t.find(">tbody>tr:first>th,>tr:first>th,>tbody>tr:first>td, >tr:first>td");	 //but headers can also be included in different ways
		th = th.filter(":visible");					//filter invisible columns
		t.cg = t.find("col"); 						//a table can also contain a colgroup with col elements		
		t.ln = th.length;							//table length is stored	
		if(t.p && S && S[t.id])memento(t,th);		//if 'postbackSafe' is enabled and there is data for the current table, its coloumn layout is restored
		th.each(function(i){						//iterate through the table column headers			
			var c = $(this); 						//jquery wrap for the current column			
			var g = $(t.gc.append('<div class="JCLRgrip"></div>')[0].lastChild); //add the visual node to be used as grip
            g.append(t.opt.gripInnerHtml).append('<div class="'+SIGNATURE+'"></div>');
            if(i == t.ln-1){
                g.addClass("JCLRLastGrip"); 
                if(t.f) g.html("");
            }
            g.bind('touchstart mousedown', onGripMouseDown); //bind the mousedown event to start dragging 

			g.t = t; g.i = i; g.c = c;	c.w =c.width();		//some values are stored in the grip's node data
			t.g.push(g); t.c.push(c);						//the current grip and column are added to its table object
			c.width(c.w).removeAttr("width");				//the width of the column is converted into pixel-based measurements
			g.data(SIGNATURE, {i:i, t:t.attr(ID), last: i == t.ln-1});	 //grip index and its table name are stored in the HTML 												
		}); 	
		t.cg.removeAttr("width");	//remove the width attribute from elements in the colgroup 
		syncGrips(t); 				//the grips are positioned according to the current table layout			
		//there is a small problem, some cells in the table could contain dimension values interfering with the 
		//width value set by this plugin. Those values are removed
		t.find('td, th').not(th).not('table th, table td').each(function(){  
			$(this).removeAttr('width');	//the width attribute is removed from all table cells which are not nested in other tables and dont belong to the header
		});		
        if(!t.f){
            t.removeAttr('width').addClass(FLEX); //if not fixed, let the table grow as needed
        }

		
	};
	
    
	/**
	 * Function to allow the persistence of columns dimensions after a browser postback. It is based in
	 * the HTML5 sessionStorage object, which can be emulated for older browsers using sessionstorage.js
	 * @param {jQuery ref} t - table object
	 * @param {jQuery ref} th - reference to the first row elements (only set in deserialization)
	 */
	var memento = function(t, th){ 
		var w,m=0,i=0,aux =[],tw;
		if(th){										//in deserialization mode (after a postback)
			t.cg.removeAttr("width");
			if(t.opt.flush){ S[t.id] =""; return;} 	//if flush is activated, stored data is removed
			w = S[t.id].split(";");					//column widths is obtained
			tw = w[t.ln+1];
			if(!t.f && tw)	t.width(tw);			//it not fixed and table width data available its size is restored
			for(;i<t.ln;i++){						//for each column
				aux.push(100*w[i]/w[t.ln]+"%"); 	//width is stored in an array since it will be required again a couple of lines ahead
				th.eq(i).css("width", aux[i] ); 	//each column width in % is restored
			}			
			for(i=0;i<t.ln;i++)
				t.cg.eq(i).css("width", aux[i]);	//this code is required in order to create an inline CSS rule with higher precedence than an existing CSS class in the "col" elements
		}else{							//in serialization mode (after resizing a column)
			S[t.id] ="";				//clean up previous data
			for(;i < t.c.length; i++){	//iterate through columns
				w = t.c[i].width();		//width is obtained
				S[t.id] += w+";";		//width is appended to the sessionStorage object using ID as key
				m+=w;					//carriage is updated to obtain the full size used by columns
			}
			S[t.id]+=m;							//the last item of the serialized string is the table's active area (width), 
												//to be able to obtain % width value of each columns while deserializing
			if(!t.f) S[t.id] += ";"+t.width(); 	//if not fixed, table width is stored
		}	
	};
	
	
	/**
	 * Function that places each grip in the correct position according to the current table layout	 
	 * @param {jQuery ref} t - table object
	 */
	var syncGrips = function (t){	
		t.gc.width(t.w);			//the grip's container width is updated				
		for(var i=0; i<t.ln; i++){	//for each column
			var c = t.c[i]; 			
			t.g[i].css({			//height and position of the grip is updated according to the table layout
				left: c.offset().left - t.offset().left + c.outerWidth(false) + t.cs / 2 + PX,
				height: t.opt.headerOnly? t.c[0].outerHeight(true) : t.outerHeight(true)				
			});			
		} 	
	};
	
	
	
	/**
	* This function updates column's width according to the horizontal position increment of the grip being
	* dragged. The function can be called while dragging if liveDragging is enabled and also from the onGripDragOver
	* event handler to synchronize grip's position with their related columns.
	* @param {jQuery ref} t - table object
	* @param {number} i - index of the grip being dragged
	* @param {bool} isOver - to identify when the function is being called from the onGripDragOver event	
	*/
	var syncCols = function(t,i,isOver){
		var inc = drag.x-drag.l, c = t.c[i], c2 = t.c[i+1]; 			
		var w = c.w + inc;	var w2= c2.w- inc;	//their new width is obtained					
		c.width( w + PX);			
		t.cg.eq(i).width( w + PX); 
        if(t.f){ //if fixed mode
            c2.width(w2 + PX);
            t.cg.eq(i+1).width( w2 + PX);
        }
		if(isOver){
            c.w=w; 
            c2.w= t.f ? w2 : c2.w;
        }
	};

	
	/**
	* This function updates all columns width according to its real width. It must be taken into account that the 
	* sum of all columns can exceed the table width in some cases (if fixed is set to false and table has some kind 
	* of max-width).
	* @param {jQuery ref} t - table object	
	*/
	var applyBounds = function(t){
        var w = $.map(t.c, function(c){			//obtain real widths
            return c.width();
        });
        t.width(t.width()).removeClass(FLEX);	//prevent table width changes
        $.each(t.c, function(i,c){
            c.width(w[i]).w = w[i];				//set column widths applying bounds (table's max-width)
        });
		t.addClass(FLEX);						//allow table width changes
	};
	
	
	/**
	 * Event handler used while dragging a grip. It checks if the next grip's position is valid and updates it. 
	 * @param {event} e - mousemove event binded to the window object
	 */
	var onGripDrag = function(e){	
		if(!drag) return; 
        var t = drag.t;		//table object reference 
        var oe = e.originalEvent.touches;
        var ox = oe ? oe[0].pageX : e.pageX;    //original position (touch or mouse)
        var x =  ox - drag.ox + drag.l;	        //next position according to horizontal mouse position increment
		var mw = t.opt.minWidth, i = drag.i ;	//cell's min width
		var l = t.cs*1.5 + mw + t.b;
        var last = i == t.ln-1;                 			//check if it is the last column's grip (usually hidden)
        var min = i? t.g[i-1].position().left+t.cs+mw: l;	//min position according to the contiguous cells
		var max = t.f ? 	//fixed mode?
			i == t.ln-1? 
				t.w-l: 
				t.g[i+1].position().left-t.cs-mw:
			Infinity; 								//max position according to the contiguous cells 
		x = M.max(min, M.min(max, x));				//apply bounding		
		drag.x = x;	 drag.css("left",  x + PX); 	//apply position increment	
        if(last){									//if it is the last grip
            var c = t.c[drag.i];					//width of the last column is obtained
			drag.w = c.w + x- drag.l;         
        }              
		if(t.opt.liveDrag){ 			//if liveDrag is enabled
			if(last){
			    c.width(drag.w);
                t.w = t.width();
			}else{
				syncCols(t,i); 			//columns are synchronized
			}
			syncGrips(t);
			var cb = t.opt.onDrag;							//check if there is an onDrag callback
			if (cb) { e.currentTarget = t[0]; cb(e); }		//if any, it is fired			
		}
		return false; 	//prevent text selection while dragging				
	};
	

	/**
	 * Event handler fired when the dragging is over, updating table layout
	 */
	var onGripDragOver = function(e){	
		
		d.unbind('touchend.'+SIGNATURE+' mouseup.'+SIGNATURE).unbind('touchmove.'+SIGNATURE+' mousemove.'+SIGNATURE);
		$("head :last-child").remove(); 				//remove the dragging cursor style	
		if(!drag) return;
		drag.removeClass(drag.t.opt.draggingClass);		//remove the grip's dragging css-class
		var t = drag.t;
		var cb = t.opt.onResize; 	    //get some values	
        var i = drag.i;                 //column index
        var last = i == t.ln-1;         //check if it is the last column's grip (usually hidden)
        var c = t.g[i].c;               //the column being dragged
        if(last){
            c.width(drag.w);
            c.w = drag.w;
        }else{
            syncCols(t, i, true);	//the columns are updated
        }
        if(!t.f) applyBounds(t);	//if not fixed mode, then apply bounds to obtain real width values
        syncGrips(t);				//the grips are updated
        if (cb) { e.currentTarget = t[0]; cb(e); }	//if there is a callback function, it is fired
		if(t.p && S) memento(t); 						//if postbackSafe is enabled and there is sessionStorage support, the new layout is serialized and stored
		drag = null;									//since the grip's dragging is over									
	};	
	
	
	/**
	 * Event handler fired when the grip's dragging is about to start. Its main goal is to set up events 
	 * and store some values used while dragging.
     * @param {event} e - grip's mousedown event
	 */
	var onGripMouseDown = function(e){
		var o = $(this).data(SIGNATURE);			//retrieve grip's data
		var t = tables[o.t],  g = t.g[o.i];			//shortcuts for the table and grip objects
        var oe = e.originalEvent.touches;           //touch or mouse event?
        g.ox = oe? oe[0].pageX: e.pageX;            //the initial position is kept
		g.l = g.position().left;
		d.bind('touchmove.'+SIGNATURE+' mousemove.'+SIGNATURE, onGripDrag ).bind('touchend.'+SIGNATURE+' mouseup.'+SIGNATURE, onGripDragOver);	//mousemove and mouseup events are bound
		h.append("<style type='text/css'>*{cursor:"+ t.opt.dragCursor +"!important}</style>"); 	//change the mouse cursor
		g.addClass(t.opt.draggingClass); 	//add the dragging class (to allow some visual feedback)				
		drag = g;							//the current grip is stored as the current dragging object
		if(t.c[o.i].l) for(var i=0,c; i<t.ln; i++){ c=t.c[i]; c.l = false; c.w= c.width(); } 	//if the colum is locked (after browser resize), then c.w must be updated		
		return false; 	//prevent text selection
	};
    
    
	/**
	 * Event handler fired when the browser is resized. The main purpose of this function is to update
	 * table layout according to the browser's size synchronizing related grips 
	 */
	var onResize = function(){
		for(t in tables){		
			var t = tables[t], i, mw=0;				
			t.removeClass(SIGNATURE);						//firefox doesn't like layout-fixed in some cases
			if (t.f && t.w != t.width()) {					//if the the table's width has changed and it is in fixed mode
				t.w = t.width();							//its new value is kept the active cells area is obtained
				for(i=0; i<t.ln; i++) mw+= t.c[i].w;		
				//cell rendering is not as trivial as it might seem, and it is slightly different for
				//each browser. In the beginning i had a big switch for each browser, but since the code
				//was extremely ugly now I use a different approach with several re-flows. This works 
				//pretty well but it's a bit slower. For now, lets keep things simple...   
				for(i=0; i<t.ln; i++) t.c[i].css("width", M.round(1000*t.c[i].w/mw)/10 + "%").l=true; 
				//c.l locks the column, telling us that its c.w is outdated									
			}
			syncGrips(t.addClass(SIGNATURE));
		} 
		
	};		


	//bind resize event, to update grips position 
	$(window).bind('resize.'+SIGNATURE, onResize); 


	/**
	 * The plugin is added to the jQuery library
	 * @param {Object} options -  an object that holds some basic customization values 
	 */
    $.fn.extend({  
        colResizable: function(options) {           
            var defaults = {
			
				//attributes:
                draggingClass: 'JCLRgripDrag',	//css-class used when a grip is being dragged (for visual feedback purposes)
				gripInnerHtml: '',				//if it is required to use a custom grip it can be done using some custom HTML				
				liveDrag: false,				//enables table-layout updating while dragging	
                fixed: true,                    //table width does not change if columns are resized
				minWidth: 15, 					//minimum width value in pixels allowed for a column 
				headerOnly: false,				//specifies that the size of the the column resizing anchors will be bounded to the size of the first row 
				hoverCursor: "e-resize",  		//cursor to be used on grip hover
				dragCursor: "e-resize",  		//cursor to be used while dragging
				postbackSafe: false, 			//when it is enabled, table layout can persist after postback or page refresh. It requires browsers with sessionStorage support (it can be emulated with sessionStorage.js). 
				flush: false, 					//when postbakSafe is enabled, and it is required to prevent layout restoration after postback, 'flush' will remove its associated layout data 
				marginLeft: null,				//in case the table contains any margins, colResizable needs to know the values used, e.g. "10%", "15em", "5px" ...
				marginRight: null, 				//in case the table contains any margins, colResizable needs to know the values used, e.g. "10%", "15em", "5px" ...
				disable: false,					//disables all the enhancements performed in a previously colResized table	
				partialRefresh: false,			//can be used in combination with postbackSafe when the table is inside of an updatePanel
				
				//events:
				onDrag: null, 					//callback function to be fired during the column resizing process if liveDrag is enabled
				onResize: null					//callback function fired when the dragging process is over
            }			
			var options =  $.extend(defaults, options);			
            return this.each(function() {				
             	init( this, options);             
            });
        }
    });
})(jQuery);

