let linksSocialMedia = document.querySelectorAll('.container-redesSociais a')

linksSocialMedia.forEach((link)=> {
    let icon = link.firstElementChild
    let nameSocialMedia = link.childNodes[3]
    
    link.addEventListener('mouseover', () => {
        icon.classList.add('icon-socialMedia-inflate')
        nameSocialMedia.setAttribute('style', 'font-size: 14px')
    })
    link.addEventListener('mouseout', () => {
        icon.classList.remove('icon-socialMedia-inflate')
        nameSocialMedia.setAttribute('style', 'font-size: 17px')
        // nameSocialMedia.style.fontSize = '17px'
    })
})