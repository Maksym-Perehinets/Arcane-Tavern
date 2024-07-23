import useSpell from "./useSpell.ts";
import SpecialText from "@/components/shared/SpecialText.tsx";
import { spellDescriptionPlaceholder } from "@/constants/index.ts";
import { ITableElem } from "@/types/index.ts";

interface SpellComponentProps {
  spellId: number;
}

const SpellDescription: React.FC<SpellComponentProps> = ({ spellId }) => {
  const { spell, loading, error } = useSpell(spellId);

  const copyText = (spellName: string) => {
    navigator.clipboard.writeText(spellName);
    <p className="absolute">copied</p>
  }


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!spell) {
    return <p>No spell data found</p>;
  }


  return (
    <div className="spell-details h-[85vh] pr-1/4 flex flex-col">
      <div className="w-full flex justify-between">
        {spell.name.length > 15
          ? <h1 className="spell-name text-5xl m-4 cursor-pointer" onClick={() => { copyText(spell.name) }}>{spell.name}</h1>
          : <h1 className="spell-name text-5xl m-5 cursor-pointer" onClick={() => { copyText(spell.name) }}>{spell.name}</h1>}

        <div className="main-extras mt-6">
          <p className="extras-text">Book: {spell.source}</p>
          <p className="extras-text">Page: {spell.page}</p>
        </div>

      </div>

      <table className="w-full mt-4 object-scale-down">
        <thead>
          <tr>
            {spellDescriptionPlaceholder.map((cell: ITableElem) =>
              <th className="text-center text-nowrap px-4" key={cell.id}>{cell.label}</th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="text-nowrap text-center ">
            <td>{spell.level}</td>
            <td>{spell.ranges.distance
              ? spell.ranges.distance.amount
                ? `${spell.ranges.distance.amount} ${spell.ranges.distance.type}`
                : spell.ranges.distance.type
              : spell.ranges.type}
            </td>
            <td>
              {spell.time.map((t) => `${t.number} ${t.unit}`).join(", ")}
            </td>
            <td className="text-wrap group transition ease-in duration-150 relative">
              {spell.components.v ? "V " : ""}
              {spell.components.s ? "S " : ""}
              {spell.components.m ? "M" : ""}
              <div className="absolute opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 rounded-xl p-4 bg-black">{spell.components.m ? spell.components.m.text : ""}</div>
            </td>
            <td className="text-wrap">
              {spell.duration.concentration ? "Concentration " : ""}
              {["instant", "permanent", "special"].includes(
                spell.duration.type.toLowerCase()
              )
                ? spell.duration.type
                : `${spell.duration.time} ${spell.duration.type}`}
            </td>
          </tr>
        </tbody>
      </table>
      {/*
      <div className="spell-main-info">
        <p className="main-info-text">Level</p> make element dont 
        <p className="main-info-text">Range</p>
        <p className="main-info-text">Casting Time</p>
        <p className="main-info-text">Components</p>
        <p className="main-info-text">Duration</p>
      </div> 

      <div className="spell-main-info value">
        <p className="main-info-text value">{spell.level}</p>
        <p className="main-info-text value">
          {spell.ranges.distance
            ? spell.ranges.distance.amount
              ? `${spell.ranges.distance.amount} ${spell.ranges.distance.type}`
              : spell.ranges.distance.type
            : spell.ranges.type}
        </p>

        <p className="main-info-text value">
          {spell.time.map((t) => `${t.number} ${t.unit}`).join(", ")}
        </p>

        <p className="main-info-text value text-wrap">
          {spell.components.v ? "V " : ""}
          {spell.components.s ? "S " : ""}
          {spell.components.m ? `M (${spell.components.m.text || ""})` : ""}
        </p>

        <p className="main-info-text value">
          {spell.duration.concentration ? "Concentration " : ""}
          {["instant", "permanent", "special"].includes(
            spell.duration.type.toLowerCase()
          )
            ? spell.duration.type
            : `${spell.duration.time} ${spell.duration.type}`}
        </p>
      </div>*/}
      <div className="flex flex-col justify-between h-[79%]">

        <div className="overflow-y-auto spell-descriptiona mt-5 p-5 w-full rounded-2xl h-[90%] bg-spell-table">
          {spell.description.map((desc, key) => {
            if (typeof desc === "string") {
              return (
                <SpecialText key={key} description={desc} className="desc-text" />
              );
            } else if (typeof desc == "object") {

              switch (desc.type) {
                case "entries":
                  return <SpecialText key={key} description={desc.entries} className="desc-text" />;

                case "quote":
                  return <div key={key}>
                    <p key={key} className="desc-text pb-0 italic">"{desc.entries}" </p>
                    <p className="text-stone-300 text-right mr-4 mb-5"> — {desc.by}</p>
                  </div>
                  

                case "list":
                  return (
                    <ul className="desc-text" key={key}>
                      {desc.items.map((e: string | object, key: number) =>
                        <li className="m-3 list-disc" key={key}>
                          <SpecialText description={e} />
                        </li>
                      )}
                    </ul>
                  )

                case "table":
                  const styles = (index: number, splitBy: string) => desc.colStyles[index].split(splitBy)
                  return (
                    <table key={key} className="w-full text-left a border-indigo-500">
                      <caption className="text-2xl text-indigo-400 text-left">{desc.caption}</caption>
                      <thead >
                        <tr> 
                          {desc.colLabels.map((cell: string, key: number) =>
                            <th 
                              key={key}
                              colSpan={parseInt(styles(key, " ")[-1])}
                              className="m-3"  
                            >
                              <SpecialText description={cell} />
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {desc.rows.map((row, key: number) =>
                          <tr 
                            key={key}
                            className="odd:bg-indigo-600/5"  
                          >
                            {row.map((cell, key: number) =>
                              <th 
                                key={key}
                                className="col-span-2" 
                                colSpan={parseInt(styles(key, "-")[-1])}
                              >
                                <SpecialText description={cell} />
                              </th>
                            )}
                          </tr>
                        )}
                      </tbody>
                    </table>
                  )

                  default:
                    return <p key={key}>Error occured while loading description</p>
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
              <SpecialText description={spell.descriptionOnHigherLevels[0].entries}/>
            </div>
          )}
        </div>

        <div className="w-full pl-[2%]">
          <p className="casters-text h-full text-lg">
            Casters: {spell.casters.map((caster) => caster.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpellDescription;
