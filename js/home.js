import { catalogoProdutos } from "./dados.js" //carregar produtos
import { carregaCard, pegarCodProduto } from "./funcoes.js"
import { pegarPaginaProdutos } from "./funcoes.js"

pegarPaginaProdutos()
let listaHome = catalogoProdutos.filter(produto => produto.mostrarHome == true)
let listaLancamentos = catalogoProdutos.filter(produto => produto.lancamento == true)

let gridHome = document.querySelector("#galerry")
let gridLancamentos = document.querySelector("#galerry2")

carregaCard(listaHome,gridHome);
carregaCard(listaLancamentos,gridLancamentos)
pegarCodProduto()

// animação scroll do mouse
window.sr = ScrollReveal({ reset: true });
ScrollReveal().reveal('#pt1', { interval: 90, reset: true, duration: 2200 });
/*ScrollReveal().reveal('#pt2', { interval: 90, reset: true, duration: 2200 });*/


/* Slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); 
}





