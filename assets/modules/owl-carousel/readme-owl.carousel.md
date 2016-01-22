Add every item withim the "item" DIV. Activate JS and CSS. Edit JS OPTIONS to change controls aso.

<!-- Start Owl Carousel -->
<div id="owl-carousel" class="owl-carousel">
	<!-- Owl Item -->
	<div class="item"></div>
	<!-- End Owl Item -->
</div>

Add this before the Carousel for custom navigation (Previous, next)

<div class="customNavigation">
	<a class="btn prev">Forrige</a>
	<a class="btn next">Neste</a>
</div>

Add this to script on page, and edit values

<script>
    $(document).ready(function() {
    var owl = $("#owl-carousel");
    
    owl.owlCarousel({
        navigation : false, // Show next and prev buttons
        navigationText : ["forrige","neste"],
        pagination: false, // Show dotted pagination
        paginationNumbers: false, // Show numbers in bullets
        autoPlay : true,
        stopOnHover: true,
        singleItem:false,
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 5, //items
        itemsDesktop : [1024,4], //items from here and down
        itemsDesktopSmall : [744,3], //
        itemsTablet: [770,2], //items from here and down
        itemsMobile : [300,1], //items from here and down
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
</script>