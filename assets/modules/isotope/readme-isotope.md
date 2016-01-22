README:

Lim in koden under, og endre ID til eget navn.

Activate scrips and css. NB: Also include the imagesloaded script

DOM:

<div id="PUTNAMEHERE" class="isotope clearfix">
	<div class="item"><a href=""><img src="/img/tjenester.jpg"></a></div>
	<div class="item"><a href=""><img src="/img/tjenester.jpg"></a></div>
	<div class="item"><a href=""><img src="/img/chair.jpg"></a></div>
	<div class="item"><a href=""><img src="/img/tjenester.jpg"></a></div>
	<div class="item"><a href=""><img src="/img/chair.jpg"></a></div>
	<div class="item"><a href=""><img src="/img/chair.jpg"></a></div>
	<div class="item"><a href=""><img src="/img/tjenester.jpg"></a></div>
	<div class="item"><a href=""><img src="/img/tjenester.jpg"></a></div>
	<div class="item"><a href=""><img src="/img/chair.jpg"></a></div>
	<div class="item"><a href=""><img src="/img/tjenester.jpg"></a></div>
	<div class="item"><a href=""><img src="/img/tjenester.jpg"></a></div>
	<div class="item"><a href=""><img src="/img/chair.jpg"></a></div>
</div>

START JS:
<script>
var container = $('#PUTNAMEHERE').imagesLoaded( function() {;
  container.isotope({
    itemSelector: '.item',
    layoutMode: 'masonry',
    transitionDuration: '300ms',
     masonry: {
          columnWidth: '.item',
          gutter: 0 //This must be 0
      }
  })
});

// filter items on button click
$('#filters').on( 'click', 'a.button', function() {
  var filterValue = $(this).attr('data-filter');
  container.isotope({ filter: filterValue });
});
</script>

I Style.scss sett bredde på .item. Dette er kolonne indelingen
Default er 3 kolonner om ikke annet er satt i style.scss

<style>
#PUTNAMEHERE .item {
  width: 25%;
  padding: 10px; /*If space between elements*/
  &.item-2x {
    width: 50%;
  }
  &.item-3x {
    width: 75%;
  }
  &.item-4x {
    width: 100%;
  }
  // ONLY Small
  @media only screen and (max-width: $medium-size) {
    width:50%;
  }
}
</style>
Skal noe spanne over flere kolonner, bruk item-2x og item-3x etc.