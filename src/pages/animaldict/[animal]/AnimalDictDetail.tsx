import { useParams } from "react-router-dom";
import { AnimalType } from "../../../interface/AnimalType";
import { AnimalDescription } from "../../../components/resultdetail/AnimalDescription";
import { ANIMAL_DATA, getAnimalColor } from "../../../constants";
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
    const color = getAnimalColor(animal as AnimalType['animal']);
    const animalKOR = ANIMAL_DATA[animal as AnimalType['animal']].type;
    return (
        <div>
            <div className={`text-4xl text-${color}-500 text-center  font-['800']`}>{animalKOR} 유형</div>
            <div>
                {/* <AnimalDescription type={animal}/>  */}
                {/* <TypeEmojif animalColor={animalColor}/> */}
            </div>
        </div>
    )
}