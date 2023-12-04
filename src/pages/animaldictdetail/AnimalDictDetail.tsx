import { useParams } from "react-router-dom";
import { AnimalType } from "../../interface/AnimalType";
import { AnimalDescription } from "../../components/resultdetail/AnimalDescription";
import { ANIMAL_DATA } from "../../constants";
type AnimalDictionaryParams = {
    animal : AnimalType['animal']
}
export const AnimalDictDetail = () => {
    const animalIconStyles = {
        yellow: {
            color : 'text-yellow-500', 
        },
        rose: {
            color : 'text-rose-500', 
        },
        orange: {
            color : 'text-orange-500', 
        },
        green: {
            color : 'text-green-500', 
        },
        sky: {
            color : 'text-sky-500', 
        },
        purple: {
            color : 'text-purple-500', 
        },
        gray: {
            color : 'text-gray-500', 
        },
        pink: {
            color : 'text-pink-600', 
        },
    }
    
    const {animal} = useParams<AnimalDictionaryParams>()
    if (animal === undefined) throw Error(`${animal} is undefined`)
    const animalInfo = ANIMAL_DATA[animal];
    const animalColor = animalInfo.color; 
    const animalIconStyle = animalIconStyles[animalColor];
    return (
        <div>
            <div className={`text-4xl ${animalIconStyle} text-center  font-['800']`}>{animal} 유형</div>
            <div>
                <AnimalDescription type={animal}/> 
                {/* <TypeEmojif animalColor={animalColor}/> */}
            </div>
        </div>
    )
}