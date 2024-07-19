interface DescriptionText {
    description: string | object,
    className?: string
}

const SpecialText: React.FC<DescriptionText> = ({ description, className }) => {

    const regex = /\{([^}]+)\}/g;
    const descriptionSection =  typeof description == "object" ? Object.values(description)[0].split(regex) : description.split(regex)

    const clickOnTag = (tag: string) => {
        switch (tag.split(" ")[0]) {
            case "@spell":
                return
            case "@creature":
                return
            case "@hit":
                return
            case "@dice":
                return 
            case "@damage":
                return 
            case "@condition":
                return
            case "@sense":
                return
            case "@scaledamage":
                return
            case "@chance":
                return
            case "@i":
                return
        }
    }

    return (
        <p className={className}>
           {descriptionSection.map((part:string, index:number) => {
                return /@(\w+)/g.test(`${part}`) 
                    ? <span onMouseOver={() => clickOnTag(part)} key={index} className="cursor-pointer">
                        {part}
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

