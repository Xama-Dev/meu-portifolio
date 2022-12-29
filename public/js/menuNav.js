
function linkNavActive (link) {
    let linksMenuNav = document.querySelectorAll('nav a')

    linksMenuNav.forEach((link)=> {
        link.classList.remove('btn-nav-active')
    })

    link.classList.add('btn-nav-active')

}


document.addEventListener('scroll', (event)=> {
    let linksMenuNav = document.querySelectorAll('nav a')
    let screenHeightHalf = window.innerHeight / 2

    let btnNavPresentation = document.getElementById('btn-nav-presentation')

    let containerSkillsPosition = document.getElementById('container-skills').getBoundingClientRect().y
    let btnNavSkills = document.getElementById('btn-nav-skills')

    let containerAdvantagesPosition = document.getElementById('container-advantages').getBoundingClientRect().y
    let btnNavAdvantages = document.getElementById('btn-nav-advantages')

    let containerPortfolioPosition = document.getElementById('container-portfolio').getBoundingClientRect().y
    let btnNavPortfolio = document.getElementById('btn-nav-portfolio')

    if(containerSkillsPosition < screenHeightHalf) {
        
        linksMenuNav.forEach((link)=> {
            link.classList.remove('btn-nav-active')
        })

        btnNavSkills.classList.add('btn-nav-active')
    }

    if(containerSkillsPosition > screenHeightHalf) {
        
        linksMenuNav.forEach((link)=> {
            link.classList.remove('btn-nav-active')
        })

        btnNavPresentation.classList.add('btn-nav-active')
    }

    if(containerAdvantagesPosition < screenHeightHalf) {
        
        linksMenuNav.forEach((link)=> {
            link.classList.remove('btn-nav-active')
        })

        btnNavAdvantages.classList.add('btn-nav-active')
    }

    if(containerPortfolioPosition < screenHeightHalf) {
        
        linksMenuNav.forEach((link)=> {
            link.classList.remove('btn-nav-active')
        })

        btnNavPortfolio.classList.add('btn-nav-active')
    }

})