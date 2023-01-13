window.addEventListener('resize', ()=> {
    responsiveCarouselPortfolio();
    responsiveSkillsSection ();
});

window.addEventListener('load', () => {
    responsiveCarouselPortfolio();
    responsiveSkillsSection ();
});

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
    let descriptonProject = document.querySelectorAll('.text-description')


    if(screenWidth > 1090) {        
        
        //----Undo < 900px && 1090px >  
        navCarouselPortfolio.classList.remove('display-none')
        
        containerProject.forEach((containerProject) => {
            containerProject.style.padding = '35px 85px'
        })
        //--------------------------------


        //----Undo < 900px
        dotsCarouselPortfolio.classList.remove('display-none')
        navCarouselPortfolio.classList.add('owl-nav-portfolio-style')
        navCarouselPortfolio.classList.remove('nav-style-screen900px')
        nextButton.classList.add('owl-next-carouselPortfolio-style')
        prevButton.classList.add('owl-prev-carouselPortfolio-style')
        nextButton.classList.remove('buttonsNav-portfolio-screen900px')
        prevButton.classList.remove('buttonsNav-portfolio-screen900px')

        containerProject.forEach((containerProject) => {
            containerProject.classList.remove('responsive-displayColumn-carouselPortfolio')
        })

        videoCarouselPortfolio.forEach((video) => {
            video.style.width = '50vw'
            video.style.marginBottom = '0px'
        })

        infoProjectCollection.forEach((infoProject) => {
            infoProject.classList.remove('infoProject-style-screen900px')
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

        //----Undo < 900px
        dotsCarouselPortfolio.classList.remove('display-none')
        navCarouselPortfolio.classList.add('owl-nav-portfolio-style')
        navCarouselPortfolio.classList.remove('nav-style-screen900px')
        nextButton.classList.add('owl-next-carouselPortfolio-style')
        prevButton.classList.add('owl-prev-carouselPortfolio-style')
        nextButton.classList.remove('buttonsNav-portfolio-screen900px')
        prevButton.classList.remove('buttonsNav-portfolio-screen900px')
        
        descriptonProject.forEach((textDescription) => {
            textDescription.classList.remove('text-projectinfo-center')
        })

        containerProject.forEach((containerProject) => {
            containerProject.classList.remove('responsive-displayColumn-carouselPortfolio')
        })

        videoCarouselPortfolio.forEach((video) => {
            video.style.width = '50vw'
            video.style.marginBottom = '0px'
        })

        infoProjectCollection.forEach((infoProject) => {
            infoProject.classList.remove('infoProject-style-screen900px')
        })

        //-----------------------------------------------    
    
    }       

    if (screenWidth <= 900) {
        
        dotsCarouselPortfolio.classList.add('display-none')
        navCarouselPortfolio.classList.remove('display-none', 'owl-nav-portfolio-style')
        navCarouselPortfolio.classList.add('nav-style-screen900px')
        nextButton.classList.remove('owl-next-carouselPortfolio-style')
        prevButton.classList.remove('owl-prev-carouselPortfolio-style')
        nextButton.classList.add('buttonsNav-portfolio-screen900px')
        prevButton.classList.add('buttonsNav-portfolio-screen900px')
        
        descriptonProject.forEach((textDescription) => {
            textDescription.classList.add('text-projectinfo-center')
        })
        
        containerProject.forEach((containerProject) => {
            containerProject.classList.add('responsive-displayColumn-carouselPortfolio')
        })

        videoCarouselPortfolio.forEach((video) => {
            video.style.width = '100%'
            video.style.marginBottom = '15px'
        })

        infoProjectCollection.forEach((infoProject) => {
            infoProject.classList.add('infoProject-style-screen900px')
        })

    }
};

function responsiveSkillsSection () {
    let screenWidth = window.innerWidth
    
    let sectionSkills = document.getElementById('section-skills')
    let pContainerSkills = document.querySelector('#container-skills p')
    
    let containerImagesFrontendSkills = document.querySelector('#container-frontEnd-skills .img-row-skills')
    let firstRowImagesFrontendSkills = document.querySelector('#container-frontEnd-skills .img-row-skills div:first-child')
   

    let containerImagesBackendSkills = document.querySelector('#container-backEnd-skills .img-row-skills')
    let imgCenterBackendSkills = document.getElementById('image-center-backend-skills')
    let firstImagesResposiveColumnBackandSkills = document.querySelectorAll('.firstImage-responsive-column')
    
    if(screenWidth > 1080) {
        //Undo <= 1080px
        sectionSkills.classList.remove('section-skills-resposiveHeight')

        pContainerSkills.classList.remove('resposive-text-greeting-skills-section')
        
        containerImagesFrontendSkills.classList.remove('img-column-frontend-skills')
        firstRowImagesFrontendSkills.classList.remove('marginBottom-firstRow-containerImages-Frontend-skills')

        containerImagesBackendSkills.classList.remove('width-responsive-container-images-backend')
        containerImagesBackendSkills.classList.remove('width-responsive-container-images-backend-640px')

        imgCenterBackendSkills.classList.remove('width-imageCenter-backend-skills')
        firstImagesResposiveColumnBackandSkills.forEach((img)=> {
            img.classList.remove('marginBottom-firstImage-responsiveColumn-backend-skills')
        })

    }

    if(screenWidth <= 1080 && screenWidth > 640) {
        sectionSkills.classList.add('section-skills-resposiveHeight')

        pContainerSkills.classList.add('resposive-text-greeting-skills-section')
        
        containerImagesFrontendSkills.classList.add('img-column-frontend-skills')
        firstRowImagesFrontendSkills.classList.add('marginBottom-firstRow-containerImages-Frontend-skills')

        containerImagesBackendSkills.classList.add('width-responsive-container-images-backend')
        containerImagesBackendSkills.classList.remove('width-responsive-container-images-backend-640px')


        imgCenterBackendSkills.classList.add('width-imageCenter-backend-skills')
        firstImagesResposiveColumnBackandSkills.forEach((img)=> {
            img.classList.add('marginBottom-firstImage-responsiveColumn-backend-skills')
        })
    }

    if (screenWidth <= 640) {
        //set only front-end skills layout
        sectionSkills.classList.add('section-skills-resposiveHeight')

        pContainerSkills.classList.add('resposive-text-greeting-skills-section')
        
        containerImagesFrontendSkills.classList.add('img-column-frontend-skills')
        firstRowImagesFrontendSkills.classList.add('marginBottom-firstRow-containerImages-Frontend-skills')

        //set only backend skills layout
        imgCenterBackendSkills.classList.remove('width-imageCenter-backend-skills')
        containerImagesBackendSkills.classList.remove('width-responsive-container-images-backend')
        containerImagesBackendSkills.classList.add('width-responsive-container-images-backend-640px')
        firstImagesResposiveColumnBackandSkills.forEach((img)=> {
            img.classList.add('marginBottom-firstImage-responsiveColumn-backend-skills')
        })
    }


}