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

});