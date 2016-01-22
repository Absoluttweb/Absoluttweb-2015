//OWL Carousel
$(document).ready(function() {
  
  var owl = $("#owl-carousel");
  
  owl.owlCarousel({
      navigation : false, // Show next and prev buttons
      navigationText : ["forrige","neste"],
      pagination: true, // Show dotted pagination
      paginationNumbers: true, // Show numbers in bullets
      autoPlay : true,
      stopOnHover: true,
      singleItem:false,
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 2, //items
      itemsDesktop : [1024,2], //items from here and down
      itemsDesktopSmall : [744,2], //
      itemsTablet: [560,1], //items from here and down
      itemsMobile : [430,1], //items from here and down
  });
  
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play'); //owl.play event accept autoPlay speed as second parameter
})
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
  
});