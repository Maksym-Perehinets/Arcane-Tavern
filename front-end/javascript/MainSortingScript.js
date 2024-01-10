function sortTable(n) {
    let table, i, x, y;
    let switching = true;
    table = document.getElementById("spellList");

    while (switching) {
        switching = false;
        let rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            var Switch = false;

            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                Switch = true;
                break;
            }
        }
        if (Switch) { 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}