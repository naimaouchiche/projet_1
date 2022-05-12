// disparition de la barre de la nav bar
{
  const nav = document.querySelector(".nav-listindex");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");;
    } else {
      nav.classList.remove("nav--hidden");;
    }

    lastScrollY = window.scrollY;
  });
}


// ->lorsque je clique sur l'icône, l'élément nav-barmobile devient visible
// Je selectionne et stocke les éléments nécessaires
const icon = document.querySelector(".fa-bars");
const list = document.querySelector(".nav-listmobile");
icon.addEventListener("click", function(){
console.log("click");
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
})






// Page contact 
/*<---------
const message =
  "Merci pour votre message.nous vous répondrons dès que possible.";


  document.getElementById("contactForm")
  document.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });


  /* ---- agrandissement images au click */
/*
let upsizeImg = document.querySelectorAll(".imgtobig");
for( let i = 0; i < upsizeImg.length; i++) {  let srcImg = upsizeImg[i].src;
upsizeImg[i].addEventListener("click", function() {    const imgBigger = document.createElement("img");
const body = document.querySelector('body');
const main = document.querySelector("main")    main.classList.add("imgOpacity")    imgBigger.src = srcImg;
imgBigger.classList.add("imgBig");    body.appendChild(imgBigger);    imgBigger.onclick = imgRemove;
function imgRemove () {      imgBigger.remove("imgBig");
main.classList.remove("imgOpacity")    }  });}
---------->*/
