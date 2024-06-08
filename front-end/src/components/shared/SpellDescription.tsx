import React from 'react'

const SpellDescription = () => {
  return (
    <div className="spellNameDiv">
    <div className="spellNameText">
        <span id="spellName">Spell Name</span>
        <div className="bookName">
            <span id="bookName">PHB</span>
            <div className="bookPage">
                <span>Page:</span>
                <span id="bookPage">Page:</span>
            </div>
        </div>
    </div>
    <div className="spellChar">
        <a className="level">Level: </a> <a id="spellLevel" className="level"></a>
        <a className="range">Range: </a> <a id="spellRange"></a>
        <a>Casting Time: </a> <a id="spellCastingTime"></a>
        <a className="components">Components: </a> <a id="spellComponents"></a>
        <a className="duration">Duration: </a> <a id="spellDuration"></a>
    </div>
    <div className="infoAboutSpellDiv">
        <a id="spellDescription" className="infotext"> </a>
        <a id="descOnHigherLvl"></a>
        <a><b className="casters-bold">Casters: </b></a>
        <a id="casters"> </a>
    </div>
</div>
  )
}

export default SpellDescription