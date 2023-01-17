
function linkNavActive (link) {
    let linksMenuNav = document.querySelectorAll('nav a')

    linksMenuNav.forEach((link)=> {
        link.classList.remove('btn-nav-active')
    })

    link.classList.add('btn-nav-active')

}

function linkAsideNavActive (link) {
    let linksAsideNavMenu = document.querySelectorAll('.aside-menu a')

    linksAsideNavMenu.forEach((link)=> {
        link.classList.remove('item-asideMenu-active')
    })

    link.classList.add('item-asideMenu-active')
}

document.addEventListener('scroll', (event)=> {
    let screenHeightHalf = window.innerHeight / 2
    
    //Menus tela grande e responsivo
    let linksMenuNav = document.querySelectorAll('nav a')
    let linksAsideNavMenu = document.querySelectorAll('.aside-menu a')
    //-------------------------
    
    //btns nav tela grande
    let btnNavPresentation = document.getElementById('btn-nav-presentation')
    let btnNavSkills = document.getElementById('btn-nav-skills')
    let btnNavAdvantages = document.getElementById('btn-nav-advantages')
    let btnNavPortfolio = document.getElementById('btn-nav-portfolio')
    //-------------------

    //btns/links aside menu telas pequenas
    let linkPresentationMenuAside = document.getElementById('link-presentation-asideMenu')
    let linkSkillsMenuAside = document.getElementById('link-skills-asideMenu')
    let linkAdvantagesMenuAside = document.getElementById('link-advantages-asideMenu')
    let linkPortfolioMenuAside = document.getElementById('link-portfolio-asideMenu')
    //-----------------------   

    //posição dos container de cada seção
    let containerSkillsPosition = document.getElementById('container-skills').getBoundingClientRect().y
    let containerAdvantagesPosition = document.getElementById('section-advantages').getBoundingClientRect().y    
    let containerPortfolioPosition = document.getElementById('container-portfolio').getBoundingClientRect().y
    //-------------------------
    
    if(containerSkillsPosition < screenHeightHalf) {        
        //manipula menu tela grande
        linksMenuNav.forEach((link)=> {
            link.classList.remove('btn-nav-active')
        })

        btnNavSkills.classList.add('btn-nav-active')
        //---------------------------

        //manipula menuAside tela pequena
        linksAsideNavMenu.forEach((link)=> {
            link.classList.remove('item-asideMenu-active')
        })

        linkSkillsMenuAside.classList.add('item-asideMenu-active')
        //------------------------------------------
    }

    if(containerSkillsPosition > screenHeightHalf) {        
        linksMenuNav.forEach((link)=> {
            link.classList.remove('btn-nav-active')
        })

        btnNavPresentation.classList.add('btn-nav-active')

        linksAsideNavMenu.forEach((link)=> {
            link.classList.remove('item-asideMenu-active')
        })

        linkPresentationMenuAside.classList.add('item-asideMenu-active')
    }

    if(containerAdvantagesPosition < screenHeightHalf) {        
        linksMenuNav.forEach((link)=> {
            link.classList.remove('btn-nav-active')
        })

        btnNavAdvantages.classList.add('btn-nav-active')

        linksAsideNavMenu.forEach((link)=> {
            link.classList.remove('item-asideMenu-active')
        })

        linkAdvantagesMenuAside.classList.add('item-asideMenu-active')
        
    }

    if(containerPortfolioPosition < screenHeightHalf) {        
        linksMenuNav.forEach((link)=> {
            link.classList.remove('btn-nav-active')
        })

        btnNavPortfolio.classList.add('btn-nav-active')

        linksAsideNavMenu.forEach((link)=> {
            link.classList.remove('item-asideMenu-active')
        })

        linkPortfolioMenuAside.classList.add('item-asideMenu-active')
    }

})