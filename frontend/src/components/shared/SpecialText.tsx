import { useState } from 'react';

interface DescriptionText {
    description: string | object,
    className?: string
}

const SpecialText: React.FC<DescriptionText> = ({ description, className }) => {

    const regex = /\{([^}]+)\}/g;
    const [tagText, setTagText] = useState("")
    const descriptionSection = typeof description == "object" ? Object.values(description)[0].split(regex) : description.split(regex)

    const getTagText = (part: string) => {
        const tag = part.split(" ")
        switch (tag[0]) {
            case "@spell":
                return [tag[0], tag[1]]
            case "@creature":
                return [tag[0], tag.slice(2)]
            case "@hit":
                return [tag[0], tag[1]]
            case "@dice":
                return [tag[0], part.split("|", 1)[0].split(" ").slice(1)[0]]
            case "@damage":
                return [tag[0], tag.slice(1)[0]]
            case "@condition":
                return [tag[0], tag[1]]
            case "@sense":
                return [tag[0], tag[1]]
            case "@scaledamage":
                return [tag[0], tag[1]]
            case "@chance":
                return [tag[0], tag[1]]
            case "@item":
                return [tag[0], tag[1]]
            case "@adventure":
                return [tag[0], part.split("|")[0].split(" ").slice(1).join(" ")]


            default: return tag
        }
    }

    const handleClick = (tag: string[]) => {
        const dmg = tag.slice(1)[0].split("d")
        const diceAmount = parseInt(dmg[0])
        const diceMax = parseInt(dmg[1])
        const rolledDice = []
        console.log(dmg[0])
        Math.ceil
        let sum = 0;
        for (let i = 0; i < diceAmount; i++){
            const rand = (Math.floor(Math.random() * (diceMax)) + 1)
            sum += rand
            rolledDice.push(rand)
            console.log(sum)
        }
        alert(`${rolledDice} ${sum}`)
    }

    return (
        <p className={className}>
            {descriptionSection.map((part: any, index: number) => {
                const hasTag = /@(\w+)/g.test(`${part}`)
                if (hasTag) {
                    const tag = getTagText(part)
                    console.log(typeof tag[0])
                    console.log(typeof tag[1])
                    if (typeof tag[0] === 'undefined' || typeof tag[1] === 'undefined') {
                        console.error(tag)
                    }
                    return <span key={index} onClick={() => handleClick(tag)} className="cursor-pointer text-indigo-400">
                        {tag[1]}
                    </span>
                }
                else return part
            })}
        </p>

    )
}

export default SpecialText


// switch (part.split(" ")[0]){
//     case "@spell":
//         return
//     case "@creature":
//         return
//     case "@hit":
//         return
//     case "@dice":
//         return <a href="hjjha">{description.replace(matches, "")[0]}as</a>
//     case "@damage":
//         return regex.test(`@${part}`) ? <a key={index}>{part} dasdsasda</a> : part
//     case "@condition":
//         return
//     case "@sense":
//         return
//     case "@scaledamage":
//         return
//     case "@chance":
//         return
//     case "@i":
//         return   


/*
Frontend tasks:
    Spell page:
        Spell table:
            Fix this by making fixed columns;
            Fix Gift of Alacrity;
            Add sort functionality;
            


*/