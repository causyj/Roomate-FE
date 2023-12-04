import { useParams } from "react-router-dom"
import { getAnimalColor } from "../../../constants";
import { AnimalType } from "../../../interface/AnimalType";
import { useEffect, useState } from "react";
import { TypeEmojiNotUser } from "../components/TypeEmoji";

type ResultAnotherPageParams = {
    id : string;
}
interface DescriplDataProps{
    name : string; //animal
    sensitive : boolean; //false: 무던
    nickname: string;
    features : string;
    wellMatchedRoommates : string[];
    incompatibleRoommates : string[];
}  


export const ResultAnother = () => {
    //동물, 한줄소개 bad, good
    const [data, setData] = useState<DescriplDataProps | null>(null);
    useEffect(()=>{
        const DescripData = async () => {
          try {
            const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/style/animal/${id}`, {
              method: 'GET',
              credentials: 'include',
            });
      
            if (response.ok) {
              const data = await response.json();
              setData(data); // 새로운 카드 정보 설정
              
            } else {
              console.error('Failed to DesripData data : ', response.status, response.statusText);
            }
          } catch (error) {
            console.error('Failed to DesripData data : ', error);
          }
        };
        DescripData();
      },[]);

    const { id } = useParams<ResultAnotherPageParams>();
    const animal = data?.name;
    const color = getAnimalColor(animal as AnimalType['animal']);
    const adv = data?.sensitive == true ? "예민한" : "무던한"
    return (
        <div>
             <div className="flex w-full items-center justify-center mb-4">
                    <img src={process.env.PUBLIC_URL + '/logo.png'}alt="logo"style={{width : '120px'}}/>
            </div>

            <div className="text-center text-2xl font-['800'] items-center justify-center">
             <div className='mb-4 mt-8'>{id}님의 생활 유형은</div>
             <span className={`text-4xl text-['900'] text-${color}-500`}>{adv} {animal}</span> 
            </div>

            <div className="mt-6 flex justify-center mb-8 ">
            <img src={process.env.PUBLIC_URL + `/${animal}.png`} alt={`rabbit`} style={{width : '150px'}}/>
            </div>

            <div className="w-full mt-4 mb-8">
              {/* <TypeEmojiNotUser id={id}/> */}
            </div>
        </div>
    )
}