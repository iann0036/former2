/*!
 * jQuery Form Validation
 * Copyright (C) 2015 RunningCoder.org
 * Licensed under the MIT license
 *
 * @author Tom Bertrand
 * @version 1.5.3 (2015-07-16)
 * @link http://www.runningcoder.org/jqueryvalidation/
 */
;
(function(window, document, $, undefined) {

    window.Validation = {
        form: [],
        labels: {},
        hasScrolled: false
    };

    if (typeof Object.preventExtensions !== "function") {
        Object.preventExtensions = function(obj) {
            return obj;
        };
    }
    var _rules = {
        NOTEMPTY: /\S/,
        INTEGER: /^\d+$/,
        NUMERIC: /^\d+(?:[,\s]\d{3})*(?:\.\d+)?$/,
        MIXED: /^[\w\s-]+$/,
        NAME: /^['a-zãàáäâẽèéëêìíïîõòóöôùúüûñç\s-]+$/i,
        NOSPACE: /^(?!\s)\S*$/,
        TRIM: /^[^\s].*[^\s]$/,
        DATE: /^\d{4}-\d{2}-\d{2}(\s\d{2}:\d{2}(:\d{2})?)?$/,
        EMAIL: /^([^@]+?)@(([a-z0-9]-*)*[a-z0-9]+\.)+([a-z0-9]+)$/i,
        URL: /^(https?:\/\/)?((([a-z0-9]-*)*[a-z0-9]+\.?)*([a-z0-9]+))(\/[\w?=\.-]*)*$/,
        PHONE: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
        OPTIONAL: /\S/,
        COMPARISON: /^\s*([LV])\s*([<>]=?|==|!=)\s*([^<>=!]+?)\s*$/
    };

    var _messages = {
        'default': '$ contain error(s).',
        'NOTEMPTY': '$ must not be empty.',
        'INTEGER': '$ must be an integer.',
        'NUMERIC': '$ must be numeric.',
        'MIXED': '$ must be letters or numbers (no special characters).',
        'NAME': '$ must not contain special characters.',
        'NOSPACE': '$ must not contain spaces.',
        'TRIM': '$ must not start or end with space character.',
        'DATE': '$ is not a valid with format YYYY-MM-DD.',
        'EMAIL': '$ is not valid.',
        'URL': '$ is not valid.',
        'PHONE': '$ is not a valid phone number.',
        '<': '$ must be less than % characters.',
        '<=': '$ must be less or equal to % characters.',
        '>': '$ must be greater than % characters.',
        '>=': '$ must be greater or equal to % characters.',
        '==': '$ must be equal to %',
        '!=': '$ must be different than %'
    };

    var _data = {
        validation: 'data-validation',
        validationMessage: 'data-validation-message',
        regex: 'data-validation-regex',
        regexReverse: 'data-validation-regex-reverse',
        regexMessage: 'data-validation-regex-message',
        group: 'data-validation-group',
        label: 'data-validation-label',
        errorList: 'data-error-list'
    }

    var _options = {
        submit: {
            settings: {
                form: null,
                display: "inline",
                insertion: "append",
                allErrors: false,
                trigger: "click",
                button: "[type='submit']",
                errorClass: "error",
                errorListClass: "error-list",
                errorListContainer: null,
                inputContainer: null,
                clear: "focusin",
                scrollToError: false
            },
            callback: {
                onInit: null,
                onValidate: null,
                onError: null,
                onBeforeSubmit: null,
                onSubmit: null,
                onAfterSubmit: null
            }
        },
        dynamic: {
            settings: {
                trigger: null,
                delay: 300
            },
            callback: {
                onSuccess: null,
                onError: null,
                onComplete: null
            }
        },
        rules: {},
        messages: {},
        labels: {},
        debug: false
    };

    var _supported = {
        submit: {
            settings: {
                display: ["inline", "block"],
                insertion: ["append", "prepend"], //"before", "insertBefore", "after", "insertAfter"
                allErrors: [true, false],
                clear: ["focusin", "keypress", false],
                trigger: [
                    "click", "dblclick", "focusout",
                    "hover", "mousedown", "mouseenter",
                    "mouseleave", "mousemove", "mouseout",
                    "mouseover", "mouseup", "toggle"
                ]
            }
        },
        dynamic: {
            settings: {
                trigger: ["focusout", "keydown", "keypress", "keyup"]
            }
        },
        debug: [true, false]
    };

    var Validation = function(node, options) {

        var errors = [],
            messages = {},
            formData = {},
            delegateSuffix = ".vd", // validation.delegate
            resetSuffix = ".vr"; // validation.resetError

        window.Validation.hasScrolled = false;

        function extendRules() {
            options.rules = $.extend(
                true, {},
                _rules,
                options.rules
            );
        }

        function extendMessages() {
            options.messages = $.extend(
                true, {},
                _messages,
                options.messages
            );
        }

        function extendOptions() {

            if (!(options instanceof Object)) {
                options = {};
            }

            var tpmOptions = Object.preventExtensions($.extend(true, {}, _options));

            for (var method in options) {

                if (!options.hasOwnProperty(method) || method === "debug") {
                    continue;
                }

                if (~["labels", "messages", "rules"].indexOf(method) && options[method] instanceof Object) {
                    tpmOptions[method] = options[method];
                    continue;
                }

                if (!_options[method] || !(options[method] instanceof Object)) {
                    options.debug && window.Debug.log({
                        'node': node,
                        'function': 'extendOptions()',
                        'arguments': '{' + method + ': ' + JSON.stringify(options[method]) + '}',
                        'message': 'WARNING - ' + method + ' - invalid option'
                    });

                    continue;
                }

                for (var type in options[method]) {
                    if (!options[method].hasOwnProperty(type)) {
                        continue;
                    }

                    if (!_options[method][type] || !(options[method][type] instanceof Object)) {
                        options.debug && window.Debug.log({
                            'node': node,
                            'function': 'extendOptions()',
                            'arguments': '{' + type + ': ' + JSON.stringify(options[method][type]) + '}',
                            'message': 'WARNING - ' + type + ' - invalid option'
                        });

                        continue;
                    }

                    for (var option in options[method][type]) {
                        if (!options[method][type].hasOwnProperty(option)) {
                            continue;
                        }

                        if (_supported[method] &&
                            _supported[method][type] &&
                            _supported[method][type][option] &&
                            $.inArray(options[method][type][option], _supported[method][type][option]) === -1) {
                            options.debug && window.Debug.log({
                                'node': node,
                                'function': 'extendOptions()',
                                'arguments': '{' + option + ': ' + JSON.stringify(options[method][type][option]) + '}',
                                'message': 'WARNING - ' + option.toString() + ': ' + JSON.stringify(options[method][type][option]) + ' - unsupported option'
                            });

                            delete options[method][type][option];
                        }

                    }
                    if (tpmOptions[method] && tpmOptions[method][type]) {
                        tpmOptions[method][type] = $.extend(Object.preventExtensions(tpmOptions[method][type]), options[method][type]);
                    }
                }
            }
            if (options.debug && $.inArray(options.debug, _supported.debug !== -1)) {
                tpmOptions.debug = options.debug;
            }
            if (tpmOptions.dynamic.settings.trigger) {
                if (tpmOptions.dynamic.settings.trigger === "keypress" && tpmOptions.submit.settings.clear === "keypress") {
                    tpmOptions.dynamic.settings.trigger = "keydown";
                }
            }

            options = tpmOptions;

        }

        function delegateDynamicValidation() {

            if (!options.dynamic.settings.trigger) {
                return false;
            }
            options.debug && window.Debug.log({
                'node': node,
                'function': 'delegateDynamicValidation()',
                'message': 'OK - Dynamic Validation activated on ' + node.length + ' form(s)'
            });

            if (!node.find('[' + _data.validation + '],[' + _data.regex + ']')[0]) {
                options.debug && window.Debug.log({
                    'node': node,
                    'function': 'delegateDynamicValidation()',
                    'arguments': 'node.find([' + _data.validation + '],[' + _data.regex + '])',
                    'message': 'ERROR - [' + _data.validation + '] not found'
                });

                return false;
            }

            var event = options.dynamic.settings.trigger + delegateSuffix;
            if (options.dynamic.settings.trigger !== "focusout") {
                event += " change" + delegateSuffix + " paste" + delegateSuffix;
            }

            $.each(
                node.find('[' + _data.validation + '],[' + _data.regex + ']'),
                function(index, input) {

                    $(input).unbind(event).on(event, function(e) {

                        if ($(this).is(':disabled')) {
                            return false;
                        }

                        var input = this,
                            keyCode = e.keyCode || null;

                        _typeWatch(function() {

                            if (!validateInput(input)) {

                                displayOneError(input.name);
                                _executeCallback(options.dynamic.callback.onError, [node, input, keyCode, errors[input.name]]);

                            } else {

                                _executeCallback(options.dynamic.callback.onSuccess, [node, input, keyCode]);

                            }

                            _executeCallback(options.dynamic.callback.onComplete, [node, input, keyCode]);

                        }, options.dynamic.settings.delay);

                    });
                }
            );
        }

        function delegateValidation() {

            _executeCallback(options.submit.callback.onInit, [node]);

            var event = options.submit.settings.trigger + '.vd';
            options.debug && window.Debug.log({
                'node': node,
                'function': 'delegateValidation()',
                'message': 'OK - Validation activated on ' + node.length + ' form(s)'
            });

            if (!node.find(options.submit.settings.button)[0]) {
                options.debug && window.Debug.log({
                    'node': node,
                    'function': 'delegateValidation()',
                    'arguments': '{button: ' + options.submit.settings.button + '}',
                    'message': 'ERROR - node.find("' + options.submit.settings.button + '") not found'
                });

                return false;

            }

            node.on("submit", false);
            node.find(options.submit.settings.button).off('.vd').on(event, function(e) {

                e.preventDefault();

                resetErrors();

                _executeCallback(options.submit.callback.onValidate, [node]);

                if (!validateForm()) {

                    displayErrors();
                    _executeCallback(options.submit.callback.onError, [node, errors, formData]);

                } else {

                    _executeCallback(options.submit.callback.onBeforeSubmit, [node]);

                    (options.submit.callback.onSubmit) ? _executeCallback(options.submit.callback.onSubmit, [node, formData]): submitForm();

                    _executeCallback(options.submit.callback.onAfterSubmit, [node]);

                }
                options.debug && window.Debug.print();

                return false;

            });

        }

        function validateForm() {

            var isValid = isEmpty(errors);

            formData = {};

            $.each(
                node.find('input:not([type="submit"]), select, textarea').not(':disabled'),
                function(index, input) {

                    input = $(input);

                    var value = _getInputValue(input[0]),
                        inputName = input.attr('name');

                    if (inputName) {
                        if (/\[]$/.test(inputName)) {
                            inputName = inputName.replace(/\[]$/, '');
                            if (!(formData[inputName] instanceof Array)) {
                                formData[inputName] = [];
                            }
                            formData[inputName].push(value)
                        } else {
                            formData[inputName] = value;
                        }
                    }

                    if (!!input.attr(_data.validation) || !!input.attr(_data.regex)) {
                        if (!validateInput(input[0], value)) {
                            isValid = false;
                        }
                    }
                }
            );

            prepareFormData();

            return isValid;

        }

        function prepareFormData() {

            var data = {},
                matches,
                index;

            for (var i in formData) {
                if (!formData.hasOwnProperty(i)) continue;

                index = 0;
                matches = i.split(/\[(.+?)]/g);

                var tmpObject = {},
                    tmpArray = [];

                for (var k = matches.length - 1; k >= 0; k--) {
                    if (matches[k] === "") {
                        matches.splice(k, 1);
                        continue;
                    }

                    if (tmpArray.length < 1) {
                        tmpObject[matches[k]] = Number(formData[i]) || formData[i];
                    } else {
                        tmpObject = {};
                        tmpObject[matches[k]] = tmpArray[tmpArray.length - 1];
                    }
                    tmpArray.push(tmpObject)

                }

                data = $.extend(true, data, tmpObject);

            }

            formData = data;

        }

        function validateInput(input, value) {

            var inputName = $(input).attr('name'),
                value = value || _getInputValue(input);

            if (!inputName) {
                options.debug && window.Debug.log({
                    'node': node,
                    'function': 'validateInput()',
                    'arguments': '$(input).attr("name")',
                    'message': 'ERROR - Missing input [name]'
                });

                return false;
            }

            var matches = inputName.replace(/]$/, '').split(/]\[|[[\]]/g),
                inputShortName = window.Validation.labels[inputName] ||
                options.labels[inputName] ||
                $(input).attr(_data.label) ||
                matches[matches.length - 1],

                validationArray = $(input).attr(_data.validation),
                validationMessage = $(input).attr(_data.validationMessage),
                validationRegex = $(input).attr(_data.regex),
                validationRegexReverse = !($(input).attr(_data.regexReverse) === undefined),
                validationRegexMessage = $(input).attr(_data.regexMessage),

                validateOnce = false;

            if (validationArray) {
                validationArray = _api._splitValidation(validationArray);
            }
            if (validationArray instanceof Array && validationArray.length > 0) {
                if ($.trim(value) === '' && ~validationArray.indexOf('OPTIONAL')) {
                    return true;
                }

                $.each(validationArray, function(i, rule) {

                    if (validateOnce === true) {
                        return true;
                    }

                    try {

                        validateRule(value, rule);

                    } catch (error) {

                        if (validationMessage || !options.submit.settings.allErrors) {
                            validateOnce = true;
                        }

                        error[0] = validationMessage || error[0];

                        registerError(inputName, error[0].replace('$', inputShortName).replace('%', error[1]));

                    }

                });

            }
            if (validationRegex) {

                var rule = _buildRegexFromString(validationRegex);
                if (!(rule instanceof RegExp)) {
                    return true;
                }

                try {

                    validateRule(value, rule, validationRegexReverse);

                } catch (error) {

                    error[0] = validationRegexMessage || error[0];

                    registerError(inputName, error[0].replace('$', inputShortName));

                }

            }

            return !errors[inputName] || errors[inputName] instanceof Array && errors[inputName].length === 0;

        }

        function validateRule(value, rule, reversed) {
            if (rule instanceof RegExp) {
                var isValid = rule.test(value);

                if (reversed) {
                    isValid = !isValid;
                }

                if (!isValid) {
                    throw [options.messages['default'], ''];
                }
                return;
            }

            if (options.rules[rule]) {
                if (!options.rules[rule].test(value)) {
                    throw [options.messages[rule], ''];
                }
                return;
            }
            var comparison = rule.match(options.rules.COMPARISON);

            if (!comparison || comparison.length !== 4) {
                options.debug && window.Debug.log({
                    'node': node,
                    'function': 'validateRule()',
                    'arguments': 'value: ' + value + ' rule: ' + rule,
                    'message': 'WARNING - Invalid comparison'
                });

                return;
            }

            var type = comparison[1],
                operator = comparison[2],
                compared = comparison[3],
                comparedValue;

            switch (type) {
                case "L":
                    if (isNaN(compared)) {
                        options.debug && window.Debug.log({
                            'node': node,
                            'function': 'validateRule()',
                            'arguments': 'compare: ' + compared + ' rule: ' + rule,
                            'message': 'WARNING - Invalid rule, "L" compare must be numeric'
                        });

                        return false;

                    } else {

                        if (!value || eval(value.length + operator + parseFloat(compared)) === false) {
                            throw [options.messages[operator], compared];
                        }

                    }

                    break;
                case "V":
                default:
                    if (isNaN(compared)) {

                        comparedValue = node.find('[name="' + compared + '"]').val();
                        if (!comparedValue) {
                            options.debug && window.Debug.log({
                                'node': node,
                                'function': 'validateRule()',
                                'arguments': 'compare: ' + compared + ' rule: ' + rule,
                                'message': 'WARNING - Unable to find compared field [name="' + compared + '"]'
                            });

                            return false;
                        }

                        if (!value || !eval('"' + encodeURIComponent(value) + '"' + operator + '"' + encodeURIComponent(comparedValue) + '"')) {
                            throw [options.messages[operator].replace(' characters', ''), compared];
                        }

                    } else {
                        if (!value || isNaN(value) || !eval(value + operator + parseFloat(compared))) {
                            throw [options.messages[operator].replace(' characters', ''), compared];
                        }

                    }
                    break;

            }

        }

        function registerError(inputName, error) {

            if (!errors[inputName]) {
                errors[inputName] = [];
            }

            error = error.capitalize();

            var hasError = false;
            for (var i = 0; i < errors[inputName].length; i++) {
                if (errors[inputName][i] === error) {
                    hasError = true;
                    break;
                }
            }

            if (!hasError) {
                errors[inputName].push(error);
            }

        }

        function displayOneError(inputName) {

            var input,
                inputId,
                errorContainer,
                label,
                html = '<div class="' + options.submit.settings.errorListClass + '" ' + _data.errorList + '><ul></ul></div>',
                group,
                groupInput;

            if (!errors.hasOwnProperty(inputName)) {
                return false;
            }

            input = node.find('[name="' + inputName + '"]');

            label = null;

            if (!input[0]) {
                options.debug && window.Debug.log({
                    'node': node,
                    'function': 'displayOneError()',
                    'arguments': '[name="' + inputName + '"]',
                    'message': 'ERROR - Unable to find input by name "' + inputName + '"'
                });

                return false;
            }

            group = input.attr(_data.group);

            if (group) {

                groupInput = node.find('[name="' + inputName + '"]');
                label = node.find('[id="' + group + '"]');

                if (label[0]) {
                    label.addClass(options.submit.settings.errorClass);
                    errorContainer = label;
                }

            } else {

                input.addClass(options.submit.settings.errorClass);

                if (options.submit.settings.inputContainer) {
                    input.parentsUntil(node, options.submit.settings.inputContainer).addClass(options.submit.settings.errorClass);
                }

                inputId = input.attr('id');

                if (inputId) {
                    label = node.find('label[for="' + inputId + '"]')[0];
                }

                if (!label) {
                    label = input.parentsUntil(node, 'label')[0];
                }

                if (label) {
                    label = $(label);
                    label.addClass(options.submit.settings.errorClass);
                }
            }

            if (options.submit.settings.display === 'inline') {
                if (options.submit.settings.errorListContainer) {
                    errorContainer = input.parentsUntil(node, options.submit.settings.errorListContainer);
                } else {
                    errorContainer = errorContainer || input.parent();
                }
            } else if (options.submit.settings.display === 'block') {
                errorContainer = node;
            }
            if (options.submit.settings.display === 'inline' && errorContainer.find('[' + _data.errorList + ']')[0]) {
                return false;
            }

            if (options.submit.settings.display === "inline" ||
                (options.submit.settings.display === "block" && !errorContainer.find('[' + _data.errorList + ']')[0])
            ) {
                if (options.submit.settings.insertion === 'append') {
                    errorContainer.append(html);
                } else if (options.submit.settings.insertion === 'prepend') {
                    errorContainer.prepend(html);
                }
            }

            for (var i = 0; i < errors[inputName].length; i++) {
                errorContainer.find('[' + _data.errorList + '] ul').append('<li>' + errors[inputName][i] + '</li>');
            }

            if (options.submit.settings.clear || options.dynamic.settings.trigger) {

                if (group && groupInput) {
                    input = groupInput;
                }

                var event = "coucou" + resetSuffix;
                if (options.submit.settings.clear) {
                    event += " " + options.submit.settings.clear + resetSuffix;
                    if (~['radio', 'checkbox'].indexOf(input[0].type)) {
                        event += " change" + resetSuffix;
                    }
                }
                if (options.dynamic.settings.trigger) {
                    event += " " + options.dynamic.settings.trigger + resetSuffix;
                    if (options.dynamic.settings.trigger !== "focusout" && !~['radio', 'checkbox'].indexOf(input[0].type)) {
                        event += " change" + resetSuffix + " paste" + resetSuffix;
                    }
                }

                input.unbind(event).on(event, function(a, b, c, d, e) {

                    return function() {
                        if (e) {
                            if ($(c).hasClass(options.submit.settings.errorClass)) {
                                resetOneError(a, b, c, d, e);
                            }
                        } else if ($(b).hasClass(options.submit.settings.errorClass)) {
                            resetOneError(a, b, c, d);
                        }
                    };

                }(inputName, input, label, errorContainer, group));
            }

            if (options.submit.settings.scrollToError && !window.Validation.hasScrolled) {

                window.Validation.hasScrolled = true;

                var offset = parseFloat(options.submit.settings.scrollToError.offset) || 0,
                    duration = parseFloat(options.submit.settings.scrollToError.duration) || 500,
                    handle = (options.submit.settings.display === 'block') ? errorContainer : input;

                $('html, body').animate({
                    scrollTop: handle.offset().top + offset
                }, duration);

            }

        }

        function displayErrors() {

            for (var inputName in errors) {
                if (!errors.hasOwnProperty(inputName)) continue;
                displayOneError(inputName);
            }

        }

        function resetOneError(inputName, input, label, container, group) {

            delete errors[inputName];

            if (container) {

                if (options.submit.settings.inputContainer) {
                    (group ? label : input).parentsUntil(node, options.submit.settings.inputContainer).removeClass(options.submit.settings.errorClass);
                }

                label && label.removeClass(options.submit.settings.errorClass);

                input.removeClass(options.submit.settings.errorClass);

                if (options.submit.settings.display === 'inline') {
                    container.find('[' + _data.errorList + ']').remove();
                }

            } else {

                if (!input) {
                    input = node.find('[name="' + inputName + '"]');

                    if (!input[0]) {
                        options.debug && window.Debug.log({
                            'node': node,
                            'function': 'resetOneError()',
                            'arguments': '[name="' + inputName + '"]',
                            'message': 'ERROR - Unable to find input by name "' + inputName + '"'
                        });

                        return false;
                    }
                }

                input.trigger('coucou' + resetSuffix);
            }

        }

        function resetErrors() {

            errors = [];
            window.Validation.hasScrolled = false;

            node.find('[' + _data.errorList + ']').remove();
            node.find('.' + options.submit.settings.errorClass).removeClass(options.submit.settings.errorClass);

        }

        function submitForm() {

            node[0].submit()

        }

        function destroy() {

            resetErrors();
            node.find('[' + _data.validation + '],[' + _data.regex + ']').off(delegateSuffix + ' ' + resetSuffix);

            node.find(options.submit.settings.button).off(delegateSuffix).on('click' + delegateSuffix, function() {
                $(this).closest('form')[0].submit();
            });

            return true;

        }

        var _getInputValue = function(input) {

            var value;
            switch ($(input).attr('type')) {
                case 'checkbox':
                    value = ($(input).is(':checked')) ? 1 : '';
                    break;
                case 'radio':
                    value = node.find('input[name="' + $(input).attr('name') + '"]:checked').val() || '';
                    break;
                default:
                    value = $(input).val();
                    break;
            }

            return value;

        };

        var _typeWatch = (function() {
            var timer = 0;
            return function(callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();

        var _executeCallback = function(callback, extraParams) {

            if (!callback) {
                return false;
            }

            var _callback;

            if (typeof callback === "function") {

                _callback = callback;

            } else if (typeof callback === "string" || callback instanceof Array) {

                _callback = window;

                if (typeof callback === "string") {
                    callback = [callback, []];
                }

                var _exploded = callback[0].split('.'),
                    _params = callback[1],
                    _isValid = true,
                    _splitIndex = 0;

                while (_splitIndex < _exploded.length) {

                    if (typeof _callback !== 'undefined') {
                        _callback = _callback[_exploded[_splitIndex++]];
                    } else {
                        _isValid = false;
                        break;
                    }
                }

                if (!_isValid || typeof _callback !== "function") {
                    options.debug && window.Debug.log({
                        'node': node,
                        'function': '_executeCallback()',
                        'arguments': JSON.stringify(callback),
                        'message': 'WARNING - Invalid callback function"'
                    });

                    return false;
                }

            }

            _callback.apply(this, $.merge(_params || [], (extraParams) ? extraParams : []));
            return true;

        };

        this.__construct = function() {

            extendOptions();
            extendRules();
            extendMessages();

            delegateDynamicValidation();
            delegateValidation();
            options.debug && window.Debug.print();

        }();

        return {

            registerError: registerError,

            displayOneError: displayOneError,

            displayErrors: displayErrors,

            resetOneError: resetOneError,

            resetErrors: resetErrors,

            destroy: destroy

        };

    };

    $.fn.validate = $.validate = function(options) {

        return _api.validate(this, options);

    };

    $.fn.addValidation = function(validation) {

        return _api.addValidation(this, validation);

    };

    $.fn.removeValidation = function(validation) {

        return _api.removeValidation(this, validation);

    };

    $.fn.addError = function(error) {

        return _api.addError(this, error);

    };

    $.fn.removeError = function(error) {

        return _api.removeError(this, error);

    };

    $.fn.alterValidationRules = $.alterValidationRules = function(rules) {

        if (!(rules instanceof Array)) {
            rules = [rules];
        }

        for (var i = 0; i < rules.length; i++) {
            _api.alterValidationRules(rules[i]);
        }

    };

    var _api = {

        _formatValidation: function(validation) {

            validation = validation.toString().replace(/\s/g, '');

            if (validation.charAt(0) === "[" && validation.charAt(validation.length - 1) === "]") {
                validation = validation.replace(/^\[|]$/g, '');
            }

            return validation;

        },

        _splitValidation: function(validation) {

            var validationArray = this._formatValidation(validation).split(','),
                oneValidation;

            for (var i = 0; i < validationArray.length; i++) {
                oneValidation = validationArray[i];
                if (/^[a-z]+$/i.test(oneValidation)) {
                    validationArray[i] = oneValidation.toUpperCase();
                }
            }

            return validationArray;
        },

        _joinValidation: function(validation) {

            return '[' + validation.join(', ') + ']';

        },

        validate: function(node, options) {

            if (typeof node === "function") {

                if (!options.submit.settings.form) {
                    window.Debug.log({
                        'node': node,
                        'function': '$.validate()',
                        'arguments': '',
                        'message': 'Undefined property "options.submit.settings.form - Validation dropped'
                    });

                    window.Debug.print();

                    return;
                }

                node = $(options.submit.settings.form);

                if (!node[0] || node[0].nodeName.toLowerCase() !== "form") {
                    window.Debug.log({
                        'function': '$.validate()',
                        'arguments': options.submit.settings.form,
                        'message': 'Unable to find jQuery form element - Validation dropped'
                    });

                    window.Debug.print();

                    return;
                }

            } else if (typeof node[0] === 'undefined') {
                window.Debug.log({
                    'node': node,
                    'function': '$.validate()',
                    'arguments': '$("' + node.selector + '").validate()',
                    'message': 'Unable to find jQuery form element - Validation dropped'
                });

                window.Debug.print();

                return;
            }

            if (options === "destroy") {

                if (!window.Validation.form[node.selector]) {
                    window.Debug.log({
                        'node': node,
                        'function': '$.validate("destroy")',
                        'arguments': '',
                        'message': 'Unable to destroy "' + node.selector + '", perhaps it\'s already destroyed?'
                    });

                    window.Debug.print();

                    return;
                }

                window.Validation.form[node.selector].destroy();

                return;

            }

            return node.each(function() {
                window.Validation.form[node.selector] = new Validation($(this), options);
            });

        },

        addValidation: function(node, validation) {

            var self = this;

            validation = self._splitValidation(validation);

            if (!validation) {
                return false;
            }

            return node.each(function() {

                var $this = $(this),
                    validationData = $this.attr(_data.validation),
                    validationArray = (validationData && validationData.length) ? self._splitValidation(validationData) : [],
                    oneValidation;

                for (var i = 0; i < validation.length; i++) {

                    oneValidation = self._formatValidation(validation[i]);

                    if ($.inArray(oneValidation, validationArray) === -1) {
                        validationArray.push(oneValidation);
                    }
                }

                if (validationArray.length) {
                    $this.attr(_data.validation, self._joinValidation(validationArray));
                }

            });

        },

        removeValidation: function(node, validation) {

            var self = this;

            validation = self._splitValidation(validation);
            if (!validation) {
                return false;
            }

            return node.each(function() {

                var $this = $(this),
                    validationData = $this.attr(_data.validation),
                    validationArray = (validationData && validationData.length) ? self._splitValidation(validationData) : [],
                    oneValidation,
                    validationIndex;

                if (!validationArray.length) {
                    $this.removeAttr(_data.validation);
                    return true;
                }

                for (var i = 0; i < validation.length; i++) {
                    oneValidation = self._formatValidation(validation[i]);
                    validationIndex = $.inArray(oneValidation, validationArray);
                    if (validationIndex !== -1) {
                        validationArray.splice(validationIndex, 1);
                    }

                }

                if (!validationArray.length) {
                    $this.removeAttr(_data.validation);
                    return true;
                }

                $this.attr(_data.validation, self._joinValidation(validationArray));

            });

        },

        addError: function(node, error) {

            if (!window.Validation.form[node.selector]) {
                window.Debug.log({
                    'node': node,
                    'function': '$.addError()',
                    'arguments': 'window.Validation.form[' + node.selector + ']',
                    'message': 'ERROR - Invalid node selector'
                });

                window.Debug.print();

                return false;
            }

            if (typeof error !== "object" || Object.prototype.toString.call(error) !== "[object Object]") {
                window.Debug.log({
                    'node': node,
                    'function': '$.addError()',
                    'arguments': 'window.Validation.form[' + node.selector + ']',
                    'message': 'ERROR - Invalid argument, must be type object'
                });

                window.Debug.print();

                return false;
            }

            var input,
                onlyOnce = true;
            for (var inputName in error) {

                if (!error.hasOwnProperty(inputName)) {
                    continue;
                }

                if (!(error[inputName] instanceof Array)) {
                    error[inputName] = [error[inputName]];
                }

                input = $(node.selector).find('[name="' + inputName + '"]');
                if (!input[0]) {
                    window.Debug.log({
                        'node': node,
                        'function': '$.addError()',
                        'arguments': inputName,
                        'message': 'ERROR - Unable to find ' + '$(' + node.selector + ').find("[name="' + inputName + '"]")'
                    });

                    window.Debug.print();

                    continue;
                }

                if (onlyOnce) {
                    window.Validation.hasScrolled = false;
                    onlyOnce = false;
                }

                window.Validation.form[node.selector].resetOneError(inputName, input);

                for (var i = 0; i < error[inputName].length; i++) {

                    if (typeof error[inputName][i] !== "string") {
                        window.Debug.log({
                            'node': node,
                            'function': '$.addError()',
                            'arguments': error[inputName][i],
                            'message': 'ERROR - Invalid error object property - Accepted format: {"inputName": "errorString"} or {"inputName": ["errorString", "errorString"]}'
                        });

                        window.Debug.print();

                        continue;
                    }

                    window.Validation.form[node.selector].registerError(inputName, error[inputName][i]);

                }

                window.Validation.form[node.selector].displayOneError(inputName);

            }

        },

        removeError: function(node, inputName) {

            if (!window.Validation.form[node.selector]) {
                window.Debug.log({
                    'node': node,
                    'function': '$.removeError()',
                    'arguments': 'window.Validation.form[' + node.selector + ']',
                    'message': 'ERROR - Invalid node selector'
                });

                window.Debug.print();

                return false;
            }

            if (!inputName) {
                window.Validation.form[node.selector].resetErrors();
                return false;
            }

            if (typeof inputName === "object" && Object.prototype.toString.call(inputName) !== "[object Array]") {
                window.Debug.log({
                    'node': node,
                    'function': '$.removeError()',
                    'arguments': inputName,
                    'message': 'ERROR - Invalid inputName, must be type String or Array'
                });

                window.Debug.print();

                return false;
            }

            if (!(inputName instanceof Array)) {
                inputName = [inputName];
            }

            var input;
            for (var i = 0; i < inputName.length; i++) {

                input = $(node.selector).find('[name="' + inputName[i] + '"]');
                if (!input[0]) {
                    window.Debug.log({
                        'node': node,
                        'function': '$.removeError()',
                        'arguments': inputName[i],
                        'message': 'ERROR - Unable to find ' + '$(' + node.selector + ').find("[name="' + inputName[i] + '"]")'
                    });

                    window.Debug.print();

                    continue;
                }

                window.Validation.form[node.selector].resetOneError(inputName[i], input);

            }

        },

        alterValidationRules: function(ruleObj) {

            if (!ruleObj.rule || (!ruleObj.regex && !ruleObj.message)) {
                window.Debug.log({
                    'function': '$.alterValidationRules()',
                    'message': 'ERROR - Missing one or multiple parameter(s) {rule, regex, message}'
                });
                window.Debug.print();
                return false;
            }

            ruleObj.rule = ruleObj.rule.toUpperCase();

            if (ruleObj.regex) {

                var regex = _buildRegexFromString(ruleObj.regex);

                if (!(regex instanceof RegExp)) {
                    window.Debug.log({
                        'function': '$.alterValidationRules(rule)',
                        'arguments': regex.toString(),
                        'message': 'ERROR - Invalid rule'
                    });
                    window.Debug.print();
                    return false;
                }

                _rules[ruleObj.rule] = regex;
            }

            if (ruleObj.message) {
                _messages[ruleObj.rule] = ruleObj.message;
            }

            return true;
        }

    };

    function _buildRegexFromString(regex) {

        if (!regex || (typeof regex !== "string" && !(regex instanceof RegExp))) {
            _regexDebug();
            return false;
        }

        if (typeof regex !== 'string') {
            regex = regex.toString();
        }

        var separator = regex.charAt(0),
            index = regex.length - 1,
            pattern,
            modifier,
            rule;

        while (index > 0) {
            if (/[gimsxeU]/.test(regex.charAt(index))) {
                index--;
            } else {
                break;
            }
        }

        if (regex.charAt(index) !== separator) {
            separator = null;
        }

        if (separator && index !== regex.length - 1) {
            modifier = regex.substr(index + 1, regex.length - 1);
        }

        if (separator) {
            pattern = regex.substr(1, index - 1);
        } else {
            pattern = regex;
        }

        try {
            rule = new RegExp(pattern, modifier);
        } catch (error) {
            _regexDebug();
            return false;
        }

        return rule;

        function _regexDebug() {
            window.Debug.log({
                'function': '_buildRegexFromString()',
                'arguments': '{pattern: {' + (pattern || '') + '}, modifier: {' + (modifier || '') + '}',
                'message': 'WARNING - Invalid regex given: ' + regex
            });
            window.Debug.print();
        }

    }
    window.Debug = {

        table: {},
        log: function(debugObject) {

            if (!debugObject.message || typeof debugObject.message !== "string") {
                return false;
            }

            this.table[debugObject.message] = $.extend(
                Object.preventExtensions({
                    'node': '',
                    'function': '',
                    'arguments': ''
                }), debugObject
            );

        },
        print: function() {

            if (isEmpty(this.table)) {
                return false;
            }

            if (console.group !== undefined || console.table !== undefined) {

                console.groupCollapsed('--- jQuery Form Validation Debug ---');

                if (console.table) {
                    console.table(this.table);
                } else {
                    $.each(this.table, function(index, data) {
                        console.log(data['Name'] + ': ' + data['Execution Time'] + 'ms');
                    });
                }

                console.groupEnd();

            } else {
                console.log('Debug is not available on your current browser, try the most recent version of Chrome or Firefox.');
            }

            this.table = {};

        }

    };

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(elt) {
            var len = this.length >>> 0;

            var from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++) {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }
    if (!JSON && !JSON.stringify) {
        JSON.stringify = function(obj) {
            var t = typeof(obj);
            if (t !== "object" || obj === null) {
                if (t === "string") {
                    obj = '"' + obj + '"';
                }
                return String(obj);
            } else {
                var n, v, json = [],
                    arr = (obj && obj.constructor === Array);
                for (n in obj) {
                    if (true) {
                        v = obj[n];
                        t = typeof(v);
                        if (t === "string") {
                            v = '"' + v + '"';
                        } else if (t === "object" && v !== null) {
                            v = JSON.stringify(v);
                        }
                        json.push((arr ? "" : '"' + n + '": ') + String(v));
                    }
                }
                return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
            }
        };
    }

}(window, document, window.jQuery));
