document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const mobileThemeToggle = document.getElementById(
      "mobile-theme-toggle"
    );
    const body = document.body;
    // Check for saved theme preference or use device preference
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    // Apply saved theme
    if (savedTheme === "light") {
      body.classList.remove("dark");
      body.classList.add("light");
      themeToggle.checked = false;
      mobileThemeToggle.checked = false;
    } else {
      body.classList.add("dark");
      body.classList.remove("light");
      themeToggle.checked = true;
      mobileThemeToggle.checked = true;
    }
    // Theme toggle function
    function toggleTheme() {
      if (themeToggle.checked) {
        body.classList.add("dark");
        body.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
      }
    }
    // Add event listeners for theme toggles
    themeToggle.addEventListener("change", toggleTheme);
    mobileThemeToggle.addEventListener("change", function () {
      themeToggle.checked = this.checked;
      toggleTheme();
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      // Change icon based on menu state
      const icon = mobileMenuButton.querySelector("i");
      if (mobileMenu.classList.contains("hidden")) {
        icon.className = "ri-menu-line text-2xl";
      } else {
        icon.className = "ri-close-line text-2xl";
      }
    });
    // Close mobile menu when clicking a link
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        mobileMenuButton.querySelector("i").className =
          "ri-menu-line text-2xl";
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for navbar height
            behavior: "smooth",
          });
        }
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Intersection Observer for sections
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");
    // Fade in sections on scroll
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
    // Highlight active nav link
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((section) => {
      navObserver.observe(section);
    });
  });