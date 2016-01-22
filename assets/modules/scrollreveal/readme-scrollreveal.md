Activate scrollreveal.js to the include script. There is no CSS.

Add DATA object to the element to be animated - dara-sr. Can then add custom animations if wanted. See example below

HEAD:

<style> [data-sr] { visibility: hidden; } </style>

DOM:

<div class="band-grey" data-sr="wait 0.5s then move 100px over 1s">
	<div class="row">
		<div class="large-12 text-center columns">
			<h3 class="type-1">Title</h3>
			<h3 class="type-2">Subtitle</h3>
		</div>
	</div>
</div>

INITIATE:

<script type="text/javascript">
	(function($) {
		'use strict';
		window.sr= new scrollReveal({
		  mobile: false,
		});
	})();
</script>

See keywords for animation here:
https://github.com/julianlloyd/scrollReveal.js/wiki/Keywords