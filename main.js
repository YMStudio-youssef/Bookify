let menu = document.querySelector('.hamburger')

menu.onclick = () => {
    let navbar = document.querySelector('.nav-bar')
    navbar.classList.toggle('active')
}