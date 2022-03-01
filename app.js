const toggleMode = document.querySelectorAll("input[name=theme]");
const toggleModeLabel = document.querySelectorAll(".toggle-mode-label");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");
// The Rotating Link
const rotatingSpanElements = document.querySelectorAll(
  ".rotating-circle-link-text p span"
);
const rotatingContainer = document.querySelectorAll(
  ".rotating-circle-link-text"
);

mobileMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

toggleMode.forEach((a) => {
  a.addEventListener("change", (e) => {
    if (e.target.checked) {
      transition();
      document.documentElement.setAttribute("data-theme", "dark");
      toggleModeLabel.forEach((i) => {
        i.textContent = "Dark";
      });
    } else {
      transition();
      document.documentElement.setAttribute("data-theme", "light");
      toggleModeLabel.textContent = "light";
      toggleModeLabel.forEach((i) => {
        i.textContent = "Light";
      });
    }
  });
});

let transition = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

/* Rotating Link */
let spans = [];
rotatingSpanElements.forEach((word, i) => {
  word.setAttribute("style", `transform:rotate(${i * 45}deg)`);
  spans = [word, ...spans];
});

rotatingContainer.innerHTML = spans.map((w) => w).join("");

/* Putting it down here because it is footer thing, you wouldnt understand */
document.querySelector("#footer-year").textContent = new Date().getFullYear();
