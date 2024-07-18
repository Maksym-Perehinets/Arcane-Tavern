
interface DescriptionText {
    description: string
}

const SpecialText: React.FC<DescriptionText> = ({ description }) => {

    const regex = /\{([^}]+)\}/g;
    const descriptionSection = description.match(regex)?.map(match => match.replace(/[{}]/g, ""))[0];
    const matches =  descriptionSection?.split(" ")[0]

    if (matches) {
        switch (matches){
            case "@spell": 
                return 
            case "@creature":
                return
            case "@hit":
                return
            case "@dice":
                return
            case "@damage":
                return <p></p>
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

        console.log(matches.split(" ")[0])
        return matches
    }

    return (
        description
    )
}

export default SpecialText




