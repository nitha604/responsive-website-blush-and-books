// Navbar scroll effect + fade-in on scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
  
    // Navbar background on scroll
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  
    // Fade in sections when visible
    document.querySelectorAll('.fade-in').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  });
  
  // Trigger fade-in on page load if visible
  window.dispatchEvent(new Event('scroll'));

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show button when user scrolls down 100px
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// When button clicked, scroll to top smoothly
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
