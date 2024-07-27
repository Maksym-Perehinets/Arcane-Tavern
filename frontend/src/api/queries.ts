import { useQuery } from "@tanstack/react-query";
import { getAllSpells, getSpellById } from "../api/api";
import { Spell } from "@/interfaces/spell2";


export const useGetAllSpells = (page: number, amount: number) => {
  return useQuery({
    queryKey: ['getAllSpells', page, amount],
    queryFn: () => getAllSpells(page, amount)
  });
};

export const useGetSpellById = (spellId: string) => {
    return useQuery<Spell>({
      queryKey: ['getAllSpells', spellId],
      queryFn: () => getSpellById(spellId)
    });
  };


