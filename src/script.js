(function ($) {
	$(function () {
		$('button').click(function () {
			alert("Let's get SASSY!");
			$( "img" ).fadeIn().addClass( "logo-show" );
			$( ".circle" ).fadeIn().addClass( "logo-show" );
		});
	});
})(jQuery); 