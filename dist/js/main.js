$(document).ready(function(){
	/*
	 * Images
	 */
	$('a[data-url]').click(function(e){
		e.preventDefault();
		var url = $(this).data('url');
		$('.popup__content').prepend('<img id="theImg" src="'+ url + '" />')
		$('.popup').fadeIn();
	});

	$('.popup__shade, .popup__content .close').click(function(){
		$('.popup').fadeOut();
		setTimeout(function(){
			$('.popup__content').find('img').remove();
		}, 500);
	});
});