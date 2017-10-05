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
    
    
    $('.slider-one').owlCarousel({
		nav:true,
        loop: true,
        autoWidth: true,
        smartSpeed: 700,
        dotsSpeed: 700,
        callbacks: true,
        onInitialized  : owlIndex,
        onTranslated  : owlIndex,
	});
    
    $('.slider-two').owlCarousel({
        loop: true,
        smartSpeed: 800,
        stagePadding: 70,
        margin: 5,
        items: 1,
        dotsSpeed: 800,
        center: true,
        onInitialized  : owlIndexTwo,
        onTranslated  : owlIndexTwo,
	});
    
        $('.slider-three').owlCarousel({
        loop: true,
        smartSpeed: 800,
        stagePadding: 70,
        margin: 5,
        items: 1,
        dotsSpeed: 800,
        center: true,
        onInitialized  : owlIndexThree,
        onTranslated  : owlIndexThree,
	});
    
    function owlIndex(event) {
        var items     = event.item.count; //Общее кол-во слайдеров
        var item      = (event.item.index + 1) - event.relatedTarget._clones.length / 2; // Нынешний индекс слайда
      if (item > items  || item == 0) {return item = items  - (item % items);}
      $('.counts').html(`<span class="item">0${item}</span> / <span class="items">0${items}</span>`) // Заносим в DOM дерево
    };
    
    
    function owlIndexTwo(event) {
        var items     = event.item.count; //Общее кол-во слайдеров
        var item      = (event.item.index + 1) - event.relatedTarget._clones.length / 2; // Нынешний индекс слайда
      if (item > items  || item == 0) {return item = items  - (item % items);}
      $('.counts-two').html(`<span class="item">0${item}</span> / <span class="items">0${items}</span>`) // Заносим в DOM дерево
    };
    
    
    function owlIndexThree(event) {
        var items     = event.item.count; //Общее кол-во слайдеров
        var item      = (event.item.index + 1) - event.relatedTarget._clones.length / 2; // Нынешний индекс слайда
      if (item > items  || item == 0) {return item = items  - (item % items);}
      $('.counts-three').html(`<span class="item">0${item}</span> / <span class="items">0${items}</span>`) // Заносим в DOM дерево
    };
    
    
    
    
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
        
		fixedContentPos: false
	});
});


$('.see_allLink-one').click(function(){
    $('.hidden_text-one').toggleClass('show_text-one');
    $('.see_allLink-one').empty();
});

$('.hidden_text-one').click(function(){
    $('.see_allLink-one').text('Показать полностью');
    $('.hidden_text-one').removeClass('show_text-one');
});



$('.see_allLink-two').click(function(){
    $('.hidden_text-two').toggleClass('show_text-two');
    $('.see_allLink-two').empty();
});

$('.hidden_text-two').click(function(){
    $('.see_allLink-two').text('Показать полностью');
    $('.hidden_text-two').removeClass('show_text-two');
});




// section ten, hidden text and show text

$('.click_plusInfo-one').click(function(){
    $('.click__sectionten--hidden-one').toggleClass('click__sectionten--show-one');
    $('.click_plusInfo-one').toggleClass('click_plusInfo--hidden-one');
    $('.click_plus--hidden-one').toggleClass('click_plus--show-one');
});
$('.click_plus--hidden-one').click(function(){
    $(this).removeClass('click_plus--show-one');
    $('.click_plusInfo-one').removeClass('click_plusInfo--hidden-one');
    $('.click__sectionten--hidden-one').removeClass('click__sectionten--show-one');
});




$('.click_plusInfo-two').click(function(){
    $('.click__sectionten--hidden-two').toggleClass('click__sectionten--show-two');
    $('.click_plusInfo-two').toggleClass('click_plusInfo--hidden-two');
    $('.click_plus--hidden-two').toggleClass('click_plus--show-two');
});
$('.click_plus--hidden-two').click(function(){
    $(this).removeClass('click_plus--show-two');
    $('.click_plusInfo-two').removeClass('click_plusInfo--hidden-two');
    $('.click__sectionten--hidden-two').removeClass('click__sectionten--show-two');
});




$('.click_plusInfo-three').click(function(){
    $('.click__sectionten--hidden-three').toggleClass('click__sectionten--show-three');
    $('.click_plusInfo-three').toggleClass('click_plusInfo--hidden-three');
    $('.click_plus--hidden-three').toggleClass('click_plus--show-three');
});
$('.click_plus--hidden-three').click(function(){
    $(this).removeClass('click_plus--show-three');
    $('.click_plusInfo-three').removeClass('click_plusInfo--hidden-three');
    $('.click__sectionten--hidden-three').removeClass('click__sectionten--show-three');two
});




$('.click_plusInfo-four').click(function(){
    $('.click__sectionten--hidden-four').toggleClass('click__sectionten--show-four');
    $('.click_plusInfo-four').toggleClass('click_plusInfo--hidden-four');
    $('.click_plus--hidden-four').toggleClass('click_plus--show-four');
});
$('.click_plus--hidden-four').click(function(){
    $(this).removeClass('click_plus--show-four');
    $('.click_plusInfo-four').removeClass('click_plusInfo--hidden-four');
    $('.click__sectionten--hidden-four').removeClass('click__sectionten--show-four');
});


















