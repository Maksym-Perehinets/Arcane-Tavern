// function load() {
//     let LoadDiv = document.getElementById("loader");
//     LoadDiv.style.display = "none";
//     console.log("hui");
// }



// window.addEventListener('load', function () {
//     let LoadDiv = document.getElementById("loader");
//     LoadDiv.style.display = "none";
//     console.log("hui");
//   })

// window.onload = function() {
//     let LoadDiv = document.getElementById("loader");
//     LoadDiv.style.display = "none";
//     console.log("hui");
// };

window.onload = function() {
    setTimeout (() => {
    let LoadDiv = document.getElementById("loader");
    LoadDiv.style.display = "none";
    console.log("hui");
    }, 300
    )
};

console.log(document.readyState);



