function navbarFeature() {
  const sidebar = document.querySelector(".sidebar");
  const container = document.querySelector(".container");

    sidebar?.classList.toggle("active");
    container?.classList.toggle("active_margin_left");
  
}

export default navbarFeature;
