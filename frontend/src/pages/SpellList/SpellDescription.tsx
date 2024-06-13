import { SpellMainStats } from "@/interfaces/spell"

interface ISpellDescriptionProps {
    spell: SpellMainStats
}


const SpellDescription = () => {
  return (
    <>
        {/* <div className="spellNameDiv">
            <div className="spellNameText">
                <span className="spellName">Air Bubble</span>
                </div>
                <div className="bookName">
                    <span className="bookNameText">PHB</span>
                    <span className="bookPage">Page:</span>
                </div>
            <div className="spellChar">
                <a className="level">Level: </a> <a id="spellLevel" className="level"></a>
                <a className="range">Range: </a> <a id="spellRange"></a>
                <a>Casting Time: </a> <a id="spellCastingTime"></a>
                <a className="components">Components: </a> <a id="spellComponents"></a>
                <a className="duration">Duration: </a> <a id="spellDuration"></a>
            </div>
            <div className="infoAboutSpellDiv">
                <a className="spellDescription" className="infotext"> </a>
                <a className="descOnHigherLvl"></a>
                <a><b className="casters-bold">Casters: </b></a>
                <a className="casters"> </a>
            </div>
        </div> */}
        <div className="spell-details">

            <div className="spell-name-div">
                <p className="spell-name">Air Bubble</p>
            </div>

            <div className="main-extras">
                <p className="extras-text">Book Name: AAG</p>
                <p className="extras-text">Page: 22</p>
            </div>

            <div className="spell-main-info">
                <p className="main-info-text">Level</p>
                <p className="main-info-text">Range</p>
                <p className="main-info-text">Casting Time</p>
                <p className="main-info-text">Components</p>
                <p className="main-info-text">Duration</p>
            </div>
            <div className="spell-main-info value">
                <p className="main-info-text value">2</p>
                <p className="main-info-text value">60 feet</p>
                <p className="main-info-text value">1 Action</p>
                <p className="main-info-text value">S</p>
                <p className="main-info-text value">1 Hour</p>
            </div>

            <div className="spell-description">
                <p className="desc-text">You create a spectral globe around the head of a willing 
                creature you can see within range. The globe is filled with fresh air that lasts until the spell ends. 
                If the creature has more than one head, the globe of air 
                appears around only one of its heads (which is all the creature needs to avoid 
                suffocation, assuming that all its heads share the same respiratory system)</p>
                <p className="desc-text higher">When you cast this spell using a spell slot of 3rd level or higher,
                 you can create two additional globes of fresh air for each slot level above 2nd.</p>
            </div>

            <div className="casters-div">
                <p className="casters-text">Casters: Druid, Ranger, Sourcer, Wizard, Artificier</p>
            </div>
        </div>
    </>
  )
}

export default SpellDescription