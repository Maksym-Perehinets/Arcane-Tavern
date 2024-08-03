
export type INavLink = {
    route: string;
    label: string;
};

export type ITableElem = {
  id: string;
  label: string;
};

export type IFilterWindow = {
  id: string;
  label: string;
  icon: string;
}

export type ICharactersStatsIcons = {
  id: string;
  icon: string;
  iconIndex: number;
}

export type IHomeIntroductionLinks = {
  link: string;
  logoLink: string;
  entries: string;
}

export type ICharactersCombatStats = {
  id: string;
  icon: string;
  label:string;
  index: number;
  readonly: boolean;
}

// prev

// export type Combat = {
//   [key: string]: string | boolean | number;
//   name: string,
//   proficience: boolean,
//   details: string,
// }

// export type CombatWeapons = Combat & {
//   damage:string,
//   attack: string 
// }

// export type CombatArmor = Combat & {
//   AC:string
// }

export type IAdditionalDetailsTable = {
  header: string,
  value: string | boolean | number
}

// export type ProficiencySkills = {
//   name: string,
//   proficience: boolean,
//   expertise: boolean,
//   bonus: string
// }
// export type ProficiencyTools = ProficiencySkills & {
//   roll: Element
// }

// export type ITableGlobalValues = {
//   CombatArmor: {
//     [key: string]: string | boolean | number;
//     name: string,
//     proficience: boolean,
//     details: string,
//     AC:string
//   };
//   CombatWeapons: {
//     name: string,
//     proficience: boolean,
//     details: string,
//     damage:string,
//     attack: string 
//   };
//   ProficiencySkills: {
//     name: string,
//     proficience: boolean,
//     expertise: boolean,
//     bonus: string
//   };
//   ProficiencyTools: {
//     name: string,
//     proficience: boolean,
//     expertise: boolean,
//     bonus: string,
//     roll: Element
//   }

// }

export interface CombatArmor {
  name: string;
  proficience: boolean;
  details: string;
  AC: number;
  // [key: string]: string | boolean | number;
}

export interface CombatWeapons {
  name: string;
  proficience: boolean;
  details: string;
  damage: string;
  attack: string;
}

export interface ProficiencySkills {
  name: string;
  proficience: boolean;
  expertise: boolean;
  bonus: string;
}

export interface ProficiencyTools {
  name: string;
  proficience: boolean;
  expertise: boolean;
  bonus: string;
  roll: string;
}

export type ITableGlobalValues = {
  CombatArmor: CombatArmor[];
  CombatWeapons: CombatWeapons[];
  ProficiencySkills: ProficiencySkills[];
  ProficiencyTools: ProficiencyTools[];
}

export type ICharactersPageSpellsSpells = {
  name: string,
  source: string,
  ability: string,
  DC: number,
  mod: string,
  attack: string
}

export type ICharacterPageSpellsSlots = {
  CasterLevel: number;
  lvl2: number;
  lvl3: number;
  lvl4: number;
  lvl5: number;
  lvl6: number;
  lvl7: number;
  lvl8: number;
  lvl9: number;
  lvl1: number;
}