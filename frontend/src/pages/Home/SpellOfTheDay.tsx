import {useState} from 'react';

import SpellOfTheDayDiv from "./SpellOfTheDayDiv";

const SpellOfTheDay = () => {

  const [btnStatus, setBtnStatus] = useState(0);

  const showSpell = () => {
    return ( btnStatus
      ? (<SpellOfTheDayDiv />) 
      : (<img className="spellCard" src="https://dvoxsotka.s3.amazonaws.com/arcane-tavern/spellCard.png" alt="Alchemy in action" />)
    );
  };

  return (
    <div className="daily-spell-div">
            <div className="show-spell-div">
            {showSpell()}
            </div>
            
            <p className="title-text">Do you want to reveal your spell of the day?</p>
            <div className="btn-div">
                <button onClick={() => setBtnStatus(0)} className="no-btn">No</button>
                <button onClick={() => setBtnStatus(1)} className="yes-btn">Yes</button>
            </div>
    </div>
  )
}

export default SpellOfTheDay
