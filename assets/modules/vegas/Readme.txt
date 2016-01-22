Putt denne før /body på sidene det gjelder.

Options and setup: http://vegas.jaysalvat.com/documentation/setup/

NORMAL
$.vegas({
      src:'/img/vegas-bg.jpg'
    });
$.vegas('overlay', {
  src:'/img/overlays/13.png'
});

SLIDESHOW
	$.vegas('slideshow', {
		delay:5000,
		backgrounds:[
		{ src:'/img/slide1.jpg', fade:1000 },
		{ src:'/img/slide2.jpg', fade:1000 },
		{ src:'/img/slide3.jpg', fade:1000 }
		]
	})('overlay', {
  src:'/img/overlays/02.png'
});
