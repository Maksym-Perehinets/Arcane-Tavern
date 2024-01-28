function rollD20() {
    var d20 = document.getElementById("d20");
    
    // Згенеруйте випадкове число від 1 до 20
    var randomNumber = Math.floor(Math.random() * 20) + 1;
    
    // Оновіть текст відповідної грани куба D20
    var face = document.getElementById("face" + randomNumber);
    face.textContent = randomNumber;
    
    // Застосуйте випадковий оберт для ефекту кидка
    var rotationX = Math.floor(Math.random() * 3 + 1) * 360;
    var rotationY = Math.floor(Math.random() * 3 + 1) * 360;
    var rotationZ = Math.floor(Math.random() * 3 + 1) * 360;
    d20.style.transform = "rotateX(" + rotationX + "deg) rotateY(" + rotationY + "deg) rotateZ(" + rotationZ + "deg)";
  }

  function rer(){
    var d20 = document.getElementById("d20");
    d20.style.transform = "translateX(50px) rotateY(90deg) rotateZ(0deg)";
  }
  
  function r(){
    var d20 = document.getElementById("d20");
    d20.style.transform = "translateX(50px) rotateY(-90deg) rotateZ(0deg)";
  }
  
  