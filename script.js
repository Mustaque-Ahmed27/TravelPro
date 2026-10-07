document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector(".header-search button");

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      console.log("Search clicked");
    });
  }
});

// FAQ Toggle Functionality
document.querySelectorAll(".faq-toggle").forEach((button) => {
  button.addEventListener("click", function () {
    const faqItem = this.closest(".faq-item");
    const icon = this.querySelector("i");
    const isActive = faqItem.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".faq-toggle").classList.remove("active");
      item.querySelector(".faq-toggle i").classList.remove("fa-eye-slash");
      item.querySelector(".faq-toggle i").classList.add("fa-eye");
    });

    if (!isActive) {
      faqItem.classList.add("active");
      this.classList.add("active");
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    }
  });
});

const testimonialsSwiper = new Swiper(".testimonials-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Smart Sticky Navbar Logic
let lastScrollTop = 0;
const header = document.querySelector(".header");
const headerHeight = header ? header.offsetHeight : 0;

window.addEventListener(
  "scroll",
  function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add 'scrolled' class when user scrolls down past 50px
    if (scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Hide/show navbar based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      header.classList.add("nav-hidden");
    } else {
      header.classList.remove("nav-hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  },
  false,
);
