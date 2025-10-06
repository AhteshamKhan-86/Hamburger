const menubar = document.querySelector('.hmdiv')
const menufetures = document.querySelector('.hmicon')
const hidden = document.querySelector('.hidden')
const crossicon = document.querySelector('.cuticon')

menubar.addEventListener('click',(e) => {
    menufetures.classList.toggle('hidden')
})

crossicon.addEventListener('click',(e) => {
    menufetures.classList.toggle('hidden')
})

window.addEventListener('scroll', (e) => {
    menufetures.classList.add('hidden');
});