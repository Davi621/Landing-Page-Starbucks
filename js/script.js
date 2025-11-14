const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-Links');
const icon = document.querySelector('.btn-mobile i');

mobileBtn.addEventListener('click', () => {
    navlinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
})

window.addEventListener('scroll' , () => {
    const navbar = document.getElementById('header');
    if (window.scrollY > 0) {
        Headers.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
       header.style.boxShadow = 'none';
    }
})