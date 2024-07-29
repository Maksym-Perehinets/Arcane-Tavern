import axios from "axios";


const API_URL = "http://127.0.0.1:8080";

export const getAllSpells = async ({ pageParam = 0 }) => {
  return (await axios.get(`${API_URL}/api/v1/spells/?page=${pageParam}&amount=${50}`)).data;
}

export async function getSpellById(spellId: string) {
  return (await axios.get(`${API_URL}${spellId}`)).data[0];
}

export async function sortTableData(filterName: string, sortingType: boolean){
  const apiUrl = `${API_URL}/data-sort/?filter_name=${filterName}&asc_value=${sortingType}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function applyFilters(filters: string) {
  const apiUrl = `${API_URL}/data-filter/?${filters.substring(1)}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}
