// Shared JavaScript for all pages in the SafeNethra static website.
// Students can edit the file later to add more interactivity if needed.

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const navbar = document.querySelector(".navbar");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const revealItems = document.querySelectorAll(".reveal");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 30);
    }

    if (scrollTopBtn) {
      scrollTopBtn.style.display = window.scrollY > 250 ? "inline-flex" : "none";
    }

    revealOnScroll();
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function revealOnScroll() {
    revealItems.forEach((item) => {
      const windowHeight = window.innerHeight;
      const elementTop = item.getBoundingClientRect().top;
      if (elementTop < windowHeight - 80) {
        item.classList.add("active");
      }
    });
  }

  revealOnScroll();
});
