function showPassword() {
    let x = document.getElementById("pass");
    let svg = document.getElementById("showPasswordButton");
  if (x.type === "password") {
    x.type = "text";
    svg.style.transition = "all .7s"
    svg.src = "https://www.svgrepo.com/show/522528/eye.svg";
  } else {
    x.type = "password";
    svg.src = "https://www.svgrepo.com/show/522530/eye-off.svg";
  }
}

function checkPassword() {
    let event = document.getElementById("checkButton").event;
    let pass1 = document.getElementById("pass").value;
    let pass2 = document.getElementById("passAgain").value;
    let passError = document.getElementById("passError");

    // alert(pass2);
    if (pass1.length < 8 || pass1.length > 16  ) {
        passError.innerHTML = "Password is too short or too long. Min length is 8 char, Max is 16 char.";
        // alert("Password is too short or too long. Min length is 8 characters, Max length is 16 characters. Include numbers");
        // event.preventDefault();
        return false;
    }
    else if (pass1.search(/[a-z]/i) < 0) {
        passError.style.color="red";
        passError.innerHTML = "Your password must contain at least one letter.";
        // alert("Your password must contain at least one letter.");
        // event.preventDefault();
        return false;
    }
    else if (pass1.search(/[0-9]/) < 0) {
        passError.style.color="red";
        passError.innerHTML = "Your password must contain at least one digit.";
        // alert("Your password must contain at least one digit."); 
        // event.preventDefault();
        return false;
    }

    else if (pass1 != pass2) {
        passError.style.color="red";
        passError.innerHTML = "Password is not matching";
        // alert("Password is not matching")
        return false;
    }

    else {
        passError.style.color="green";       
        passError.innerHTML = "Everything is ok <3 ";
        return true;

    }

}


