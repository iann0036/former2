/*!
 * Responsive Bootstrap Toolkit
 * Author:    Maciej Gurban
 * License:   MIT
 * Version:   1.5.0 (2014-06-05)
 * Origin:    https://github.com/maciej-gurban/responsive-bootstrap-toolkit
 */
;var ResponsiveBootstrapToolkit=function(c){return{clock:{express:150,fast:300,medium:450,slow:600},timeString:new Date,isBreakpoint:function(a){return c(".device-"+a).is(":visible")},waitForFinalEvent:function(){var a={};return function(c,d,b){b=b?null:"I'm a banana!";a[b]&&clearTimeout(a[b]);a[b]=setTimeout(c,d)}}()}}(jQuery);