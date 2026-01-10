/* ===== MOBILE MENU ===== */
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("show");
}

/* ===== LANGUAGE TOGGLE ===== */
let lang = "mr";
function toggleLanguage(){
  document.querySelectorAll("[data-mr]").forEach(el=>{
    el.innerText = (lang==="mr") ? el.dataset.en : el.dataset.mr;
  });

  document.getElementById("langBtn").innerText =
    (lang==="mr") ? "मराठी" : "English";

  lang = (lang==="mr") ? "en" : "mr";
}

/* ===== HEADER SLIDESHOW ===== */
const headerImages = [
  "images/header1.jpg",
  "images/header2.jpg",
  "images/header3.jpg"
];

let currentSlide = 0;
const header = document.querySelector(".site-header");
const title = document.querySelector(".header-title");

setInterval(()=>{
  currentSlide = (currentSlide + 1) % headerImages.length;
  header.style.backgroundImage = `url('${headerImages[currentSlide]}')`;

  if(title){
    title.classList.remove("show");
    setTimeout(()=>title.classList.add("show"),300);
  }
}, 5000);

window.addEventListener("load", ()=>{
  if(title) title.classList.add("show");
});
