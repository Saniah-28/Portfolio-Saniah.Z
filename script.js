var typingEffect = new Typed(".typedText", {
  strings: ["Developer", "Designer",],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})

function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function () { headerShadow() };
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}




document.querySelectorAll(".image2 img").forEach(image => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src =
      image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
// Close popup when clicking on <span> OR outside the image
const popup = document.querySelector(".popup-image");
const popupImg = popup.querySelector("img");

popup.addEventListener("click", (e) => {
  // Check if click is outside the popup image
  if (e.target !== popupImg) {
    popup.style.display = "none";
  }
});
// Also handle the back button
window.addEventListener("popstate", (event) => {
  if (popup.style.display === "block") {
    closePopup();
  }
});

function closePopup() {
  popup.style.display = "none";
  popupImg.src = "";

  // Only go back if hash is #popup to prevent going too far back
  if (location.hash === "#popup") {
    history.back();
  }
}



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})
/* -- HOME -- */
sr.reveal('.home-text-name', {})
sr.reveal('.home-text-job', { delay: 100 })
sr.reveal('.home-text-info', { delay: 200 })
sr.reveal('.home-text-btn', { delay: 200 })
sr.reveal('.home-social-icon', { delay: 200 })
sr.reveal('.home-img', { delay: 300 })

/* -- PROJECT BOX -- */
// sr.reveal('.about-row', { interval: 200 })
sr.reveal('.skill-bar', { interval: 200 })
sr.reveal('.services-box', { interval: 300 })
/* -- HEADINGS -- */
sr.reveal('.section-header', {})


/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  srLeft.reveal('.project-text',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.personal-info',{delay: 100})
  srRight.reveal('.contact-img',{delay: 100})

  document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_k26vxcq", "template_dhpicbc", this)
    .then(() => {
      document.getElementById("status").textContent = "Message sent!";
    }, (error) => {
      document.getElementById("status").textContent = "Failed to send message.";
      console.error(error);
    });
});

 const animatedBars = document.querySelectorAll('.bar span');

  // Store the original target widths
  animatedBars.forEach(bar => {
    const currentWidth = bar.style.width || getComputedStyle(bar).width;
    bar.setAttribute('data-width', bar.textContent); // e.g., "90%"
    bar.style.width = '0%'; // Initialize to 0
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const bar = entry.target;
      const width = bar.getAttribute('data-width');

      if (entry.isIntersecting) {
        // Animate to original width
        bar.style.width = width;
      } else {
        // Reset when out of view
        bar.style.width = '0%';
      }
    });
  }, {
    threshold: 0.5 // Adjust sensitivity
  });

  // Start observing all bars
  animatedBars.forEach(bar => observer.observe(bar));

 