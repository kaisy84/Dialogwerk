function toggleMenu() {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".section, .service, .focus-inner, .text-block, .section-title"
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
});
