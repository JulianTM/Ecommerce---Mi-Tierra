const ICON = document.querySelector('.ICON')
const menu = document.querySelector('.navbar')


ICON.addEventListener('click', () => {
    menu.classList.toggle("spread")
})

window.addEventListener('click', e => {
    if (menu.classList.contains('spread')
        && e.target != menu && e.target != ICON) {
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})