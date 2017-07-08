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

$(document).ready(function(){
  let owl = $(".owl-carousel"),
      url = null,
      bgDrop = $(".bg-drop"),
      prev2 = $(".left__S__2"),
      next2 = $(".right__S__2"),
      prev = $("#left"),
      next = $("#right");

  owl.owlCarousel({
    loop: true,
    stagePadding: 150,
    autoWidth: true,
    dots: true,
    smartSpeed: 700,
  });
  owl.on("changed.owl.carousel", function(){
    setTimeout(() => {
      let centerImg = owl.find(".center").find("div"),
          url = centerImg.css('background-image');
      bgDrop.css('background-image', url);
    }, 20)
  });

  next.on("click", ()=>{
    owl.trigger("next.owl.carousel");
  });
  prev.on("click", ()=>{
    owl.trigger("prev.owl.carousel");
  })
    
    next2.on("click", ()=>{
    owl.trigger("next.owl.carousel");
  });
  prev2.on("click", ()=>{
    owl.trigger("prev.owl.carousel");
  })
})


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



$(document).ready(function(){
  $(".p_hoverSectionThreeNone").click(function(){
    $(this).toggleClass("p_hoverSectionThree");
  });
});





