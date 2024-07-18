export interface Duration {
    type: string;
    concentration: boolean;
    time?: number;
  }
  
  export interface Time {
    number: number;
    unit: string;
  }
  
  export interface Distance {
    amount?: number;
    type: string;
  }
  
  export interface Ranges {
    distance?: Distance;
    type?: string;
  }
  
  export interface Components {
    v?: boolean;
    s?: boolean;
    m?: { text?: string };
  }

  export interface SpellDescription {
    content: string | string[];
    type?: string;
    table: SpellDescriptionTable;
  }

  export interface SpellDescriptionTable {
    caption: string;
    colLabels: string[];
    rows: []
  }
  
  export interface Spell {
    id: number;
    name: string;
    level: number;
    duration: Duration;
    time: Time[];
    ranges: Ranges;
    description: SpellDescription[];
    descriptionOnHigherLevels?: { name: string; entries: string }[];
    source: string;
    page: number;
    components: Components;
    casters: { name: string }[];
  }