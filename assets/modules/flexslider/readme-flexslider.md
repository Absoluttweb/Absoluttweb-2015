Put this code to the "script" section of the page:

<script type="text/javascript">
	$(window).load(function() {
		$('.flexslider').flexslider({
			slideshow: true,
			animation: "fade",
			easing: "easeOutSine",
			directionNav: false,
			controlNav: true, /* "thumbnails" or true */
			controlsContainer: ".flexslider-custom-links",
			manualControls: ".flex-control li",
		});
		$('.flex-loader').hide();
	});
</script>

Look at Rong Maskin for manual control of Slides.

Put this to the DOM:

<div class="flexslider">
	<!--<div class="flex-feature hide-for-small"></div>-->
	<div class="flex-loader"></div>
	<ul class="slides">

		<li data-thumb="/img/globals/placeholder.jpg">
		<img src="/img/globals/placeholder.jpg" />
		<p class="flex-caption"><span>Absoluttweb has the best customer support ever!</span></p>
		</li>

		<li data-thumb="/img/globals/placeholder.jpg">
		<img src="/img/globals/placeholder.jpg" />
		<p class="flex-caption"><span>Absoluttweb has the best customer support ever!</span></p>
		</li>

	</ul>
</div>