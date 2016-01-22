Activate readmore JS in Scripts

Add this to the page script:

<script>
//Readmore
$(".readmore").readmore({
	embedCSS: false,
	maxHeight: 72,
	moreLink: '<a href="#">...vis all tekst</a>',
	lessLink: '<a href="#">skjul tekst</a>'
});
</script>

DOM:
<div class="readmore">
	Content
</div>