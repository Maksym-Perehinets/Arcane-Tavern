import { useState } from "react";
import SpellOfTheDayDiv from "./SpellOfTheDayCard";

const SpellOfTheDay = () => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="daily-spell-div flex justify-center">
      <div
        className={`show-spell-div ${flipped? "transform-rotate-y-180" : ""} flex flex-col items-center transition-all duration-700 `}
        onClick={() => handleCardClick()}
      >
        <SpellOfTheDayDiv  />
      </div>
    </div>
  );
};

export default SpellOfTheDay;
