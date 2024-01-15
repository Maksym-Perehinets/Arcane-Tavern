function showPassword() {
    let x = document.getElementById("pass");
    let svg = document.getElementById("showPasswordButton")
  if (x.type === "password") {
    x.type = "text";
    svg.style.transition = "all .7s"
    svg.src = "https://www.svgrepo.com/show/522528/eye.svg";
  } else {
    x.type = "password";
    svg.src = "https://www.svgrepo.com/show/522530/eye-off.svg";
  }
}