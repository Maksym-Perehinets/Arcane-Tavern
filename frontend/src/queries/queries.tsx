import axios from 'axios';

const backendUrl = "http://127.0.0.1:8080";

export async function getAllSpells(per_page: number, page: number) {
  const apiUrl = `${backendUrl}/spells&per_page=${per_page}&page=${page}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getSpellById(spellId: string) {
  const apiUrl = `${backendUrl}/get-spell/${spellId}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function sortTableData(filterName: string, sortingType: string) {
  const apiUrl = `${backendUrl}/data-sort/?filter_name=${filterName}&asc_value=${sortingType}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function applyFilters(filters: string) {
  const apiUrl = `${backendUrl}/data-filter/?${filters.substring(1)}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}
