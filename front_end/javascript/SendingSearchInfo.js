const backendSearchUrl = "http://localhost:8000/returnSpellsToTable/";

document.addEventListener("DOMContentLoaded", () => {
  var searchBar = document.getElementById("searchTerm");

  function sendSearchResult(searchValue) {
    SendData({ name: searchValue }, backendSearchUrl);
  }

  searchBar.addEventListener("input", () => {
    if (searchBar.value.length > 2) {
      sendSearchResult(searchBar.value);
    }
  });
});
