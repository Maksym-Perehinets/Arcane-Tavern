import { ICharacterPageSpellsSlots, ITableGlobalValues } from '@/types/index.ts'
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

export const CharactersPageSpellsTables = [
    "Cantrip","1st Level", "2nd Level"
]

export const CharactersPageSpellsCantripsHeaders = [
    "Name", "Source","Ability", "DC", "Mod." ,"Attack"
]

export const CharactersPageSpellsSpellsHeaders = [
    "Name", "Source", "Ability",  "DC", "Mod." ,"Attack"
]

export const CharactersPageSpellsCantrips = [
    {name: "Guidance", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "Produce Flame", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "Ray of Frost", source: "High Elf", ability: "INT", DC: 11, mod: "+3", attack: "1d20+3"},
    {name: "Shillelagh", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"}
];

export const CharactersPageSpells1lvl = [
    {name: "animal friendship", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "charm person", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "create or destroy water", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "cure wounds", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "detect magic", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "detect poison and disease", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "entangle", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "faerie fire", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "fog cloud", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "goodberry", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "healing word", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "jump", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "longstrider", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "purify food and drink", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "speak with animals", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "thunderwave", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"}
];

export const CharactersPageSpells2lvl = [
    {name: "acid arrow", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "animal messenger", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "barkskin", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "darkness", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "darkvision", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "enhance ability", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "find traps", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "flame blade", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "flaming sphere", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "gust of wind", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "heat metal", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "hold person", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "lesser restoration", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "locate animals or plants", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "locate object", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "moonbeam", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "pass without trace", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "protection from poison", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"},
    {name: "spike growth", source: "Druid", ability: "WIS", DC: 10, mod: "+2", attack: "1d20+2"}
];

export const CharactersPageSlots: ICharacterPageSpellsSlots[] = [
    {CasterLevel: 3, lvl1: 4, lvl2: 2, lvl3:0, lvl4:0, lvl5:0, lvl6:0, lvl7:0, lvl8:0, lvl9:0}
];

export const CharacterPageDamageResistance = [
    "acid", "fire"
]

export const CharacterPageAttacks = [
    "Crossbow", "light.ranged, +6 to hit, 1d8+0  damage"
]
export const CharacterPageActions = [
    "Wild Shape", "Mewing"
]