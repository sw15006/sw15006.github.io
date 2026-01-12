/* =========================
   MOBILE MENU
========================= */
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  if (nav) nav.classList.toggle("show");
}

/* =========================
   LANGUAGE SYSTEM (GLOBAL)
========================= */
let lang = localStorage.getItem("lang") || "mr";

function applyLanguage() {
  document.querySelectorAll("[data-mr]").forEach(el => {
    el.innerHTML = (lang === "mr") ? el.dataset.mr : el.dataset.en;
  });

  const btn = document.querySelector(".lang-btn");
  if (btn) btn.innerText = (lang === "mr") ? "English" : "मराठी";
}

function toggleLanguage() {
  lang = (lang === "mr") ? "en" : "mr";
  localStorage.setItem("lang", lang);
  applyLanguage();
}

/* =========================
   HEADER TEXT FADE-IN
========================= */
window.addEventListener("DOMContentLoaded", () => {
  applyLanguage();

  const headerText = document.querySelector(".header-title, .page-title");
  if (headerText) {
    setTimeout(() => headerText.classList.add("show"), 200);
  }
});
