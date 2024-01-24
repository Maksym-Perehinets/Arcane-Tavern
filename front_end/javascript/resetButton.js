function resetAllDropdowns() {
    var dropdowns = document.querySelectorAll('.DropList');

    dropdowns.forEach(function (dropdown) {
      dropdown.selectedIndex = 0;
    });
  }