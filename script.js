// CÓDIGO DO HEADER DA PÁGINA
var lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  var header = document.getElementById("header");
  var links = document.querySelectorAll("#header a");

  if (currentScroll > lastScrollTop){
    // Descendo
    header.style.top = "-60px";
    header.style.backgroundColor = "#fff";
    header.style.opacity = "1";
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = "#000000";
        if (i === 0) {
          links[i].style.fontWeight = "800";
        } else {
          links[i].style.fontWeight = "500";
        }
    }
  } else {
    // Subindo
    header.style.top = "0";
    if (currentScroll <= 300) {
      header.style.backgroundColor = "#fff";
      header.style.opacity = "1";
    }
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "#000000";
      if (i === 0) {
        links[i].style.fontWeight = "800";
      } else {
        links[i].style.fontWeight = "500";
      }
    }
  }

  lastScrollTop = currentScroll;
}, false);


// CÓDIGO DO MENU LATERAL MOBILE
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
