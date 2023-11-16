import { useParams } from "react-router-dom";
import { AnimalType } from "../../interface/AnimalType";
import { AnimalDescription } from "../typeresult/components/AnimalDescription";
import { TypeEmoji } from "../typeresult/components/TypeEmoji";
import { ANIMAL_DATA } from "../../constants";
type AnimalDictionaryParams = {
    animal : AnimalType['animal']
}
export const AnimalDictDetail = () => {
    
    const {animal} = useParams<AnimalDictionaryParams>()
    if (animal === undefined) throw Error(`${animal} is undefined`)
    const animalInfo = ANIMAL_DATA[animal];
    const animalColor = animalInfo.color; 
    return (
        <div>
            <div className="text-4xl text-primary-orange text-center  font-['800']">{animal} 유형</div>
            <div>
                <AnimalDescription type={animal}/> 
                <TypeEmoji animalColor={animalColor}/>
            </div>
        </div>
    )
}