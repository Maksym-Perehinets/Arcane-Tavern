import { useQuery } from "@tanstack/react-query";
import { getAllSpells, getSpellById } from "../api/api";

const useGetAllSpells = (page: number, amount: number) => {
  return useQuery({
    queryKey: ['getAllSpells', page, amount],
    queryFn: () => getAllSpells(page, amount)
  });
};

const useGetSpellById = (spellId: number) => {
    return useQuery({
      queryKey: ['getAllSpells', spellId],
      queryFn: () => getSpellById(spellId)
    });
  };

export default useGetAllSpells;
