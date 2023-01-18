window.addEventListener('resize', ()=> {
    responsiveCarouselPortfolio();
    responsiveSkillsSection ();
    reponsivePresentationSection ();
    responsiveAdvantages ();
    responsiveFooter ();
    responsiveNav ();
});

window.addEventListener('load', () => {
    responsiveCarouselPortfolio();
    responsiveSkillsSection ();
    reponsivePresentationSection ();
    responsiveAdvantages ();
    responsiveFooter ();
    responsiveNav ();
});

function responsiveNav () {
    let screenWidth = window.innerWidth
    let containerMenu = document.querySelector('.container-menu')
    
    let btnMenu = document.querySelector('.btn-menu')
    let menuAside = document.querySelector('.aside-menu')
    let menuAsideMarginLeft = menuAside.style.marginLeft
    
    let btnCloseAsideMenu = document.querySelector('.fa-xmark')



    if (screenWidth > 800) {
        
        //Undo <= 800px
        containerMenu.classList.remove('display-none')
        btnMenu.classList.add('display-none')
        
        menuAside.style.marginLeft = '-251px'
        menuAsideMarginLeft = menuAside.style.marginLeft
        //-------------------------

    }
    
    if (screenWidth <= 800) {
        containerMenu.classList.add('display-none')
        btnMenu.classList.remove('display-none')
        
        btnMenu.addEventListener('click', ()=> {            
            if (menuAsideMarginLeft == '-251px') {
                menuAside.style.marginLeft = '0px'
                
            }
            if (menuAsideMarginLeft == '0px') {
                menuAside.style.marginLeft = '-251px'

            } 

            menuAsideMarginLeft = menuAside.style.marginLeft            
        })
    
        btnCloseAsideMenu.addEventListener('click', ()=> {
            menuAside.style.marginLeft = '-251px'
            menuAsideMarginLeft = menuAside.style.marginLeft
        })
    }

}

