const header = document.querySelector("header");
const heroSection = document.querySelector(".hero");
const dropdowns = document.querySelectorAll(".dropdown-toggle");
const toggleMenu = document.getElementById("toggle-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const logos = document.querySelectorAll(".logo");
const mobileDropdownsToggle = document.querySelectorAll(
  ".mobile-nav .dropdown-toggle"
);

dropdowns.forEach((dropdown) =>
  dropdown.addEventListener("click", (e) => e.preventDefault())
);

mobileDropdownsToggle.forEach((dropdown) =>
  dropdown.addEventListener("click", toggleOpen)
);

function toggleOpen() {
  mobileDropdownsToggle.forEach((dropdown, index) => {
    if (this === mobileDropdownsToggle[index]) {
      dropdown.classList.toggle("active");
    } else {
      dropdown.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", (e) => {
  const headerHeight = header.clientHeight;

  if (window.scrollY > headerHeight) {
    header.classList.add("show-bg");
  } else {
    header.classList.remove("show-bg");
  }
});

logos.forEach((logo) => {
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

toggleMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});
