window.addEventListener('resize', responsiveCarouselPortfolio);
window.addEventListener('load', responsiveCarouselPortfolio)

 function responsiveCarouselPortfolio () {
	let screenWidth = window.innerWidth
    let navCarouselPortfolio = document.getElementsByClassName('owl-nav')[1]
    let nextButton = document.getElementsByClassName('owl-next')[1]
    let prevButton = document.getElementsByClassName('owl-prev')[1]
    let containerCarouselPortfolio = document.getElementById('container-owlCarousel-portifolio')
    let videoCarouselPortfolio = document.querySelectorAll('.container-project video')
    let containerProject = document.querySelectorAll('.container-project')
    let dotsCarouselPortfolio = document.querySelector('#container-owlCarousel-portifolio .owl-dots')
    let infoProjectCollection = document.querySelectorAll('.info-project') 


    if(screenWidth > 1090) {        
        
        //----Undo < 940px && 1320px >  
        navCarouselPortfolio.classList.remove('display-none')
        
        containerProject.forEach((containerProject) => {
            containerProject.style.padding = '35px 85px'
        })
        //--------------------------------


        //----Undo < 940px
        dotsCarouselPortfolio.classList.remove('display-none')
        navCarouselPortfolio.classList.add('owl-nav-portfolio-style')
        navCarouselPortfolio.classList.remove('nav-style-screen940px')
        nextButton.classList.add('owl-next-carouselPortfolio-style')
        prevButton.classList.add('owl-prev-carouselPortfolio-style')
        nextButton.classList.remove('buttonsNav-portfolio-screen940px')
        prevButton.classList.remove('buttonsNav-portfolio-screen940px')

        containerProject.forEach((containerProject) => {
            containerProject.classList.remove('responsive-displayColumn-carouselPortfolio')
        })

        videoCarouselPortfolio.forEach((video) => {
            video.style.width = '60%'
            video.style.marginBottom = '0px'
        })

        infoProjectCollection.forEach((infoProject) => {
            infoProject.classList.remove('infoProject-style-screen940px')
        })
        //-----------------------------------------------
    }

    if (screenWidth )

    if (screenWidth > 900 && screenWidth <= 1090) {
        navCarouselPortfolio.classList.add('display-none')             
        containerCarouselPortfolio.style.paddingTop = '50px'

        containerProject.forEach((containerProject) => {
            containerProject.style.padding = '0px 20px'
        }) 

        //----Undo < 940px
        dotsCarouselPortfolio.classList.remove('display-none')
        navCarouselPortfolio.classList.add('owl-nav-portfolio-style')
        navCarouselPortfolio.classList.remove('nav-style-screen940px')
        nextButton.classList.add('owl-next-carouselPortfolio-style')
        prevButton.classList.add('owl-prev-carouselPortfolio-style')
        nextButton.classList.remove('buttonsNav-portfolio-screen940px')
        prevButton.classList.remove('buttonsNav-portfolio-screen940px')

        containerProject.forEach((containerProject) => {
            containerProject.classList.remove('responsive-displayColumn-carouselPortfolio')
        })

        videoCarouselPortfolio.forEach((video) => {
            video.style.width = '60%'
            video.style.marginBottom = '0px'
        })

        infoProjectCollection.forEach((infoProject) => {
            infoProject.classList.remove('infoProject-style-screen940px')
        })

        //-----------------------------------------------    
    
    }    

    

    if (screenWidth <= 900) {
        
        dotsCarouselPortfolio.classList.add('display-none')
        navCarouselPortfolio.classList.remove('display-none', 'owl-nav-portfolio-style')
        navCarouselPortfolio.classList.add('nav-style-screen940px')
        nextButton.classList.remove('owl-next-carouselPortfolio-style')
        prevButton.classList.remove('owl-prev-carouselPortfolio-style')
        nextButton.classList.add('buttonsNav-portfolio-screen940px')
        prevButton.classList.add('buttonsNav-portfolio-screen940px')
        
        containerProject.forEach((containerProject) => {
            containerProject.classList.add('responsive-displayColumn-carouselPortfolio')
        })

        videoCarouselPortfolio.forEach((video) => {
            video.style.width = '100%'
            video.style.marginBottom = '15px'
        })

        infoProjectCollection.forEach((infoProject) => {
            infoProject.classList.add('infoProject-style-screen940px')
        })

    }
};