import {hp, eye, moon, running, shield, tools} from '../../public/icons'

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