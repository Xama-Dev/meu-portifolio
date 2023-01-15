$(document).ready(function() {
    $(".owl-carousel-advantages").owlCarousel({
        loop:false,
        margin:50,
        responsiveClass: false,
        nav: true,
        items: 1,
        center: false,
        autoplay: false,
        autoplayHoverPause: true

        
    });

    //add dynamically style on next and prev button nav
    let nextButton = document.getElementsByClassName('owl-next')[0]
    let prevButton = document.getElementsByClassName('owl-prev')[0]

    nextButton.classList.add('owl-next-carouselAdvantages-style')
    prevButton.classList.add('owl-prev-carouselAdvantages-style')

});

$(document).ready(function() {
    $(".owl-carousel-portfolio").owlCarousel({
        loop:false,
        margin:50,
        items: 1,
        center: false,
        autoplay: false,
        autoplayHoverPause: true,
        nav:true
        
    });

    //add dynamically style on nav carousel-portfolio
    let navCarouselPortfolio = document.getElementsByClassName('owl-nav')[1]    
    navCarouselPortfolio.classList.add('owl-nav-portfolio-style')

    //add dynamically style on next and prev button nav
    let nextButton = document.getElementsByClassName('owl-next')[1]
    let prevButton = document.getElementsByClassName('owl-prev')[1]

    nextButton.classList.add('owl-next-carouselPortfolio-style')
    prevButton.classList.add('owl-prev-carouselPortfolio-style')
});
