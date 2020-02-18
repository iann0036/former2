(function($){
    var methods = {
        init : function(options) {
            ;
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

            this.data('f2dttimer', setTimeout(function(el) {
                var existing_data = el.data('f2dtrows');

                if (existing_data) {
                    el.data('f2dtrows', null);
                    el.bootstrapTable('append', existing_data);
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