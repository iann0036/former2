'use strict';

(function ($) {
    $.fn.flexLabel= function(options) {
        var settings, flexLabel;

        settings = $.extend({
            bgDelay: 300, // duration of animation
            enableRequired: true
        }, $.fn.flexLabel.defaults, options);
        flexLabel = {
            processInput: function (element, input) {
                if (input.val() != '') {
                    element.addClass('fl-collapsed');
                    
                    // Add background for multiline inputs like textarea
                    setTimeout(function() {
                        element.addClass('fl-background');
                    }, settings.bgDelay);
                } else {
                    element.removeClass('fl-collapsed fl-background');
                }
            },
            interval: null
        };

        return this.each(function() {
            var element = $(this);
            var input = element.find('input,textarea');
            var inputPaddingLeft = parseInt(input.css('padding-left')) + 1;
            var inputPaddingRight = parseInt(input.css('padding-right'));
            var isRequired = input.is('[required]');
            var placeholder = input.attr('placeholder');
            var id = input.attr('id');
            input.attr('placeholder', '');

            if (!id) {
                id = 'fl-label-' + Math.ceil((Math.random() * 1000000000));
                input.attr('id', id);
            }

            var label = $('<label/>').addClass('fl-label');
            label.attr('for', id);
            label.append(placeholder);
            label.css({
                left: inputPaddingLeft,
                right: inputPaddingRight
            });

            if (isRequired && settings.enableRequired) {
                var required = $('<span/>').addClass('fl-required');
                required.text('*');
                label.append(required);
            }

            element.append(label);

            input.on('click paste input', function () {
                flexLabel.processInput(element, input);
            });

            input.on('focus', function () {
                var oldVal = input.val();

                flexLabel.interval = setInterval(function() {
                    var newVal = input.val();

                    if (oldVal != newVal) {
                        oldVal = newVal;
                        flexLabel.processInput(element, input);
                    }
                }, 20);
            });

            input.on('blur', function () {
                clearInterval(flexLabel.interval);
            });

            flexLabel.processInput(element, input);
        });
    };

    $.fn.flexLabel.defaults = {

    };
}(jQuery));