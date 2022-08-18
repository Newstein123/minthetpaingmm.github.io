// toggle 
let menutoggle = document.querySelector('.toggle');
menutoggle.onclick = function() {
    menutoggle.classList.toggle('active')
    document.querySelector(".navbar-item").classList.toggle("active");
}
// arrow 

window.onscroll = () => {
    if (window.scrollY >= 400) {
      document.querySelector(".arrow").style.opacity = "1";
    } else {
      document.querySelector(".arrow").style.opacity = "0";
    }
  }
  document.querySelector(".arrow").onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }