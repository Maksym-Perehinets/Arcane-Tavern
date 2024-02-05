 
// let img = <HTMLElement>document.querySelector(".eyeImg") as HTMLImageElement | null;
// let clicker = document.getElementById("check") as HTMLInputElement | null;

export function changeImg () {
    let img = <HTMLElement>document.querySelector(".eyeImg") as HTMLImageElement | null;
    let clicker = document.getElementById("check") as HTMLInputElement | null;
    if (clicker != null) {
        if (clicker.checked != true) {
            
            // if (img == null) console.log("hui");
            if (img != null) {
            img.style.background = "url(./src/css/img/eye.svg) no-repeat";
            img.style.backgroundSize = "100%";
            img.style.verticalAlign = "top";}
            
            // console.log("hide");
        }
        else {
            if (img != null) {
            img.style.background = "url(./src/css/img/hiddenEye.svg) no-repeat";
            img.style.backgroundSize = "100%";
            img.style.verticalAlign = "top";}
            // console.log("show");
        }
    }
    else if (clicker == null) console.log("suka tvar");
}

export function checkPasswordMatch() {
    let pass1 = document.getElementById("pass1") as HTMLInputElement | null;
    let pass2 = document.getElementById("pass2") as HTMLInputElement | null;

    // console.log(pass1?.value);
    // console.log(pass2?.value);

    if (pass1?.value != pass2?.value && pass2?.value != "") {
        if (pass1 != null && pass2 != null) {
            console.log("not matching")
        }
    else if (pass1?.value == pass2?.value) {
        if (pass1 != null && pass2 != null) {
            console.log("matching")
        }
    }
    }
}