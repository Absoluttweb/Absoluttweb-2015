/* aa-menu 0.1 */

(function ($) {

  "use strict";

  $.fn.aamenu = function (options) {
    var settings = {
      customSelector: null,
      back: '<a href="#" class="back"><i class="fa fa-chevron-left"></i></a>',
      next: '<a href="#" class="next"></a>'
    };

    if (options) {
      $.extend(settings, options);
    }

    return this.each(function () {

      $.when($(this)).then(function () {

        // set some variables
        var
          $sublink = $('.aa-menu ul');

        //  Show/Hide menu
        $(".burger, a.close,*[data-trigger='aa-menu']").click(function(){
          $(".burger, a.close").toggleClass('active');
          $(".aa-menu-wrapper").fadeToggle(300);
          $("body").toggleClass('no-scroll');
          
        });

        // test for 2nd-level menu and add a link if true
        $('.aa-menu li').has( "ul" ).prepend(settings.next);

        // Clicking on a next button adds active class to the related subnav ul (so it can be revealed)
        $('.next').click(function() {
          $(this).parent().find(' > ul').addClass('active');
        });

        // Add a back button at the top of all submenus
        $sublink.prepend( settings.back );

        // Remove active class from subnav ul when back button is clicked
        $('.back').click(function() {
          $(this).parent().removeClass('active');
        });
      });
    });
  };

// Works with either jQuery or Zepto
})(window.jQuery || window.Zepto);