function reponsivePresentationSection () {
    let screenWidth = document.body.clientWidth
    
    let containerPresentation = document.getElementById('container-presentation')
    let containerGreeting = document.querySelector('.container-greeting')
    
    let textPresentation = document.getElementById('presentation-text')

    let wrapContactSocialmedia = document.querySelector('.wrap-contatos-resesSociais')
    let containerContact = document.getElementById('container-contatos')
    let cityCountryPresentation = document.getElementById('city-country-presentation')
    let containerSocialMedia = document.getElementById('container-redesSociais')

    let divsContainerContact = document.querySelectorAll('#container-contatos div')
    let divsContainerSocialMedia = document.querySelectorAll('#container-redesSociais div')

    let toolTipCopyEmail = document.getElementById('toolTip-copy')
    let toolTipCopiedEmail = document.getElementById('toolTip-copied')

    if(screenWidth > 1040) {
        containerContact.classList.remove('container-contact-marginLeft-responsive-1040px')
        containerSocialMedia.classList.remove('container-socialMedia-marginRight-responsive-1040px')

        
        //Undo < 780px
        textPresentation.classList.remove('text-presentation-resposive-fontSize-780px')
        wrapContactSocialmedia.classList.remove('displayFlex-wrapContactSocialmedia-responsive-780px')

        containerContact.classList.add('container-contatos')
        containerContact.classList.remove('container-contact-responsive-780px')

        containerSocialMedia.classList.add('container-redesSociais')
        containerSocialMedia.classList.remove('container-socialMidia-responsive-780px')

        divsContainerContact.forEach((div)=> {
            div.classList.add('marginBotton-8px')
            div.classList.remove('style-button-contacts-socialMidea')
        })
        divsContainerSocialMedia.forEach((div)=> {
            div.classList.add('marginBotton-8px')
            div.classList.remove('style-button-contacts-socialMidea')
        })

        cityCountryPresentation.classList.remove('city-country-marginBottom-responsive-780px')
        containerPresentation.classList.remove('container-presentation-height-responsive-780px')

        toolTipCopyEmail.classList.remove('toolTip-copyEmail-newPosition-resposive-780px')
        toolTipCopiedEmail.classList.remove('toolTip-copiedEmail-newPosition-resposive-780px')
        //----------------------------------

        //Undo <= 500
        containerGreeting.classList.remove('style-containerGreeting-screen500px')
        textPresentation.classList.remove('width-containerTextPresentantion-screnn500px')
        toolTipCopyEmail.classList.remove('display-none')
        toolTipCopiedEmail.classList.remove('marginLeft-toolTipCopied-screen500px')
        //------------------------------------
    }

    if (screenWidth > 780 && screenWidth <= 1040) {
        
        //Undo < 780px
        textPresentation.classList.remove('text-presentation-resposive-fontSize-780px')
        wrapContactSocialmedia.classList.remove('displayFlex-wrapContactSocialmedia-responsive-780px')

        containerContact.classList.add('container-contatos', 'container-contact-marginLeft-responsive-1040px')
        containerContact.classList.remove('container-contact-responsive-780px')

        containerSocialMedia.classList.add('container-redesSociais', 'container-socialMedia-marginRight-responsive-1040px')
        containerSocialMedia.classList.remove('container-socialMidia-responsive-780px')

        divsContainerContact.forEach((div)=> {
            div.classList.add('marginBotton-8px')
            div.classList.remove('style-button-contacts-socialMidea')
        })
        divsContainerSocialMedia.forEach((div)=> {
            div.classList.add('marginBotton-8px')
            div.classList.remove('style-button-contacts-socialMidea')
        })

        cityCountryPresentation.classList.remove('city-country-marginBottom-responsive-780px')
        containerPresentation.classList.remove('container-presentation-height-responsive-780px')

        toolTipCopyEmail.classList.remove('toolTip-copyEmail-newPosition-resposive-780px')
        toolTipCopiedEmail.classList.remove('toolTip-copiedEmail-newPosition-resposive-780px')
        //----------------------------------

        //Undo <= 500
        containerGreeting.classList.remove('style-containerGreeting-screen500px')
        textPresentation.classList.remove('width-containerTextPresentantion-screnn500px')
        toolTipCopyEmail.classList.remove('display-none')
        toolTipCopiedEmail.classList.remove('marginLeft-toolTipCopied-screen500px')
        //------------------------------------

    }

    if (screenWidth <= 780 && screenWidth > 500) {

        textPresentation.classList.add('text-presentation-resposive-fontSize-780px')
        wrapContactSocialmedia.classList.add('displayFlex-wrapContactSocialmedia-responsive-780px')

        containerContact.classList.remove('container-contatos', 'container-contact-marginLeft-responsive-1040px')
        containerContact.classList.add('container-contact-responsive-780px')

        containerSocialMedia.classList.remove('container-redesSociais', 'container-socialMedia-marginRight-responsive-1040px')
        containerSocialMedia.classList.add('container-socialMidia-responsive-780px')

        divsContainerContact.forEach((div)=> {
            div.classList.remove('marginBotton-8px')
            div.classList.add('style-button-contacts-socialMidea')
        })
        divsContainerSocialMedia.forEach((div)=> {
            div.classList.remove('marginBotton-8px')
            div.classList.add('style-button-contacts-socialMidea')
        })

        cityCountryPresentation.classList.add('city-country-marginBottom-responsive-780px')
        containerPresentation.classList.add('container-presentation-height-responsive-780px')

        toolTipCopyEmail.classList.add('toolTip-copyEmail-newPosition-resposive-780px')
        toolTipCopiedEmail.classList.add('toolTip-copiedEmail-newPosition-resposive-780px')

        //Undo <= 500
        containerGreeting.classList.remove('style-containerGreeting-screen500px')
        textPresentation.classList.remove('width-containerTextPresentantion-screnn500px')
        toolTipCopyEmail.classList.remove('display-none')
        toolTipCopiedEmail.classList.remove('marginLeft-toolTipCopied-screen500px')
        //------------------------------------
    }

    if (screenWidth <= 500) {

        containerGreeting.classList.add('style-containerGreeting-screen500px')
        textPresentation.classList.add('width-containerTextPresentantion-screnn500px')
        toolTipCopyEmail.classList.add('display-none')
        toolTipCopiedEmail.classList.add('marginLeft-toolTipCopied-screen500px')
        

        //-----recebe toda configuração anterior de <= 780 && screenWidth > 500
        textPresentation.classList.add('text-presentation-resposive-fontSize-780px')
        wrapContactSocialmedia.classList.add('displayFlex-wrapContactSocialmedia-responsive-780px')

        containerContact.classList.remove('container-contatos', 'container-contact-marginLeft-responsive-1040px')
        containerContact.classList.add('container-contact-responsive-780px')

        containerSocialMedia.classList.remove('container-redesSociais', 'container-socialMedia-marginRight-responsive-1040px')
        containerSocialMedia.classList.add('container-socialMidia-responsive-780px')

        divsContainerContact.forEach((div)=> {
            div.classList.remove('marginBotton-8px')
            div.classList.add('style-button-contacts-socialMidea')
        })
        divsContainerSocialMedia.forEach((div)=> {
            div.classList.remove('marginBotton-8px')
            div.classList.add('style-button-contacts-socialMidea')
        })

        cityCountryPresentation.classList.add('city-country-marginBottom-responsive-780px')
        containerPresentation.classList.add('container-presentation-height-responsive-780px')

        toolTipCopyEmail.classList.add('toolTip-copyEmail-newPosition-resposive-780px')
        toolTipCopiedEmail.classList.add('toolTip-copiedEmail-newPosition-resposive-780px')
        //--------------------------------------------------------------------
    }
}

