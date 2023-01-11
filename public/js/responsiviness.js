//window.addEventListener('resize',
window.onresize = () => {
	let screenWidth = window.innerWidth
    let navCarouselPortfolio = document.getElementsByClassName('owl-nav')[1]
    let nextButton = document.getElementsByClassName('owl-next')[1]
    let prevButton = document.getElementsByClassName('owl-prev')[1]
    let containerCarouselPortfolio = document.getElementById('container-owlCarousel-portifolio')
    let videoCarouselPortfolio = document.querySelectorAll('.container-project video')
    let containerProject = document.querySelectorAll('.container-project')
    let dotsCarouselPortfolio = document.querySelector('#container-owlCarousel-portifolio .owl-dots')
    let infoProjectCollection = document.querySelectorAll('.info-project') 


    if (screenWidth < 1320) {
        navCarouselPortfolio.classList.add('display-none')
        containerCarouselPortfolio.classList.add('width-100Percent')        
    
    }
    if(screenWidth >= 1320) {
        navCarouselPortfolio.classList.remove('display-none')
        containerCarouselPortfolio.classList.remove('width-100Percent')
    }
    if (screenWidth < 1225) {
        videoCarouselPortfolio.forEach((video) => {
            video.style.width = '570px'
            
        })

        containerProject.forEach((containerProject) => {
            containerProject.style.padding = '0px'
        })

        containerCarouselPortfolio.style.paddingTop = '100px'
    }
    if (screenWidth >= 1225) {
        videoCarouselPortfolio.forEach((video) => {
            video.style.width = '700px'
        })

        containerProject.forEach((containerProject) => {
            containerProject.style.padding = '35px 85px'
        })

        containerCarouselPortfolio.style.paddingTop = '50px'
    }
    if (screenWidth < 940) {
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
    if(screenWidth >= 940) {
        dotsCarouselPortfolio.classList.remove('display-none')

        if(screenWidth < 1320) {

            navCarouselPortfolio.classList.add('display-none', 'owl-nav-portfolio-style')
            navCarouselPortfolio.classList.remove('nav-style-screen940px')
            nextButton.classList.add('owl-next-carouselPortfolio-style')
            prevButton.classList.add('owl-prev-carouselPortfolio-style')
            nextButton.classList.remove('buttonsNav-portfolio-screen940px')
            prevButton.classList.remove('buttonsNav-portfolio-screen940px')
            
            containerProject.forEach((containerProject) => {
                containerProject.classList.remove('responsive-displayColumn-carouselPortfolio')
            }) 

            videoCarouselPortfolio.forEach((video) => {
                video.style.width = '570px'
                video.style.marginBottom = '0px'
            })

            infoProjectCollection.forEach((infoProject) => {
                infoProject.classList.remove('infoProject-style-screen940px')
            })
        }
    }
};