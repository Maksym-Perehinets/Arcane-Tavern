import { useState } from "react";
import SpellOfTheDayDiv from "./SpellOfTheDayCard";

const SpellOfTheDay = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="daily-spell-div flex justify-center">
      <div
        className={`show-spell-div flex flex-col items-center`}
        onClick={() => setFlipped(true)}
      >
        <p className="text-3xl m-16">Reveal your spell of the day</p>
        <SpellOfTheDayDiv flip={flipped} />
      </div>
    </div>
  );
};

export default SpellOfTheDay;
