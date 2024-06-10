import {useState} from 'react';

import SpellOfTheDayDiv from "./SpellOfTheDayDiv.tsx";

const SpellOfTheDay = () => {

  const [btnStatus, setBtnStatus] = useState(0);

  const btnStatusChangeTrue = () => {
    setBtnStatus(1);
  }
  const btnStatusChangeFalse = () => {
    setBtnStatus(0);
  }

  const showSpell = () => {
    if (btnStatus == 0) {
      return (
        <img className="gif" src="/alchemyThing.gif" alt="" />
      )
    }
    else {
      return (
        <SpellOfTheDayDiv />
      )
    }
  }

  return (
    <div className="daily-spell-div">
            <div className="show-spell-div">
            {showSpell()}
            </div>
            
            <p className="title-text">Do you want to reveal your spell of the day?</p>
            <div className="btn-div">
                <button onClick={btnStatusChangeFalse} className="no-btn">No</button>
                <button onClick={btnStatusChangeTrue} className="yes-btn">Yes</button>
            </div>
    </div>
  )
}

export default SpellOfTheDay