$(document).ready(function(){


	function scroller(hash) {
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1000, 'swing', function(){
			window.location.hash = hash;
		});
	}

	$('a').on('click', function(event){
		if(this.hash != ''){
			event.preventDefault();
			var hash = this.hash;
			scroller(hash);
		}
	});

	$('#next_page').on('click', function(){
		scroller('#skills');
	});

	$('.ico').hover(function(){
		$('i', this).removeClass('colored').css('color', 'white');
	}, function(){
		$('i', this).addClass('colored').css('color', '');
	});

	function loadImages(){
		var elem = document.getElementById('work');
		var pos = elem.offsetTop;
		if($(window).scrollTop() >= pos){
			$('.project_img img').animate({transform: 'scale(1.1, 1.1)'}, {
				step: function(){
					$(this).css('transform', 'scale(1.1, 1.1)');
				},
				duration: 1000,
				easing: 'linear'
			});
		}
	}

	window.onscroll = loadImages;

	// function parallax() {
	// 	var wScroll = $(window).scrollTop();

	// 	$('.parallax-bg').css('background-position', 'center ' + ((wScroll - 50) * 0.5) + 'px');
	// }

	// $(window).scroll(function(){
	// 	parallax();
	// })

});

	var d = new Date();
	var y = d.getFullYear();
	document.getElementById('currYear').innerHTML = y;

	// parallax-scroll

	window.addEventListener("DOMContentLoaded", scrollLoop, false);

	var parallaximg = document.querySelector("#parallax-img");

	var xScrollPos;
	var yScrollPos;

	function scrollLoop(e) {
		xScrollPos = window.scrollX;
		yScrollPos = window.scrollY;

		setTranslate(0, yScrollPos * -0.5, parallaximg);

		requestAnimationFrame(scrollLoop);
	}

	function setTranslate(xPos, yPos, el){
		el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
	}