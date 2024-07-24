import { useState, useEffect } from 'react';
import SpellOfTheDayDiv from "./SpellOfTheDayCard";

const SpellOfTheDay = () => {
  const [btnStatus, setBtnStatus] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (fade) {
      const timeout = setTimeout(() => {
        setFade(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [fade]);

  const handleClick = (status: number) => {
    setFade(true);
    setTimeout(() => setBtnStatus(status), 500);
  };

  const showSpell = () => {
    return btnStatus
      ? (<SpellOfTheDayDiv />) 
      : (<img className="spellCard" src="https://dvoxsotka.s3.amazonaws.com/arcane-tavern/spellCard.png" alt="Alchemy in action" />);
  };

  return (
    <div className="daily-spell-div flex-col">
      <div className={`show-spell-div ${fade ? 'fade' : ''}`}>
        {showSpell()}
      </div>
      
      <p className="title-text">Reveal your spell of the day</p>
      <div className="btn-div">
        <button onClick={() => handleClick(0)} className="no-btn">No</button>
        <button onClick={() => handleClick(1)} className="yes-btn">Yes</button>
      </div>
    </div>
  )
}

export default SpellOfTheDay;