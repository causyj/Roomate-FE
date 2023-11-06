import { useParams } from "react-router-dom";
import { AnimalType } from "../../interface/AnimalType";
import { AnimalDescription } from "../typeresult/components/AnimalDescription";
import { TypeEmoji } from "../typeresult/components/TypeEmoji";
type AnimalDictionaryParams = {
    animal : AnimalType['animalKor']
}
export const AnimalDictDetail = () => {
    const {animal} = useParams<AnimalDictionaryParams>()
    if (animal === undefined) throw Error(`${animal} is undefined`)
    return (
        <div>
            <div className="text-4xl text-primary-orange text-center  font-['800']">{animal} 유형</div>
            <div>
                <AnimalDescription /> 
                <TypeEmoji />
            </div>
        </div>
    )
}