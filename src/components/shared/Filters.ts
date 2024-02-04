import { ApplyFilters, insertData } from './wherever/ApplyFilters'; // Import necessary functions from wherever ApplyFilters is located

async function sendFilters(filters: string): Promise<void> {
  const res = await ApplyFilters(filters);
  insertData(res, true);
}

function collectFilters(): void {
    const elms = document.querySelectorAll<HTMLSelectElement>("[id='actionDropdown']");
    const filters = Array.from(elms).map(elm => elm.value).join("");
    sendFilters(filters);
}
