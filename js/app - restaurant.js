function changebg(){
    let images = [
        'url("../img/img1.png")',
        'url("../img/img2.png")',
        'url("../img/img3.png")',
        'url("../img/img4.png")',
    ]

    let section = document.getElementById('homepage')
    let bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}

setInterval(changebg, 4000)

let scrollers = document.querySelectorAll(".homepage__section_three__scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    let scrollerInner = scroller.querySelector(".homepage__section_three__scroller__inner");
    let scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      let duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
