// Get the button:
let btn = document.getElementById("top_btn");

// 20px scrolled show
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// Functionality
function topFunction() {
  document.documentElement.scrollTop = 0;
}

//iframe
let player;function onYouTubeIframeAPIReady() {
  player = new YT.Player('trailer', {
      events: {
          'onReady': onPlayerReady
      }    });
}function onPlayerReady(event) {
  // De player is klaar om te worden gebruikt
}

function show() {
  let iframe = document.getElementById('trailer');
  let button = document.getElementById('trailer_exit');
  if (iframe.style.display === 'none') {
      iframe.style.display = 'flex';
      button.style.display = 'flex';
  } else {
      iframe.style.display = 'none';
      button.style.display = 'none';
      player.stopVideo(); // Stop de video
  }
}

//Slider


//dark mode to light mode
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.documentElement.classList.toggle('dark-theme');
});

//video end back to homepage
video = document.getElementById('video_one')

video.addEventListener('ended', function() {   
  setTimeout(function() {     
  window.location.href = '../html/index.html';   
  }, 100); 
})