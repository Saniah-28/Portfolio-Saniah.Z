
  function initScrollReveal() {
  const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})
/* -- HOME -- */
sr.reveal('.content', {})
sr.reveal('.featured-row', { delay: 100 })
sr.reveal('.services-row', { delay: 200 })


/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-left',{delay: 100})
  srLeft.reveal('.blog-left',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.about-right',{delay: 100})
  srRight.reveal('.blog-right',{delay: 100})
}

if (window.matchMedia('(min-width:600px)').matches) {
  initScrollReveal();
}