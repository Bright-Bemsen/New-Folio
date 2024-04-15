
// =============scroll section active link========================*/ 
const sections = document.querySelectorAll("section");

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
};


  /*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  // when the scroll is higher than 350 viewport hight,and the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                          :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

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

// ======================dark light mood ======================*/
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

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
 ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonia-wrapper, .contact-form', { origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right'});