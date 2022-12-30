let linksSocialMedia = document.querySelectorAll('.container-redesSociais a')

let linkWhatsApp = document.getElementById('link-whatsApp')
let iconWhatsApp = document.getElementById('icon-whatsApp')
let tagWhatsApp = linkWhatsApp.childNodes[3]


linksSocialMedia.forEach((link)=> {
    let icon = link.firstElementChild
    let nameSocialMedia = link.childNodes[3]
    
    link.addEventListener('mouseover', () => {
        icon.classList.add('icon-inflate')
        nameSocialMedia.setAttribute('style', 'font-size: 14px')
    })
    link.addEventListener('mouseout', () => {
        icon.classList.remove('icon-inflate')
        nameSocialMedia.setAttribute('style', 'font-size: 17px')
        // nameSocialMedia.style.fontSize = '17px'
    })
})

linkWhatsApp.addEventListener('mouseover', () => {
    iconWhatsApp.classList.add('icon-inflate')
    tagWhatsApp.setAttribute('style', 'font-size: 14px')
})
linkWhatsApp.addEventListener('mouseout', () => {
    iconWhatsApp.classList.remove('icon-inflate')
    tagWhatsApp.setAttribute('style', 'font-size: 17px')
})

function copyEmail () {
    let containerEmail = document.getElementById('container-email')
    let toolTipCopy = document.getElementById('toolTip-copy')
    let toolTipCopied = document.getElementById('toolTip-copied')

    containerEmail.addEventListener('mouseover', () => {
        toolTipCopy.classList.add('showContent')
        // console.log(event.target)
    })
    containerEmail.addEventListener('mouseout', () => {
        toolTipCopy.classList.remove('showContent')
    })

    containerEmail.addEventListener('click', () => {
        let email = document.getElementById('input-myEmail').value
        
        navigator.clipboard.writeText(email)  
        
        toolTipCopy.classList.remove('showContent')
        toolTipCopied.classList.add('showContent')

        setTimeout(()=> {
            toolTipCopied.classList.remove('showContent')

        }, 1200)
        containerEmail.addEventListener('mouseover', () => {
            toolTipCopy.classList.add('showContent')
        })
    })
}

copyEmail()