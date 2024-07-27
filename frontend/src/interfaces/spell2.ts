 
  export interface Casters {
    name: string;
    source: string;
  }
  
  export interface Components {
    v?: boolean;
    s?: boolean;
    m?: { text?: string } | string;
  }

  interface SpellDescription {
    type: string;
  }

  interface SpellDescriptionTableRoll {
    min: number;
    max: number;
    pad?: boolean;
  }

  interface SpellDescriptionTableCell {
    type: string;
    roll: SpellDescriptionTableRoll;
  }

  export interface SpellDescriptionTable extends SpellDescription {
    type: "table";
    caption: string;
    colLabels: string[];
    colStyles: string[]
    rows: (string | SpellDescriptionTableCell)[][];
  }

  interface SpellDescriptionListItems {
    type: string;
    name: string;
    entries: string;
  }

  interface SpellDescriptionList extends SpellDescriptionListItems {
    type: "list";
    items: (string | SpellDescriptionListItems)[];
  }

  interface SpellDescriptionEntry extends SpellDescription {
    type: 'entries';
    name: string;
    entries: string[];
  }

  interface SpellDescriptionQuote extends SpellDescription {
    type: 'quote';
    entries: string[];
    by: string;
  }

  export type Entry = string | SpellDescriptionEntry | SpellDescriptionQuote | SpellDescriptionTable | SpellDescriptionList;;
  
  export interface Spell {
    id: number;
    name: string;
    level: number;
    duration: string;
    concentration: string;
    time: string;
    ranges: string;
    entries: Entry[];
    descriptionOnHigherLevels?: { name: string; entries: string }[];
    source: string;
    page: number;
    components: Components;
    casters: Casters[];
  }