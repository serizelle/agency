//footer date
const footerYearEl = document.querySelector('.footer__year');
let today = new Date();
let year = today.getFullYear();
footerYearEl.textContent = year;

//burger menu
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

//sticky header

let lastScrollTop = 0;
const header = document.querySelector('.header__mobile');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down, hide the header
    header.classList.add('sticky');
  } 

  lastScrollTop = scrollTop;
});