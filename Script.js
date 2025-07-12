const words = [
  "Web Developer",
  "UI / UX Designer",
  "IT Enthusiast",
  "Tech Explorer",
];
let wordIndex = 0;
let letterIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 2000;
const typingText = document.getElementById("typing-text");

function type() {
  if (letterIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (letterIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, typingSpeed);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // fade out when out of view
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-section").forEach((section) => {
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const flipCard = document.querySelector(".about-picture-flip");

  if (flipCard) {
    setInterval(() => {
      flipCard.classList.toggle("flip");
    }, 2000); // 2000 milliseconds = 2 seconds
  }
});

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".nav-list");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};
