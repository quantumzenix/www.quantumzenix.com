// Select elements
const arrowButtons = document.querySelectorAll('.arrow-button');
const contentElements = document.querySelectorAll('.content');
const slides = document.querySelectorAll('.slide');
const gridItems = document.querySelectorAll('.grid-item');
const popups = document.querySelectorAll('.popup');
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarLinks = document.querySelectorAll('.nav-link');
const iconScroll = document.querySelector('.icon-scroll');
const video = document.querySelector('video');
const submitBtn = document.getElementById('submit-btn');
const header = document.getElementById('header');
const subheader = document.getElementById('subheader');
const accelerate = document.getElementById('accelerate');
const description = document.getElementById('description');

// Slideshow functionality
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[currentSlide].classList.add('active');
  currentSlide = (currentSlide + 1) % slides.length;
  setTimeout(showSlide, 3000);
}

showSlide();

// Popup functionality
gridItems.forEach((item) => {
  item.addEventListener('click', () => {
    let popupId = item.getAttribute('data-popup');
    let popup = document.getElementById(popupId);
    popup.classList.add('active');
    setTimeout(() => {
      popup.classList.remove('active');
    }, 2000);
  });
});

popups.forEach((popup) => {
  let closeButton = popup.querySelector('.close-popup');
  closeButton.addEventListener('click', () => {
    popup.classList.remove('active');
  });
});

// Navbar toggle functionality
navbarToggle.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

// Smooth scrolling functionality
navbarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    let targetId = link.getAttribute('href');
    let targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Icon scroll functionality
const iconWidth = 100;
const iconMargin = 50;
const scrollSpeed = 0.5;
let scrollPosition = 0;
let iconCount = iconScroll.children.length;

function scrollIcons() {
  scrollPosition += scrollSpeed;
  if (scrollPosition > (iconCount - 1) * (iconWidth + iconMargin)) {
    scrollPosition = 0;
  }
  iconScroll.style.transform = `translateX(-${scrollPosition}px)`;
  requestAnimationFrame(scrollIcons);
}

scrollIcons();

// Video error handling
video.addEventListener('error', (event) => {
  console.error('Video error:', event);
});

// Submit button functionality
submitBtn.addEventListener('click', () => {
  header.innerHTML = 'Home / Artificial Intelligence';
  subheader.innerHTML = 'Artificial Intelligence';
  accelerate.innerHTML = 'Artificial Intelligence';
  description.innerHTML = 'Start your project';
});

submitBtn.addEventListener('mouseover', () => {
  submitBtn.style.background = '#3e8e41';
});

submitBtn.addEventListener('mouseout', () => {
  submitBtn.style.background = '#4CAF50';
});

// Arrow button functionality
arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    contentElements.forEach((content) => {
      content.classList.remove('active');
    });
    targetContent.classList.add('active');
  });
});





