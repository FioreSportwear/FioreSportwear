(function () {
  const listElements = document.querySelectorAll(".menu__item--show");
  const list = document.querySelector(".menu__links");
  const menu = document.querySelector(".menu__hamburguer");

  const addClick = () => {
    listElements.forEach((element) => {
      element.addEventListener("click", () => {
        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle("menu__item--active");

        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }
        subMenu.style.height = `${height}px`;
      });
    });
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      deleteStyle.height();
    } else {
    }
  });
  if (window.innerWidth <= 800) {
    addClick();
  }

  menu.addEventListener("click", () =>
    list.classList.toggle("menu__links--show")
  );
})();

// /SLIDER/

let slideIndex = 0;
carousel();

function carousel() {
  let i;
  const slides = document.getElementsByClassName("carousel-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2500); // Cambia la imagen cada 2 segundos (2000 milisegundos)
}

// submenu

const subMenu = document.getElementById("menusub");
const enlaces = document.getElementsById("contenedor__sub");

subMenu.addEventListener("click", () => {
  enlaces.style.display = "none";
});


// catalogo



