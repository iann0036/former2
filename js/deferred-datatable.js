(function($){
    var methods = {
        init : function(options) {
            ;
        },
        getData : function() {
            var data = this.data('f2dtrows');
            if (!data) {
                return [];
            }
            return data;
        },
        removeAll : function() {
            var existing_timer = this.data('f2dttimer');
            if (existing_timer) {
                clearTimeout(existing_timer);
            }

            this.data('f2dtrows', null);
            this.data('f2dtdrawn', null);

            this.bootstrapTable('removeAll');
        },
        append : function(data) {
            var existing_timer = this.data('f2dttimer');
            if (existing_timer) {
                clearTimeout(existing_timer);
            }

            var existing_data = this.data('f2dtrows');
            if (!existing_data) {
                this.data('f2dtrows', data);
            } else {
                this.data('f2dtrows', existing_data.concat(data));
            }

            var drawn_data = this.data('f2dtdrawn');
            if (!drawn_data) {
                this.data('f2dtdrawn', data);
            } else {
                this.data('f2dtdrawn', drawn_data.concat(data));
            }

            if (this.data('f2dtactive')) {
                this.data('f2dttimer', setTimeout(function(el) {
                    var drawn_data = el.data('f2dtdrawn');
    
                    if (drawn_data) {
                        el.data('f2dtdrawn', null);
                        el.bootstrapTable('append', drawn_data);
                    }
                }, 200, this));
            }
        },
        setActive : function(isactive) {
            this.data('f2dtactive', isactive);
            this.data('f2dttimer', setTimeout(function(el) {
                var drawn_data = el.data('f2dtdrawn');

                if (drawn_data) {
                    el.data('f2dtdrawn', null);
                    el.bootstrapTable('append', drawn_data);
                }
            }, 200, this));
        }
    };

    $.fn.deferredBootstrapTable = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.deferredBootstrapTable' );
        }    
    };
})(jQuery);