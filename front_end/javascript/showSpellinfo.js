var spellName,
  spellRange,
  spellDuration,
  spellCastingTim,
  spellComponents,
  spellDescriptio,
  spellLevel,
  spellBookName,
  spellBookPage,
  spellOnHigherLvl,
  spellCasters;

document.addEventListener("DOMContentLoaded", function () {
  var spellListTable = document.getElementById("spellList");
  var tbody = spellListTable.getElementsByTagName("tbody")[0];
  firstInfoFulfilment();
  tbody.addEventListener("click", function (event) {
    handleTableRowClick(event);
  });
});

async function firstInfoFulfilment() {
    let res = await SendCurrentSpell(1);
    insertInfoIntoDescription(res);
}

async function handleTableRowClick(event) {
  var clickedElement = event.target;
  var rowId = clickedElement.parentNode.cells[6].innerHTML;
  if (rowId) {
    let res = await SendCurrentSpell(rowId);
    insertInfoIntoDescription(res);
  } else {
    console.warn("Row ID not found.");
  }
}

function insertInfoIntoDescription(data) {
  var sdata = data.data[0];
  var spell = sdata.duration;
  let betterDescription = sdata.descriptionOnHigherLevels;

  spellName = document.getElementById("spellName");
  spellRange = document.getElementById("spellRange");
  spellDuration = document.getElementById("spellDuration");
  spellCastingTime = document.getElementById("spellCastingTime");
  spellComponents = document.getElementById("spellComponents");
  spellDescription = document.getElementById("spellDescription");
  spellLevel = document.getElementById("spellLevel");
  spellBookName = document.getElementById("bookName");
  spellBookPage = document.getElementById("bookPage");
  spellCasters = document.getElementById("casters");
  spellOnHigherLvl = document.getElementById("descOnHigherLvl");

  spellName.innerHTML = sdata.name;

  spellDuration.innerHTML =
    spell.type.toLowerCase() == "instant" ||
    spell.type.toLowerCase() == "permanent" ||
    spell.type.toLowerCase() == "special"
      ? `${spell.type}`
      : `${spell.time} ${spell.type}`;

  spellCastingTime.innerHTML = `${sdata.time[0].number} ${sdata.time[0].unit}`;

  spellRange.innerHTML = sdata.ranges.distance.amount
    ? `${sdata.ranges.distance.amount} ${sdata.ranges.distance.type}`
      : sdata.ranges.distance.type
      
  spellDescription.innerHTML = sdata.description;

  spellDescription.innerHTML = spellDescription.innerHTML.replace(/\{.*?\}/g, 
<<<<<<< HEAD
    function(capturedText){ return "<a href='#sad' data-tooltip='Click me!' class='clickable' onclick='clickableTextFunc(\" " + capturedText + "\")'>" + capturedText + "</a>";}
  );
=======
  function(capturedText)
  {
    return "<a href='#sad' class='clickable' onclick='clickableTextFunc(\" " + capturedText.slice(2, -1) + "\")'>" + capturedText.slice(2, -1) + "</a>";
  });
>>>>>>> ba09ff0df7aa3717b96d0cac45fb60d6af69da5c

  spellLevel.innerHTML = sdata.level;

  spellBookName.innerHTML = sdata.source;

  spellBookPage.innerHTML = `${sdata.page}`;

  spellComponents.innerHTML = " "
  if (sdata.components.v) {
    spellComponents.innerHTML = "V";
  }

  if (sdata.components.s) {
    spellComponents.innerHTML += " S";
  }

  if (sdata.components.m) {
    spellComponents.innerHTML += sdata.components.m.text
      ? ` M - ${sdata.components.m.text}`
      : ` M - ${sdata.components.m}`;
  }

  spellOnHigherLvl.innerHTML = betterDescription != null
  ?  `${betterDescription[0].name}: ${betterDescription[0].entries} `
  : "";

  spellCasters.innerHTML = ""; 
  sdata.casters.forEach((currentSpellCaster)=>{
    spellCasters.innerHTML += `${currentSpellCaster.name} `;
  } )
}


function clickableTextFunc(incomingText){
  var matches = incomingText.split(" ");
  var textType = matches[1];
  var dice =  matches[2].split("d");
  var result = [];


  switch(textType){
    case "dice": 
      for (var i = 0; i < dice[0]; i++){
        result.push(Math.floor((Math.random() * dice[1]) + 1));
      }
      break;
    case "damage":
      for (var i = 0; i < dice[0]; i++){
        result.push(Math.floor((Math.random() * dice[1]) + 1));
      }
      break;
    }

    alert(result);
}

document.addEventListener("DOMContentLoaded", function() {
  var tooltip = document.getElementsByClassName("clickable");

  document.addEventListener("mousemove", function(event) {
    tooltip.style.left = (event.pageX + 5) + "px";
    tooltip.style.top = (event.pageY + -200) + "px";
  });

  document.addEventListener("mouseover", function(event) {
    if (event.target.dataset.tooltip) {
      tooltip.style.display = "block";
    }
  });

  document.addEventListener("mouseout", function(event) {
    if (event.target.dataset.tooltip) {
      tooltip.style.display = "none";
    }
  });
});
