window.addEventListener('scroll', () => {
    let header = document.getElementById('header')
    let logo = document.getElementById('logo')

    header.classList.toggle('scrolled', window.scrollY > 0)
    if (window.scrollY != 0) {
        logo.src = '../img/iape-logo-dark.png'
    } else {
        logo.src = '../img/iape-logo-light.png'
    }
})