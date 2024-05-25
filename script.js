//Start from the top of the page when the page is refreshed
window.addEventListener("load", function () {
  history.replaceState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
  document.body.style.overflowY = "auto";
  document.documentElement.style.animation = "scrollTop 1ms forwards";
});

//Menu for mobile devices
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Fade in sections when they come into view
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // Stop observing once in view
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the section is visible
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function changeBackground() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        document.body.style.backgroundColor = section.style.backgroundColor;
      }
    });
  }

  window.addEventListener("scroll", changeBackground);
});
