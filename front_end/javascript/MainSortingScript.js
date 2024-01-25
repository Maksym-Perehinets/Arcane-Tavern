var spellName,
  spellRange,
  spellDuration,
  spellCastingTime,
  spellComponents,
  spellDescriptio,
  spellLevel,
  spellBookName;

document.addEventListener("DOMContentLoaded", function () {
  spellLevel = document.getElementById("name");
  spellName = document.getElementById("name");
  spellRange = document.getElementById("spellRange");
  spellDuration = document.getElementById("spellDuration");
  spellCastingTime = document.getElementById("spellCastingTime");
  spellComponents = document.getElementById("spellComponents");
  console.log("n", "True");
  spellName.addEventListener("click", (bebrus) => {
    sortTable(bebrus);
  });
});

function sortTable(n) {
  console.log(n, "True");
  SortTAbleData("concentration", "True");

  // var jsonString = JSON.stringify(jsonData);

  // fetch('your-backend-endpoint', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: jsonString,
  // })
  // .then(response => response.json())
  // .then(data => {
  //     console.log('Success:', data);
  // })
  // .catch(error => {
  //     console.error('Error:', error);
  // });
}
