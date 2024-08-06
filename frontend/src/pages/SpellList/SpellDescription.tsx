import CopyToClipboard from "@/components/shared/CopyToClipboard.tsx";
import SpecialText from "@/components/shared/SpecialText.tsx";
import { spellDescriptionPlaceholder } from "@/constants/index.ts";
import { ITableElem } from "@/types/index.ts";
import { useGetSpellById } from "@/api/queries.ts";


interface SpellComponentProps {
  spellId: string;
}

const SpellDescription: React.FC<SpellComponentProps> = ({ spellId }) => {
  const { data: spell, isLoading, isError } = useGetSpellById(spellId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  if (!spell) {
    return <p>No spell data found</p>;
  }

  const getMaterials = (
    materials: { text?: string } | string
  ): string | undefined => {
    if (typeof materials === "object" && "text" in materials) {
      return materials.text;
    } else if (typeof materials === "string") {
      return materials;
    }
    return undefined;
  };

  return (
    <>
      <div className="w-full flex justify-between">
        <CopyToClipboard className="p-3" text={spell.name}>
          <h1 className="spell-name text-5xl m-5">{spell.name}</h1>
        </CopyToClipboard>

        <div className="main-extras mt-6">
          <p className="extras-text">Book: {spell.source}</p>
          <p className="extras-text text-nowrap">Page: {spell.page}</p>
        </div>
      </div>

      <table className="w-full mt-4 object-scale-down">
        <thead>
          <tr>
            {spellDescriptionPlaceholder.map((cell: ITableElem) => (
              <th className="text-center text-nowrap px-4" key={cell.id}>
                {cell.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="text-nowrap text-center ">
            <td>{spell.level}</td>
            <td>{spell.ranges}</td>
            <td>{spell.time}</td>
            <td
              className={`text-wrap group relative ${
                spell.components.m &&
                getMaterials(spell.components.m) &&
                "underline"
              }`}>
              {spell.components.v && "V "}
              {spell.components.s && "S "}
              {spell.components.m && "M"}
              {spell.components.m && (
                <div className="absolute hidden transition-opacity duration-500 ease-in-out group-hover:block rounded-xl p-4 bg-black">
                  {getMaterials(spell.components.m)}
                </div>
              )}
            </td>
            <td className="text-wrap">
              {spell.concentration ? "Concentration " : ""}
              {spell.duration}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="overflow-y-auto spell-descriptiona mt-5 p-5 w-full rounded-2xl bg-spell-table grow">
        {spell.entries.map((desc, key) => {
          if (typeof desc === "string") {
            return (
              <SpecialText key={key} description={desc} className="desc-text" />
            );
          } else if (typeof desc == "object") {
            switch (desc.type) {
              case "entries":
                return (
                  <SpecialText
                    key={key}
                    description={desc.entries}
                    className="desc-text"
                  />
                );

              case "quote":
                return (
                  <div key={key}>
                    <p key={key} className="desc-text pb-0 italic">
                      "{desc.entries}"
                    </p>
                    <p className="text-stone-300 text-right mr-4 mb-5">
                      &mdash; {desc.by}
                    </p>
                  </div>
                );

              case "list":
                return (
                  <ul className="desc-text" key={key}>
                    {desc.items.map((e: string | object, key: number) => (
                      <li className="m-3 list-disc" key={key}>
                        <SpecialText description={e} />
                      </li>
                    ))}
                  </ul>
                );

              case "table":
                const styles = (index: number, splitBy: string) =>
                  desc.colStyles[index].split(splitBy);
                return (
                  <table
                    key={key}
                    className="w-full text-left a border-indigo-500">
                    <caption className="text-2xl text-indigo-400 text-left">
                      {desc.caption}
                    </caption>
                    <thead>
                      <tr>
                        {desc.colLabels.map((cell: string, key: number) => (
                          <th
                            key={key}
                            colSpan={parseInt(styles(key, " ")[-1])}
                            className="m-3">
                            <SpecialText description={cell} />
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {desc.rows.map((row, key: number) => (
                        <tr key={key} className="odd:bg-indigo-600/5">
                          {row.map((cell, key: number) => (
                            <th
                              key={key}
                              className="col-span-2"
                              colSpan={parseInt(styles(key, "-")[-1])}>
                              <SpecialText description={cell} />
                            </th>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );

              default:
                return <p key={key}>Error occured while loading description</p>;
            }
          } else {
            return (
              <p key={key} className="desc-text">
                Error occured while loading description
              </p>
            );
          }
        })}

        {spell.descriptionOnHigherLevels && (
          <div className="desc-text higher">
            {spell.descriptionOnHigherLevels[0].name} :
            <SpecialText
              description={spell.descriptionOnHigherLevels[0].entries}
            />
          </div>
        )}
      </div>

      <div className="w-full pl-[2%] my-3">
        <p className="casters-text h-full text-lg">
          Casters: {spell.casters?.map((caster) => caster.name).join(", ")}
        </p>
      </div>
    </>
  );
};

export default SpellDescription;
