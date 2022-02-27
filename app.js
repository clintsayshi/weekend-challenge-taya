//new CircleType(document.getElementById("circle")).radius(384);

const toggleMode = document.querySelector("input[name=theme]");
const toggleModeLabel = document.querySelector("#toggle-mode-label");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");

mobileMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

toggleMode.addEventListener("change", () => {
  if (toggleMode.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
    toggleModeLabel.textContent("Dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
    toggleModeLabel.textContent("light");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

/* Putting it down here because it is footer thing, you wouldnt understand */
document.querySelector("#footer-year").textContent = new Date().getFullYear();
