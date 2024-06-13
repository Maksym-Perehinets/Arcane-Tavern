import { SpellMainStats } from "@/interfaces/spell"
import SpellComponent from "./SpellComponent"
import { Spell } from '../../interfaces/spell2';

interface SpellDescriptionProps {
  spell: Spell;
}

interface ISpellDescriptionProps {
    spell: SpellMainStats
}

const SpellDescription = () => {


  return (
    <>
        <SpellComponent spellId={4} />
    </>
  )
}

export default SpellDescription