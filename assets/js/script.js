$(document).ready(function(){

	//owl carousel init
	
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop:true,
            nav:false,
            dots:true
        },
        600:{
            items:2,
            loop:true,
            nav:false,
            dots:true
        },
        1000:{
            items:3,
            loop:true,
            nav:false,
            dots:true
        }
    }
})
});
