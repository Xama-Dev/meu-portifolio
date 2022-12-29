// let linksMenuNav = document.querySelectorAll('nav a')

// linksMenuNav.forEach((link)=> {
    
//     link.classList.remove('btn-nav-active')

//     // if(!link.classList.contains('btn-nav-active')) {

//     // }
//     link.addEventListener('click', ()=> {
//         link.classList.add('btn-nav-active')
//         // if(!link.classList.contains('btn-nav-active')) {
//         // }
//         // else {
//         //     link.classList.remove('btn-nav-active')
//         // }
//     })
// }) 

function linkNavActive (link) {
    let linksMenuNav = document.querySelectorAll('nav a')

    linksMenuNav.forEach((link)=> {
        link.classList.remove('btn-nav-active')
    })

    link.classList.add('btn-nav-active')

}