const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Auto update footer year if needed
const copyright = document.querySelector(".copyright");
if (copyright) {
  const year = new Date().getFullYear();
  copyright.textContent = `© ${year} Chetan Septa. All rights reserved.`;
}
