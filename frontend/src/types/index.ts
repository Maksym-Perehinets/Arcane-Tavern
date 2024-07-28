
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

export type ITableValues = {
  [key: string]: string | boolean | number;
  name: string,
  proficience: boolean,
  details: string,
}

export type ITableValuesWeapon = ITableValues & {
  damage:string,
  attack: string 
}

export type ITableValuesArmor = ITableValues & {
  AC:string
}

export type IAdditionalDetailsTable = {
  header: string,
  value: string | boolean | number
}

