(function(jQuery) {
  jQuery.fn.clickoutside = function(callback) {
    var outside = 1, self = $(this);
    self.cb = callback;
    this.click(function() {
      outside = 0;
    });
    $(document).click(function() {
      outside && self.cb();
      outside = 1;
    });
    return $(this);
  }
})(jQuery);
