$(document).ready(function() {
    $('#my-menu').mmenu({
        extensions: [
            'pagedim-black'],
        navbar: {
            title: '<img src="img/logo_bg.png">'
        },
        offCanvas: {
            position : "left"
        }
    });
});


jQuery(document).ready(function($) {
	$('.owl-carousel').owlCarousel({
		nav:true,
        loop: true,
        autoWidth: true,
        smartSpeed: 700,
        dotsSpeed: 700,
        callbacks: true,
	});
    
    owl.on('translated.owl.carousel', function(event) {
    $('.currentPosition').text( event.item.index );
    });
    
});

$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
        
		fixedContentPos: false
	});
});



//$(document).ready(function(){
//  $(".see_allLink").click(function(){
//    $(this).toggleClass("see_allLink_Test");
//      $(".see_allLink_Test").removeClass("see_allLink");
//  });
//});




