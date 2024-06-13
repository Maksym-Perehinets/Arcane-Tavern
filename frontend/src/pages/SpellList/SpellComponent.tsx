import React from 'react';
import useSpell from './useSpell.ts';

interface SpellComponentProps {
    spellId: number;
}

const SpellComponent: React.FC<SpellComponentProps> = ({ spellId }) => {
    const { spell, loading, error } = useSpell(spellId);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!spell) {
        return <p>No spell data found</p>;
    }

    return (
        // <div>
        //     <h2>{spell.name}</h2>
        //     <p><strong>Source:</strong> {spell.source}</p>
        //     <p><strong>Page:</strong> {spell.page}</p>
        //     <p><strong>Level:</strong> {spell.level}</p>
        //     <p><strong>School:</strong> {spell.school}</p>
        //     <p><strong>Cast Time:</strong> {spell.time.map((t: any) => `${t.number} ${t.unit}`).join(', ')}</p>
        //     <p><strong>Range:</strong> {spell.range.distance.amount} {spell.range.distance.type}</p>
        //     <p><strong>Components:</strong> {spell.components.s ? 'S' : ''}</p>
        //     <p><strong>Duration:</strong> {spell.duration.map((d: any) => `${d.duration.amount} ${d.duration.type}`).join(', ')}</p>
        //     <p><strong>Description:</strong> {spell.entries.join(' ')}</p>
        //     {spell.entriesHigherLevel && (
        //         <div>
        //             <h3>{spell.entriesHigherLevel[0].name}</h3>
        //             <p>{spell.entriesHigherLevel[0].entries.join(' ')}</p>
        //         </div>
        //     )}
        //     {spell.miscTags && (
        //         <p><strong>Tags:</strong> {spell.miscTags.join(', ')}</p>
        //     )}
        // </div>
        <div className="spell-details">

<div className="spell-name-div">
        <p className="spell-name">{spell.name}</p>
      </div>

      <div className="main-extras">
        <p className="extras-text">Book Name: {spell.source}</p>
        <p className="extras-text">Page: {spell.page}</p>
      </div>

      <div className="spell-main-info">
        <p className="main-info-text">Level</p>
        <p className="main-info-text">Range</p>
        <p className="main-info-text">Casting Time</p>
        <p className="main-info-text">Components</p>
        <p className="main-info-text">Duration</p>
      </div>

      <div className="spell-main-info value">
        <p className="main-info-text value">{spell.level}</p>
        <p className="main-info-text value">
          {spell.ranges.distance
            ? spell.ranges.distance.amount
              ? `${spell.ranges.distance.amount} ${spell.ranges.distance.type}`
              : spell.ranges.distance.type
            : spell.ranges.type}
        </p>
        <p className="main-info-text value">
          {spell.time.map((t) => `${t.number} ${t.unit}`).join(', ')}
        </p>
        <p className="main-info-text value">
          {spell.components.v ? 'V ' : ''}
          {spell.components.s ? 'S ' : ''}
          {spell.components.m ? `M (${spell.components.m.text || ''})` : ''}
        </p>
        <p className="main-info-text value">
          {spell.duration.concentration ? 'Concentration ' : ''}
          {['instant', 'permanent', 'special'].includes(spell.duration.type.toLowerCase())
            ? spell.duration.type
            : `${spell.duration.time} ${spell.duration.type}`}
        </p>
      </div>

      <div className="spell-description">
        {spell.description.map((desc, index) => (
          <p key={index} className="desc-text">{desc}</p>
        ))}
        {spell.descriptionOnHigherLevels && (
          <p className="desc-text higher">
            {spell.descriptionOnHigherLevels[0].name}: {spell.descriptionOnHigherLevels[0].entries}
          </p>
        )}
      </div>

      <div className="casters-div">
        <p className="casters-text">Casters: {spell.casters.map((caster) => caster.name).join(', ')}</p>
      </div>
        </div>
    );
};

export default SpellComponent;