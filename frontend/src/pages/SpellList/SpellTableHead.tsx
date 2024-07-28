import { spellsTableElem } from "@/constants";
import { ITableElem } from "@/types";

const SpellTableHead = () => {
  return (
    <thead>
        <tr >
            {spellsTableElem.map((link: ITableElem) => (
                <th
                    key={link.id}
                    onClick={() => {
                        console.log("sorting" + link.label)
                    }}
                    className="bg-zinc-950 sticky top-0 text-white h-10 p-2 text-xl cursor-pointer
                    [&:nth-child(3)]:pr-12"
                >
                    {link.label}
                </th>
            ))}
        </tr>
    </thead>
  )
}

export default SpellTableHead