
import { useState, useEffect } from 'react';
import SpellOfTheDayDiv from "./SpellOfTheDayDiv";

const SpellOfTheDay = () => {
  const [btnStatus, setBtnStatus] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (fade) {
      const timeout = setTimeout(() => {
        setFade(false);
      }, 500); // Duration of the fade effect in ms
      return () => clearTimeout(timeout);
    }
  }, [fade]);

  const handleClick = (status: number) => {
    setFade(true);
    setTimeout(() => setBtnStatus(status), 500); // Match the duration of the fade effect
  };

  const showSpell = () => {
    return btnStatus
      ? (<SpellOfTheDayDiv />) 
      : (<img className="spellCard" src="https://dvoxsotka.s3.amazonaws.com/arcane-tavern/spellCard.png" alt="Alchemy in action" />);
  };

  return (
    <div className="daily-spell-div">
      <div className={`show-spell-div ${fade ? 'fade' : ''}`}>
        {showSpell()}
      </div>
      
      <p className="title-text">Do you want to reveal your spell of the day?</p>
      <div className="btn-div">
        <button onClick={() => handleClick(0)} className="no-btn">No</button>
        <button onClick={() => handleClick(1)} className="yes-btn">Yes</button>
      </div>
    </div>
  )
}

export default SpellOfTheDay;