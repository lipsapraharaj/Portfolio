
// ===============================Hero================================

TweenMax.staggerFrom("#heroImg", 1.5, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 0
}, 0.09);
TweenMax.staggerFrom(".navbar", 1.5, {
    opacity: 0,
    y: -30,
    ease: Expo.easeInOut,
    delay: 0
}, 0.09);
TweenMax.staggerFrom(".line1 h2", 1.5, {
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut,
    delay: 0
}, 0.09);
TweenMax.staggerFrom(".line2 span", 1, {
    opacity: 0,
    x: 30,
    ease: Expo.easeInOut,
    delay: 0
}, 0.09);
TweenMax.staggerFrom(".line1 h1,.circles", 1, {
    opacity: 0,
    scale: 0.5,
    ease: Expo.easeOut,
    delay: 0
}, 0.09);

window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var parallaxContent = document.querySelector('#hero');
    parallaxContent.style.top = scrollTop / 1.5 + 'px';
});


// ============================
// ===============================Work================================
// ============================
gsap.to("#ph1", {
    x: () => innerWidth * 2.5,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top 120vh",
        end: `+=415%`,
        scrub: 1
    }
})
gsap.to("#ph2", {
    x: () => innerWidth * 2.5,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top 120vh",
        end: `+=340%`,
        scrub: 1
    }
})
gsap.to("#ph3", {
    x: () => innerWidth * 2.5,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top 120vh",
        end: `+=300%`,
        scrub: 1
    }
})
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})



// ============================
// ===============================About================================
// ============================



// ============================
// ===============================Skill================================
// ============================

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.img',
      scrub: true
    }
  })
  .to('.img', {
    stagger: .2,
    y: -700,
    scrub: true
  })



  
// ============================
// ===============================Contact================================
// ============================
let elements = document.querySelectorAll(".fLink");
elements.forEach((element) => {
    let innerText = element.innerText;
    element.innerHTML = "";

    let textContainer = document.createElement("div");
    textContainer.classList.add("blocks");

    for (let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
    }
    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
});
elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.remove("play");
    });
});