function responsiveSkillsSection () {
    let screenWidth = document.body.clientWidth

    let skillsSection = document.getElementById('section-skills')

    
    let sectionSkills = document.getElementById('section-skills')
    let pContainerSkills = document.querySelector('#container-skills p')
    let containerBtnsChangeSkills = document.getElementById('conteiner-btnChangeSkills')
    
    let containerFrontendSkills = document.getElementById('container-frontEnd-skills')
    let containerImagesFrontendSkills = document.querySelector('#container-frontEnd-skills .img-row-skills')
    let firstRowImagesFrontendSkills = document.querySelector('#container-frontEnd-skills .img-row-skills div:first-child')
    let divContainerImagesFrontendSkills = document.querySelectorAll('#container-frontEnd-skills .img-row-skills div')
    let allImagensFrontendSkills = document.querySelectorAll('#container-frontEnd-skills .img-row-skills img')
   
    let containerBackendSkills = document.getElementById('container-backEnd-skills')
    let containerImagesBackendSkills = document.querySelector('#container-backEnd-skills .img-row-skills')
    let divContainerImageCenterBackandSkills = document.querySelectorAll('#container-backEnd-skills .img-row-skills div')[1]
    let imgCenterBackendSkills = document.getElementById('image-center-backend-skills')
    let firstImagesResposiveColumnBackandSkills = document.querySelectorAll('.firstImage-responsive-column')
    let allImagensBackendSkills = document.querySelectorAll('#container-backEnd-skills .img-row-skills img')
    
    if(screenWidth > 1080) {
        //Undo <= 1080px
        sectionSkills.classList.remove('section-skills-resposiveHeight')
 
        pContainerSkills.classList.remove('resposive-text-greeting-skills-section')
        
        containerBtnsChangeSkills.classList.remove('container-btns-changeSkills-width-screen640px')
        
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
        
        containerBtnsChangeSkills.classList.remove('container-btns-changeSkills-width-screen640px')
        
        containerImagesFrontendSkills.classList.add('img-column-frontend-skills')
        firstRowImagesFrontendSkills.classList.add('marginBottom-firstRow-containerImages-Frontend-skills')
 
        containerImagesBackendSkills.classList.add('width-responsive-container-images-backend')
        containerImagesBackendSkills.classList.remove('width-responsive-container-images-backend-640px')
 
 
        imgCenterBackendSkills.classList.add('width-imageCenter-backend-skills')
        firstImagesResposiveColumnBackandSkills.forEach((img)=> {
            img.classList.add('marginBottom-firstImage-responsiveColumn-backend-skills')
        })
    }
 
    if (screenWidth <= 640 && screenWidth > 500) {
        //set only front-end skills layout
        sectionSkills.classList.add('section-skills-resposiveHeight')
 
        pContainerSkills.classList.add('resposive-text-greeting-skills-section')

        containerBtnsChangeSkills.classList.add('container-btns-changeSkills-width-screen640px')
        
        containerImagesFrontendSkills.classList.add('img-column-frontend-skills')
        firstRowImagesFrontendSkills.classList.add('marginBottom-firstRow-containerImages-Frontend-skills')
 
        //set only backend skills layout
        imgCenterBackendSkills.classList.remove('width-imageCenter-backend-skills')
        containerImagesBackendSkills.classList.remove('width-responsive-container-images-backend')
        containerImagesBackendSkills.classList.add('width-responsive-container-images-backend-640px')
        firstImagesResposiveColumnBackandSkills.forEach((img)=> {
            img.classList.add('marginBottom-firstImage-responsiveColumn-backend-skills')
        })

        //Undo <= 500
        //Front-end
        skillsSection.classList.remove('heigth-skillsSection-screnn500px')
        pContainerSkills.classList.remove('style-p-text-screen500px')
        containerBtnsChangeSkills.classList.remove('style-btnsSkills-500px')
        containerFrontendSkills.classList.remove('marginTop-containerFrontendSkills-screen500px')

        divContainerImagesFrontendSkills.forEach((div=> {
            div.classList.remove('div-containerImages-frontendSkills-flexColumn-screen500px')
        } ))

        allImagensFrontendSkills.forEach((img)=> {
            img.classList.remove('margin-AllimagesFrontendSkills-screen500px')
        })

        //back-end
        containerImagesBackendSkills.classList.remove('images-column-backend-skills')
        containerBackendSkills.classList.remove('marginTop-containerBackendSkills-screen500px')
        divContainerImageCenterBackandSkills.classList.remove('image-center-backendSkills-centralize-screen500px')

        allImagensBackendSkills.forEach((img)=> {
            img.classList.remove('margin-AllimagesBackendSkills-screen500px')
        })

        //--------------------

    }

    if (screenWidth <= 500) {
        skillsSection.classList.add('heigth-skillsSection-screnn500px')
        pContainerSkills.classList.add('style-p-text-screen500px')
        containerBtnsChangeSkills.classList.add('style-btnsSkills-500px')
        
        //front-end skills
        containerImagesFrontendSkills.classList.remove('img-column-frontend-skills')
        containerFrontendSkills.classList.add('marginTop-containerFrontendSkills-screen500px')

        divContainerImagesFrontendSkills.forEach((div=> {
            div.classList.add('div-containerImages-frontendSkills-flexColumn-screen500px')
        } ))

        allImagensFrontendSkills.forEach((img)=> {
            img.classList.add('margin-AllimagesFrontendSkills-screen500px')
        })
        //---------------------

        //back-end skills
        containerImagesBackendSkills.classList.add('images-column-backend-skills')
        containerBackendSkills.classList.add('marginTop-containerBackendSkills-screen500px')
        divContainerImageCenterBackandSkills.classList.add('image-center-backendSkills-centralize-screen500px')

        allImagensBackendSkills.forEach((img)=> {
            img.classList.add('margin-AllimagesBackendSkills-screen500px')
        })
        //---------------------
        
    }
 
 
 }

 function responsiveAdvantages () {
    let screenWidth = window.innerWidth
    
    let dotsCarouselAdvantages = document.querySelector('#container-owlCarousel-advantages .owl-dots')
    let navCarouselAdvantages = document.querySelector('#container-owlCarousel-advantages .owl-nav')
    let owlCarousel = document.querySelector('.owl-carousel-advantages')
    let containerCarouselAdvantages = document.getElementById('container-owlCarousel-advantages')
    let containersAdvantage = document.querySelectorAll('.container-advantage')
    let prevButton = document.querySelector('#container-owlCarousel-advantages .owl-prev')
    let nextButton = document.querySelector('#container-owlCarousel-advantages .owl-next')

    if (screenWidth > 720) {
        
        // Undo <= 720px
        owlCarousel.classList.add ('owl-carousel-advantages-style-bigScreens')
        containerCarouselAdvantages.classList.remove('container-carouselAdvantages-responsiveStyle-width720px')
        
        dotsCarouselAdvantages.classList.remove('display-none')
        navCarouselAdvantages.classList.remove('owl-nav-advantages-responsiveStyle')

        prevButton.classList.add('owl-prev-carouselAdvantages-style')
        nextButton.classList.add('owl-next-carouselAdvantages-style')

        prevButton.classList.remove('buttonsNav-Advantages-screen720px')
        nextButton.classList.remove('buttonsNav-Advantages-screen720px')

        containersAdvantage.forEach((container)=> {
            container.classList.remove('containerAdvantages-responsiveStyle-width720px')
        })
        //-------------------------------

    }
    if(screenWidth <= 720) {
        owlCarousel.classList.remove ('owl-carousel-advantages-style-bigScreens')
        containerCarouselAdvantages.classList.add('container-carouselAdvantages-responsiveStyle-width720px')
        dotsCarouselAdvantages.classList.add('display-none')
        navCarouselAdvantages.classList.add('nav-style-screen720px')
        prevButton.classList.remove('owl-prev-carouselAdvantages-style')
        nextButton.classList.remove('owl-next-carouselAdvantages-style')

        prevButton.classList.add('buttonsNav-Advantages-screen720px')
        nextButton.classList.add('buttonsNav-Advantages-screen720px')

        containersAdvantage.forEach((container)=> {
            container.classList.add('containerAdvantages-responsiveStyle-width720px')
        })
    }
 }

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
            video.classList.remove('video-style-screen900px')        
        })
 
        infoProjectCollection.forEach((infoProject) => {
            infoProject.classList.remove('infoProject-style-screen900px')
        })
        //-----------------------------------------------
    }    
 
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
            video.classList.remove('video-style-screen900px')
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
            video.classList.add('video-style-screen900px')
        })
 
        infoProjectCollection.forEach((infoProject) => {
            infoProject.classList.add('infoProject-style-screen900px')
        })
 
    }
 };

 function responsiveFooter () {
    let screenWidth = window.innerWidth
    let gridFooter = document.querySelector('.grid-footer')
    let tagsFooter = document.querySelectorAll('.tags-footer')
    let containersFooter = document.querySelectorAll('.grid-footer > div')

    if (screenWidth > 900) {
        
        //Undo < 900px
        gridFooter.classList.remove('flex-direction-column-screen-900px')

        tagsFooter.forEach((tag)=> {
            tag.classList.add('margin-bottom-tags-footer')
            tag.classList.remove('margin-bottom-tags-footer-screen900px')

        })

        containersFooter.forEach((container)=> {
            container.classList.remove('margin-botton-containers-screen900px')
        })

    }
    
    if (screenWidth <= 900) {
        gridFooter.classList.add('flex-direction-column-screen-900px')

        tagsFooter.forEach((tag)=> {
            tag.classList.remove('margin-bottom-tags-footer')
            tag.classList.add('margin-bottom-tags-footer-screen900px')
        })

        containersFooter.forEach((container)=> {
            container.classList.add('margin-botton-containers-screen900px')
        })
    }
 }