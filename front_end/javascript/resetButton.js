function resetAllDropdowns() {
    var dropdowns = document.querySelectorAll('#actionDropdown');

    dropdowns.forEach(function (dropdown) {
      dropdown.value = '';
    });
}