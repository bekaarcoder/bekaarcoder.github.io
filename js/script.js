$(document).ready(function(){


	function scroller(hash) {
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, 'swing', function(){
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

});