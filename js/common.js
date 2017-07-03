$(document).ready(function() {
    $('#my-menu').mmenu({
        navbar: {
            title: '<img src="img/logo_bg.png">'
        }
    });
});

$(document).ready(function(){
  let owl = $(".owl-carousel"),
      url = null,
      bgDrop = $(".bg-drop"),
      prev = $("#left"),
      next = $("#right");

  owl.owlCarousel({
    loop: true,
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
})