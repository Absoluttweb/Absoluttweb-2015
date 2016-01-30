
//Foundation5
$(document).foundation({
  equalizer: {
    equalize_on_stack: true
  }
});

//Go to CMS when "esc" is pressed
$(document).keydown(function(e) {
  if (e.keyCode == 27) {
    window.open('/admin','CMS Login');
  }
});

$(document).ready(function(){

//Tooltipster
$('.tooltip').tooltipster({
    theme: 'tooltipster-noir'
});

//FadeOut Effect
$('.fadeOut').click(function(event) {
    event.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(300, newpage);
  });

  function newpage() {
    window.location = newLocation;
  }; 

//Accordion Panels
$(".accordion div").hide();
$(".accordion p.question").click(function () {
    $(this).next(".answer").slideToggle(200).siblings(".answer:visible").slideUp(200);
    $(this).toggleClass("current");
    $(this).siblings("p.question").removeClass("current");
});
 
//Search bar
$(".q-trigger").click(function(){
    $(".q-form").toggleClass("active");
});

//Flip
$(".flipcard").click(function(){
    $(this).toggleClass("flip");
});

//Dropdown
$(".dropdown > a").click(function(){
    $(this).toggleClass("active");
    $(this).next("ul").slideToggle(300);
    return false;
});
$("body").click(function(){
    $(".dropdown ul").hide(0);
});

//Show Code links on click in styleguide
$(".code-toggle").click(function(){
    $("a.code").toggle(0);
    $(this).toggleClass("active");
    $("pre").hide(0);
    return false;
});

//Show the different Code snippets in styleguide
$("a.code").click(function(){
    var element = $(this).attr("id");
    $("pre#"+ element).toggle(0);
    console.log(element);
    return false;
});

//Switch Layout in styleguide
$("a.layout").click(function(){
    $layout = $(this).attr('id');
    $("body").removeClass().addClass($layout);
    return false;
});

//Fullscreen
$(".fullscreen-trigger, .fullscreen-close").click(function(){
    $(".fullscreen-overlay").fadeToggle(200);
});

//Sticky Navigation
    $('.sticky').clone().insertAfter('.sticky').addClass('cloned');
    var sticky = $(".sticky");
    var size = 200; /* When the element will get stuck */
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= size) {
            sticky.addClass('active');
        } else {
          sticky.removeClass('active');
        }
    });
//Show Hide Search and Share Bars
  $("a.share").click(function() {
    $("a.share").toggleClass("active");
    $(".share-bar").slideToggle(200);
   $("a.search").removeClass("active");
    $(".search-bar").hide();
  });
  $("a.search").click(function() {
    $("a.search").toggleClass("active");
    $(".search-bar").slideToggle(200);
     $("a.share").removeClass("active");
    $(".share-bar").hide();
  });
//Caption hover effects 1
$(".frame").hover(function(){
    $(this).addClass("hover");
})
    .mouseleave(function(){
    $(this).removeClass("hover");
});

//Fancybox
 $(".fancybox-ref").fancybox({
    padding: 20,
    margin:20,
    prevEffect    : 'none',
    nextEffect    : 'none',
    openEffect  : 'none',
    closeEffect : 'none',
    autoPlay: false,
    playSpeed: 4000,
    scrolling: 'no',
      helpers : {
        overlay: {
          css: {
            'background' : 'rgba(0,0,0,0.90)',
          },
          locked: false,
        },
      }
  });
 $(".fancybox").fancybox({
    padding: 0,
    margin:20,
    prevEffect    : 'none',
    nextEffect    : 'none',
    openEffect  : 'none',
    closeEffect : 'none',
    autoPlay: false,
    playSpeed: 4000,
    scrolling: 'no',
      helpers : {
        overlay: {
          css: {
            'background' : 'rgba(0,0,0,0.90)',
          },
          locked: false,
        },
      }
  });
  $(".fancybox-text").fancybox({
    margin : 0,
    padding : 0
  });
  $('.fancybox-media').fancybox({
    padding: 0,
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
      overlay: {
          css: {
            'background' : 'rgba(0,0,0,0.90)',
          },
          locked: false,
        },
      media : {}
    }
  })

});

$(window).load(function() {
  $(".pulsing-logo").delay(500).fadeOut(500);
  $(".page-loader").delay(1000).fadeOut(500);
});

