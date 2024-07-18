import React, { useState } from "react";
import useSpell from "./useSpell.ts";
import SpecialText from "@/components/shared/SpecialText.tsx";
import { spellDescriptionPlaceholder } from "@/constants/index.ts";
import { ITableElem } from "@/types/index.ts";

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

  return (
    <div className="spell-details">
      <div className="w-full flex justify-between ">
        <h1 className="spell-name text-5xl m-5">{spell.name}</h1>

        <div className="main-extras mt-6">
          <p className="extras-text">Book Name: {spell.source}</p>
          <p className="extras-text">Page: {spell.page}</p>
        </div>

      </div>

      <table className="w-full mt-4">
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
            <td className="text-wrap group transition ease-in duration-150">
              {spell.components.v ? "V " : ""}
              {spell.components.s ? "S " : ""}
              {spell.components.m ? "M" : ""}
              <div className="group-focus:hidden group-hover:visible ">{spell.components.m ? spell.components.m.text : ""}</div>
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
      </div>*/}

      <div className="spell-description overflow-y-auto mb-20 h-[50vh]">
        {spell.description.map((desc, index) => {
          if (typeof desc === "string") {
            return (
              <SpecialText key={index} description={desc} className="desc-text" />
            );
          } else if (typeof desc == "object") {
            switch (desc.type) {

              case "entries":
                return <SpecialText key={index} description={Object.values(desc)[2]} className="desc-text" />;

              case "quote":
                return <SpecialText key={index} description={`${Object.values(desc)[1]} by ${Object.values(desc)[2]}`} className="desc-text" />; 

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
                    <caption>{Object.values(desc)[1]}</caption>
                    <thead>
                      <tr>
                        {Object.values(desc)[2].map((cell: string, key: number) =>
                          <th className="m-3" key={key}>{cell}</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(desc)[4].map((row: string[], key:number) =>
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
