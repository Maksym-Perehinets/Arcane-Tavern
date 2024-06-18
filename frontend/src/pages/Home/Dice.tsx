import { useState, useEffect } from "react";
import "../../css/Home/DiceCSS.scss";

const DiceRoller = () => {
  const [face, setFace] = useState(1);
  const [rolling, setRolling] = useState(false);
  const sides = 20;
  const animationDuration = 3000;

  useEffect(() => {
    let timeoutId;
    if (rolling) {
      timeoutId = setTimeout(() => {
        setRolling(false);
        rollTo(randomFace());
      }, animationDuration);
    }
    return () => clearTimeout(timeoutId);
  }, [rolling]);

  const randomFace = () => {
    let newFace;
    do {
      newFace = Math.floor(Math.random() * sides) + 1;
    } while (newFace === face);
    return newFace;
  };

  const rollTo = (newFace) => {
    setFace(newFace);
  };

  const handleRollClick = () => {
    setRolling(true);
  };

  return (
    <div className="MainCointiner">
      <h1>Try Your Luck!</h1>
      <div className="content">
        <div className={`die ${rolling ? "rolling" : ""}`} data-face={face}>
          {[...Array(sides)].map((_, i) => (
            <figure key={i + 1} className={`face face-${i + 1}`}></figure>
          ))}
        </div>
        <button className="randomize" onClick={handleRollClick}>
          Roll
        </button>
      </div>
    </div>
  );
};

export default DiceRoller;
