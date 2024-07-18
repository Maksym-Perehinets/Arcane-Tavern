import React, { useState } from "react";
import useSpell from "./useSpell.ts";
import SpecialText from "@/components/shared/SpecialText.tsx";

interface SpellComponentProps {
  spellId: number;
}

const SpellDescription: React.FC<SpellComponentProps> = ({ spellId }) => {
  const { spell, loading, error } = useSpell(spellId);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!spell) {
    return <p>No spell data found</p>;
  }

  const getKeyByValue = (object: { [x: string]: any }, value: any) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  return (
    <div className="spell-details">
      <div className="spell-name-div">
        <h1 className="spell-name">{spell.name}</h1>
      </div>

      <div className="main-extras">
        <p className="extras-text">Book Name: {spell.source}</p>
        <p className="extras-text">Page: {spell.page}</p>
      </div>

      <div className="spell-main-info">
        <p className="main-info-text">Level</p>
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
      </div>

      <div className="spell-description overflow-y-scroll mb-20 h-[50vh]">
        {spell.description.map((desc, index) => {
          if (typeof desc === "string") {
            return (
              <p key={index} className="desc-text">
                <SpecialText description={desc} />
              </p>
            );
          } else if (typeof desc == "object") {
            switch (desc.type) {

              case "entries":
                return <p key={index} className="desc-text">{Object.values(desc)[2]}</p>;

              case "quote":
                return <p key={index} className="desc-text">{Object.values(desc)[1]} by {Object.values(desc)[2]}</p>;

              case "list":
                return (
                  <ul className="desc-text" key={index}>
                    {Object.values(desc)[1].map((e: string, key: number) =>
                      <li className="m-3 list-disc" key={key}>{e}</li>
                    )}
                  </ul>
                )

              case "table":
                return (
                  <table>
                    <caption>{desc.table.caption}</caption>
                    <thead>
                      <tr>
                        {desc.table.colLabels.map((cell: string, key) =>
                          <th className="m-3" key={key}>{cell}</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {desc.table.rows.map((row: string[], key) =>
                        <tr key={key}>
                          {row.map((cell: string, key: number) =>
                            <th key={key}>{cell}</th>
                          )}
                        </tr>
                      )}
                    </tbody>
                  </table>
                )

              default: return error
            }

          } else {
            return (
              <p key={index} className="desc-text">
                ass {desc}
              </p>
            );
          }
        })}
        {spell.descriptionOnHigherLevels && (
          <p className="desc-text higher">
            {spell.descriptionOnHigherLevels[0].name}:{" "}
            {spell.descriptionOnHigherLevels[0].entries}
          </p>
        )}
      </div>

      <div className="casters-div">
        <p className="casters-text">
          Casters: {spell.casters.map((caster) => caster.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default SpellDescription;
