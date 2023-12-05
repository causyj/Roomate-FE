import { useParams } from "react-router-dom";
import { AnimalType } from "../../../interface/AnimalType";
import { AnimalDescription } from "../../../components/resultdetail/AnimalDescription";
import { ANIMAL_DATA, getAnimalColor, getAnimalColorRGB } from "../../../constants";
import { TitleBox } from "../../../components/resultdetail/TitleBox";
import { useEffect, useState } from "react";
import { GoodBad } from "../../resulthome/components/GoodBad";
type AnimalDictionaryParams = {
    animal : AnimalType['animal']
}
interface DescriplDataProps{
    features : string;
    wellMatchedRoommates :  Array<AnimalType['animal']>;
    incompatibleRoommates :  Array<AnimalType['animal']>;
    
  }
export const AnimalDictDetail = () => {
    const [descripData, setDescripData] = useState<DescriplDataProps | null>(null);
    useEffect(()=>{
        const DescripData = async () => {
          try {
            const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/style/animal`, {
              method: 'GET',
              credentials: 'include',
            });
      
            if (response.ok) {
              const data = await response.json();
              setDescripData(data); // 새로운 카드 정보 설정
              
            } else {
              console.error('Failed to DesripData data : ', response.status, response.statusText);
            }
          } catch (error) {
            console.error('Failed to DesripData data : ', error);
          }
        };
        DescripData();
      },[]);
    const {animal} = useParams<AnimalDictionaryParams>()
    const color = getAnimalColor(animal as AnimalType['animal']);
    const colorRGB = getAnimalColorRGB(animal as AnimalType['animal']);
    const animalKOR = ANIMAL_DATA[animal as AnimalType['animal']].type;
    return (
        <div className="w-full">
              <div className="flex w-full items-center justify-center mb-4">
                    <img src={process.env.PUBLIC_URL + '/logo.png'}alt="logo"style={{width : '120px'}}/>
            </div>
            <div className={`text-4xl text-${color}-500 text-center  font-['800'] mt-8`}>{animalKOR} 유형</div>
            

            <div className="mt-6 flex justify-center mb-8 ">
            <img src={process.env.PUBLIC_URL + `/${animal}.png`} alt={`rabbit`} style={{width : '150px'}}/>
            </div>

            <TitleBox title={`${animalKOR} 유형 한 줄 소개`} animalColor={color}/>
            <div className=" font-['600'] p-7 text-l text-primary-gray">
              {descripData?.features}
            </div>

            <GoodBad 
             linecolor={color} 
              colorRGB={colorRGB} 
              good1={descripData?.wellMatchedRoommates[0]} 
              good2={descripData?.wellMatchedRoommates[1]}
              bad1={descripData?.incompatibleRoommates[0]}
              bad2={descripData?.incompatibleRoommates[1]}
              />

          
        </div>
    )
}