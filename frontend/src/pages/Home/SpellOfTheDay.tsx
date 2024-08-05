import { useState } from "react";
import SpellOfTheDayDiv from "./SpellOfTheDayCard";
import { useGetSpellById } from "@/api/queries";

const SpellOfTheDay = () => {
  const [flipped, setFlipped] = useState(false);
  
  const { data: spell, isLoading, isError } = useGetSpellById("/api/v1/spells/single/66a76be552fc2b8221357c19");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  if (!spell) {
    return <p>No spell data found</p>;
  }
  return (
    <div className="daily-spell-div flex justify-center">
      <div
        className={`show-spell-div flex flex-col items-center`}
        onClick={() => setFlipped(true)}
      >
        <p className="text-3xl m-16">Reveal your spell of the day</p>
        <SpellOfTheDayDiv flip={flipped} spell={spell}/>
      </div>
    </div>
  );
};

export default SpellOfTheDay;
