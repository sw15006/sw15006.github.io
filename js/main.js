function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("show");
}

let lang = localStorage.getItem("lang") || "mr";

function applyLanguage(){
  document.querySelectorAll("[data-mr]").forEach(el=>{
    el.innerText = (lang==="mr") ? el.dataset.mr : el.dataset.en;
  });
}

function toggleLanguage(){
  lang = (lang==="mr") ? "en" : "mr";
  localStorage.setItem("lang", lang);
  applyLanguage();
}

document.addEventListener("DOMContentLoaded", applyLanguage);
