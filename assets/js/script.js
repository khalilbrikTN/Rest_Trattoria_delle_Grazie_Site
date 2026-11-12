'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active", "hide");
    backTopBtn.classList.remove("active");
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});


/**
 * CLOSE NAVBAR ON LINK CLICK (mobile)
 */

const navLinks = document.querySelectorAll("[data-nav-link]");

addEventOnElements(navLinks, "click", function () {
  if (navbar.classList.contains("active")) toggleNavbar();
});



/**
 * RESERVATION FORM
 *
 * no backend yet: the request is sent as a pre-filled email
 */

const reservationForm = document.querySelector("[data-reservation-form]");
const reservationDate = document.querySelector("[data-reservation-date]");
const RESERVATION_EMAIL = "massimoporzio2@icloud.com";
const CLOSED_DAY = 3; // wednesday

const toInputDate = function (date) {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date - offset).toISOString().slice(0, 10);
}

reservationDate.min = toInputDate(new Date());

const checkClosedDay = function () {
  const day = reservationDate.valueAsDate ? reservationDate.valueAsDate.getUTCDay() : null;
  reservationDate.setCustomValidity(day === CLOSED_DAY ? window.i18n.t("res.closedDay") : "");
}

reservationDate.addEventListener("input", checkClosedDay);

reservationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  checkClosedDay();
  if (!reservationForm.reportValidity()) return;

  const data = new FormData(reservationForm);
  const guestsLabel = reservationForm.guests.selectedOptions[0].textContent.trim();
  const sittingLabel = reservationForm.sitting.selectedOptions[0].textContent.trim();
  const t = window.i18n.t;

  const body = [
    `${t("res.name")}: ${data.get("name")}`,
    `${t("res.phone")}: ${data.get("phone")}`,
    `${t("res.guests")}: ${guestsLabel}`,
    `${t("res.date")}: ${data.get("date")}`,
    `${t("res.sitting")}: ${sittingLabel}`,
    "",
    data.get("message")
  ].join("\n");

  const subject = `${t("res.mailSubject")} – ${data.get("date")} ${data.get("sitting")}`;

  window.location.href = `mailto:${RESERVATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
