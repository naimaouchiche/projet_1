// disparition de la barre de la nav bar

  const nav = document.querySelector(".nav-listindex");  //Barre de navigation avec la class nav-listindex
  let lastScrollY = window.scrollY;   //dernier niveau de scroll

  window.addEventListener("scroll", () => {  //création d'un évenement affecté au scroll
    if (lastScrollY < window.scrollY) {  // Condition apparition de la barre ou disparition lors du scroll 
      nav.classList.add("nav--hidden");;   //Class nav-hidden pour cacher ou faire apparaitre la barre de navigation suivant le scroll
    } else {
      nav.classList.remove("nav--hidden");;
    }

    lastScrollY = window.scrollY;
  });


//   Menu burger
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

const message =
  "Merci pour votre message.nous vous répondrons dès que possible.";

  document.getElementById("contactForm");
  document.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });


  /* ---- agrandissement images au click */

let upsizeImg = document.querySelectorAll(".imgtobig");// Images avec la classe imgtoBig
for( let i = 0; i < upsizeImg.length; i++) { 
  let srcImg = upsizeImg[i].src;  //récupère l'url des images imgtoBig
  upsizeImg[i].addEventListener("click", function() { 
    const imgBigger = document.createElement("img"); // Crée une image imgBigger
    const body = document.querySelector('body');  // Balise body
    const main = document.querySelector("main");  // Balise main
    main.classList.add("imgOpacity");  // Ajoute de l'opacité au main
    imgBigger.src = srcImg;    // Ajoute l'url récuperée précédement à l'image crée précédement
    imgBigger.classList.add("imgBig");   // Ajout d'une class à la nouvelle image  
    body.appendChild(imgBigger);  // Ajoute l'image au body
    imgBigger.onclick = imgRemove;   // Au clic sur l'image fonction imgRemove
    function imgRemove () {      
      imgBigger.remove("imgBig");   // Supprime l'image imgBig
      main.classList.remove("imgOpacity")  // Supprime l'opacité au main
      }  
  });
}

