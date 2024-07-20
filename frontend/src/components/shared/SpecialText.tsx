import { useState } from 'react';

interface DescriptionText {
    description: string | object,
    className?: string
}

const SpecialText: React.FC<DescriptionText> = ({ description, className }) => {

    const regex = /\{([^}]+)\}/g;
    const [tagText, setTagText] = useState("") 
    const descriptionSection =  typeof description == "object" ? Object.values(description)[0].split(regex) : description.split(regex)

    const getTagText = (part: string) => {
        const tag = part.split(" ")
        console.log(part.split("|")[0].slice(1))
        switch (tag[0]) {
            case "@spell":
                return tag[1]
            case "@creature":
                return tag.slice(2)
            case "@hit":
                return tag[1]
            case "@dice":
                return part.split("|")[0].split(" ").slice(1)
            case "@damage":
                return tag.slice(1)
            case "@condition":
                return tag[1]
            case "@sense":
                return tag[1]
            case "@scaledamage":
                return tag[1]
            case "@chance":
                return tag[1]
            case "@item":
                return tag[1];
                
            default: return tag[1]
        }
    }

    return (
        <p className={className}>
           {descriptionSection.map((part:any, index:number) => {
                return /@(\w+)/g.test(`${part}`) 
                    ? <span key={index} className="cursor-pointer text-indigo-400">
                        {getTagText(part)}
                    </span> 
                    : part;
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