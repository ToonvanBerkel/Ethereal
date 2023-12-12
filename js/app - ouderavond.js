let dropdown = document.getElementById("dropdown_menu");


function toggleButton(){
    if(dropdown.style.display == "block"){
        dropdown.style.display = "none";
    }else {
        dropdown.style.display = "block";
    }
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})