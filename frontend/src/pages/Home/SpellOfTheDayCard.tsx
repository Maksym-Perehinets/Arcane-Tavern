import { getSpellById } from "@/queries/queries";

interface spellCardProp {
  flip: boolean;
}

const SpellOfTheDayDiv: React.FC<spellCardProp> = ({flip}) => {
  return (
    <div className={`sofd-div ${flip? "flip-card" : ""} `}>
      <div className="flip-card-inner relative w-full h-full shadow-lg transition-transform duration-600">

        <div className="flip-card-front absolute sofd-div w-full h-full bg-gray-400 text-black">
          <img
            className="w-full h-full "
            src="https://dvoxsotka.s3.amazonaws.com/arcane-tavern/spellCard.png"
            alt="Alchemy in action"
          />
        </div>
        
        <div className="flip-card-back absolute w-full h-full text-white transform">

          <div className="header-div">
            <p className="spell-name">Acid Splash</p>
          </div>

          <div className="spell-main-info-div">
            <p className="info-text">Range: 60 feet</p>
            <p className="info-text">Casting Time: 1 action</p>
            <p className="info-text">Duration: Instantaneous</p>
          </div>

          <p className="spell-desc">
            You hurl a bubble of acid. Choose one creature you can see within
            range, or choose two creatures you can see within range that are
            within 5 feet of each other. A target must succeed on a Dexterity
            saving throw or take 1d6 acid damage. This spell's damage increases
            by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th
            level (4d6).
          </p>

        </div>

      </div>
    </div>
  );
};

export default SpellOfTheDayDiv;
