import { useQuery } from "@tanstack/react-query";
import { getAllSpells } from "../api";

const useGetAllSpells =  (page: number, amount: number) => {
  return useQuery({
    queryKey: ['getAllSpells', page, amount],
    queryFn: () => getAllSpells(page, amount)
  });
};

export default useGetAllSpells;
