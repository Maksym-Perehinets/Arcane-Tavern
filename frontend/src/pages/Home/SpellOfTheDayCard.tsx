import SpecialText from "@/components/shared/SpecialText";
import { Spell } from "@/interfaces/spell2";

interface spellCardProp {
  flip: boolean;
  spell: Spell
}

const SpellOfTheDayDiv: React.FC<spellCardProp> = ({flip, spell}) => {
  return (  
    <div className={`sofd-div ${flip? "flip-card" : ""} overflow-clip`}>
      <div className="flip-card-inner relative w-full h-full shadow-lg transition-transform duration-600 ">

        <div className="flip-card-front absolute sofd-div w-full h-full bg-gray-400 text-black">
          <img
            className="w-full h-full "
            src="https://dvoxsotka.s3.amazonaws.com/arcane-tavern/spellCard.png"
            alt="Alchemy in action"
          />
        </div>
        
        <div className="flip-card-back absolute w-full h-full text-white transform">

          <div className="header-div">
            <p className="spell-name">{spell.name}</p>
          </div>

          <div className="spell-main-info-div">
            <p className="info-text">Range <br /> {spell.ranges}</p>
            <p className="info-text">Time <br /> {spell.time}</p>
            <p className="info-text">Duration <br /> {spell.duration}</p>
          </div>

          <p className="spell-desc line-clamp-[12] mx-[6%] my-[2%]">
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
          </p>
        </div>

      </div>
    </div>
  );
};

export default SpellOfTheDayDiv;
