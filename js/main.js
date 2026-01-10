/* ===============================
   MOBILE MENU
================================ */
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  if (nav) nav.classList.toggle("show");
}

/* ===============================
   LANGUAGE TOGGLE (GLOBAL)
================================ */
let lang = localStorage.getItem("lang") || "mr";

function applyLanguage() {
  document.querySelectorAll("[data-mr]").forEach(el => {
    el.innerText = (lang === "mr") ? el.dataset.mr : el.dataset.en;
  });

  const btn = document.getElementById("langBtn");
  if (btn) btn.innerText = (lang === "mr") ? "English" : "मराठी";
}

function toggleLanguage() {
  lang = (lang === "mr") ? "en" : "mr";
  localStorage.setItem("lang", lang);
  applyLanguage();
}

/* ===============================
   ON LOAD
================================ */
document.addEventListener("DOMContentLoaded", applyLanguage);
