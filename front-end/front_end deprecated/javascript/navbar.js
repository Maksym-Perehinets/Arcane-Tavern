var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

function navbarFeature() {
  sidebar = document.querySelector(".sidebar");
  container = document.querySelector(".container");
  sidebar.classList.toggle("active");
  container.classList.toggle("active_margin_left");
};
