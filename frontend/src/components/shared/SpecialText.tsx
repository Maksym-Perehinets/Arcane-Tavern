interface DescriptionText {
    description: string | object,
    className?: string
}

const SpecialText: React.FC<DescriptionText> = ({ description, className }) => {

    const regex = /\{([^}]+)\}/g;
    console.log(typeof description)
    const descriptionSection =  typeof description == "object" ? Object.values(description)[0].split(regex) : description.split(regex)

    return (
        <p className={className}>
            {descriptionSection.map((part:string, index:number) => {
                return /@(\w+)/g.test(`${part}`) ? <a href="" key={index}>{part}</a> : part;
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
//     case "@status":
//         return        

