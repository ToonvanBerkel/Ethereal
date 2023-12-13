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