import { ITableGlobalValues } from '@/types/index.ts'
import {hp, eye, moon, running, shield, tools} from '../../public/icons/index.ts'

export const navbarLinks = [
    {
        route: "/",
        label: "Home"
    },
    {
        route: "/spell-list",
        label: "Spells"
    },
    {
        route: "/characters",
        label: "Characters"
    },
    {
        route: "/about-us",
        label: "About Us"
    },
    {
        route: "/contact",
        label: "Contact"
    },

]

export const spellsTableElem = [
    {
        id: "lvl",
        label: "lvl"
    },
    {
        id: "name",
        label: "Name"
    },
    {
        id: "concentration",
        label: "C"
    },
    {
        id: "duration",
        label: "Duration"
    },
    {
        id: "time",
        label: "Time"
    },
    {
        id: "range",
        label: "Range"
    },

]

export const spellDescriptionPlaceholder = [
    {
        id: "lvl",
        label: "Level"
    },
    {
        id: "range",
        label: "Range"
    },
    {
        id: "castTime",
        label: "Casting Time"
    },    
    {
        id: "components",
        label: "Components"
    },
    {
        id: "duration",
        label: "Duration"
    }
]

export const filterWindow = [
    {
        id: "search",
        label: "Search",
        icon: "/icons/search.svg"
    },    
    {
        id: "filter",
        label: "Filter",
        icon: "/icons/checkbox.svg"
    }, 
    {
        id: "create",
        label: "Create",
        icon: "/icons/createSpell.svg"
    }
]

export const charactersPageStatsIcons = [
    {    
        id: "eye-icon",
        icon: eye,
        iconIndex: 0
    },
    {    
        id: "shield-icon",
        icon: shield,
        iconIndex: 1
    },
    {    
        id: "tools-icon",
        icon: tools,
        iconIndex: 2
    },
    {    
        id: "moon-icon",
        icon: moon,
        iconIndex: 3
    },
    {    
        id: "hp-icon",
        icon: hp,
        iconIndex: 4
    },
    {    
        id: "running-icon",
        icon: running,
        iconIndex: 5
    }

]

export const HomeIntroductionLinks = [
    {
        link: "/spell-list",
        logoLink: "https://dvoxsotka.s3.amazonaws.com/arcane-tavern/databaseWizard.png",
        entries: "Robust database full of spells, complete with filters, search and a tool to create your own spells"
    },
    {
        link: "/characters",
        logoLink: "https://dvoxsotka.s3.amazonaws.com/arcane-tavern/cuteChar.png",
        entries: "Character creation tool, using DnD 5e charsheet, fully editable to suit all of your needs"
    },
    {
        link: "/spell-list",
        logoLink: "https://dvoxsotka.s3.amazonaws.com/arcane-tavern/diceBrush.png",
        entries: "Nice and cozy menus, designed with minimizing eye strain in mind"
    }
]

export const CharactersCombatStats = [
    {
        id: "armor-class",
        icon: shield,
        label: "Armor Class",
        index: 0,
        readonly: true
    },
    {
        id: "max-hit-points",
        icon: hp,
        label: "Max Hit Points",
        index: 1,
        readonly: false
    },
    {
        id: "speed",
        icon: running,
        label: "Speed",
        index: 2,
        readonly: true
    },
    {
        id: "initiative",
        icon: moon,
        label: "Initiative",
        index: 3,
        readonly: true
    }
]

export const CharactersCombatTableHeaders = [
        "Name",
       "Profocient?",
        "Details",
        "AC"
]
export const CharactersCombatTableHeadersWeapons = [
    "Name",
   "Profocient?",
    "Details",
    "Attack",
    "Damage"
]

export const CharactersCombatTableValues: ITableGlobalValues['CombatArmor'] = [
    {
        name: "No armor",
        proficience: false,
        details: "Base",
        AC: 13,
    },
    {
        name: "Light Armor",
        proficience: true,
        details: "Medium",
        AC: 15,
    }
]

export const CharactersCombatTableWeaponsValues: ITableGlobalValues['CombatWeapons'] = [
    {
        name: "Javelin",
        proficience: true,
        details: "melee",
        attack: "1d20+4",
        damage: "1d6+2"
    }

]

export const AdditionalWeaponsTableHeaders = [
    {
      utilType: "Javelin",
      details: [
        { header: "Type", value: "simple" },
        { header: "Damage Type", value: "piercing" },
        { header: "Melee/Ranged", value: "melee" },
        { header: "Range", value: "30/120ft" },
        { header: "Finesse?", value: false },
        { header: "Two-handed?", value: false },
      ],
    },
  ];

export const AdditionalArmorTableValues = [
    {
      utilType: "No Armor",
      details: [
        { header: "Base AC", value: 10 },
        { header: "Stealth Disadvantage?", value: true },
      ],
    },
    {
      utilType: "Light Armor",
      details: [
        { header: "Type", value: "medium" },
        { header: "Base AC", value: 13 },
        { header: "Max DEX AC Bonus", value: 2 },
        { header: "Stealth Disadvantage", value: false },
        { header: "Weight", value: "20lbs" },
      ],
    },
  ];
  
export const CharactersProficiencyTableSkillsHeaders = [
    "Name",
    "Proficient?",
    "Expertise",
    "Bonus"
]
export const CharactersProficiencyTableHeadersTools = [
    "Name",
    "Proficient?",
    "Expertise",
    "Bonus",
    ""
]

export const CharactersProficiencyTableValuesSkills: ITableGlobalValues['ProficiencySkills'] = [
    {name: "Acrobatics", proficience: false, expertise: false, bonus: "+2"},
    {name: "Arcana", proficience: false, expertise: false, bonus: "+1"},
    {name: "Animal Handling", proficience: false, expertise: false, bonus: "0"}
]
export const CharactersProficiencyTableValuesTools: ITableGlobalValues['ProficiencyTools'] = [
    {name: "Tool1", proficience: false, expertise: false, bonus: "+2", roll: "1d20"},
    {name: "Tool2", proficience: false, expertise: false, bonus: "+1", roll: "1d20"},
]

