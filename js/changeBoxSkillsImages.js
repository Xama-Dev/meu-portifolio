let btnFrontEnd = document.getElementById('btn-frontEnd')
let containerFrontEndSkillsImage = document.getElementById('container-frontEnd-skills')

let btnBackEnd = document.getElementById('btn-backEnd')
let containerBackEndSkillsImage = document.getElementById('container-backEnd-skills')


btnFrontEnd.addEventListener('click', () => {
    
    if (btnBackEnd.classList.contains('btnChangeSkills-active')) {
        
        btnBackEnd.classList.remove('btnChangeSkills-active')
        btnFrontEnd.classList.add('btnChangeSkills-active')

        containerBackEndSkillsImage.classList.remove('showContent')
        containerFrontEndSkillsImage.classList.add('showContent')
    }
    
})

btnBackEnd.addEventListener('click', () => {
    
    if (btnFrontEnd.classList.contains('btnChangeSkills-active')) {
        
        btnFrontEnd.classList.remove('btnChangeSkills-active')
        btnBackEnd.classList.add('btnChangeSkills-active')

        containerFrontEndSkillsImage.classList.remove('showContent')
        containerBackEndSkillsImage.classList.add('showContent')
    }
    
})