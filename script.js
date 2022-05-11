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

// Page contact 
const message =
  "Merci pour votre message.nous vous répondrons dès que possible.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });


