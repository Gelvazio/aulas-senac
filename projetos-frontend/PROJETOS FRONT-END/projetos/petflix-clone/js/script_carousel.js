$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2,
            stagePadding: 100
        },
        500:{
            items:3,
            stagePadding: 100
        },
        700:{
            items:4,
            stagePadding: 100
        },
        1000:{
            items:5,
            stagePadding: 100
        }
    }
})