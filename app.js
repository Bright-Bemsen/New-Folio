// ============================menu icon navbar===========================*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// =============scroll section active link===========================================*/ 
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.screenY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    };
  });


// ============================sticky navbar===========================*/
const header = document.querySelector(".header");

header.classList.toggle("sticky", window.scrollY > 100);


// =============remove menu icon navbar when click navbar link (scroll)=================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// =========================swiper======================================*/
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// =========================dark light mood ====================================*/
const darkMoonIcon = document.querySelector("#darkMoon-icon");
darkMoonIcon.onclick = () => {
  darkMoonIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('.dark-moon');
}

// ================scroll reveal=========================*/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration:2000,
  delay: 200
});

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonia-wrapper, .contact-form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' 
});