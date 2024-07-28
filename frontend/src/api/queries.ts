import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAllSpells, getSpellById } from "../api/api";
import { Spell } from "@/interfaces/spell2";


export const useGetAllSpells = () => {
  return useInfiniteQuery({
    queryKey: ['getAllSpells'],
    queryFn: getAllSpells,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
    initialPageParam: 1
  });
};

export const useGetSpellById = (spellId: string) => {
    return useQuery<Spell>({
      queryKey: ['getSpellById', spellId],
      queryFn: () => getSpellById(spellId)
    });
  };
