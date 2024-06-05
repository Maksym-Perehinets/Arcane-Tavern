import { applyFilters} from '../../queries/queries';
import { insertData } from './InsertData';

async function sendFilters(filters: string): Promise<void> {
  const res = await applyFilters(filters);
  insertData(res, true);
}

function collectFilters() {
    const elms = document.querySelectorAll<HTMLSelectElement>("[id='actionDropdown']");
    const filters = Array.from(elms).map(elm => elm.value).join("");
    sendFilters(filters);
}

export default collectFilters;