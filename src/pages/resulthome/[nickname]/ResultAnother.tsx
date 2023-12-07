import { Link, useParams } from "react-router-dom"
import { ANIMAL_DATA, getAnimalColor, getAnimalColorRGB } from "../../../constants";
import { AnimalType } from "../../../interface/AnimalType";
import { useEffect, useState } from "react";
import { TypeEmojiNotUser } from "../components/TypeEmoji";
import { TitleBox } from "../../../components/resultdetail/TitleBox";
import { TypeAtAGlance, TypeAtAGlanceNotUser } from "../components/TypeAtAGlance";
import { GoodBad } from "../components/GoodBad";
import { ResultDetail, ResultDetailAnother } from "../components/TypeDetail";

type ResultAnotherPageParams = {
  nickname : string ;
}
interface DescriplDataProps{
    name : string; //animal
    sensitive : boolean; //false: 무던
    features : string;
    wellMatchedRoommates : Array<AnimalType['animal']>;
    incompatibleRoommates : Array<AnimalType['animal']>;
}  


export const ResultAnother = () => {
  const { nickname } = useParams<ResultAnotherPageParams>();
    //동물, 한줄소개 bad, good
    const [descripData, setDescripData] = useState<DescriplDataProps | null>(null);
    useEffect(()=>{
      const DescripData = async () => {
        try {
          const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/style/animal/${nickname}`, {
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

    
    const animal = descripData?.name as keyof typeof ANIMAL_DATA;
    const color = getAnimalColor(animal as AnimalType['animal']);
    const colorRGB = getAnimalColorRGB(animal as AnimalType['animal']);
    const adv = descripData?.sensitive == true ? "예민한" : "무던한"
    const animalKOR = animal ? ANIMAL_DATA[animal].type : '';
    return (
        <div>
             <div className="flex w-full items-center justify-center mb-4">
                    <img src={process.env.PUBLIC_URL + '/logo.png'}alt="logo"style={{width : '120px'}}/>
            </div>

            <div className="text-center text-2xl font-['800'] items-center justify-center">
             <div className='mb-4 mt-8'>{nickname}님의 생활 유형은</div>
             <span className={`text-4xl text-['900'] text-${color}-500`}>{adv} {animalKOR}</span> 
            </div>

            <div className="mt-6 flex justify-center mb-8 ">
            <img src={process.env.PUBLIC_URL + `/${animal}.png`} alt={`rabbit`} style={{width : '150px'}}/>
            </div>


            <div className="w-full mt-4 mb-8">
              <TypeEmojiNotUser nickname={nickname}/>
              </div>

              <TitleBox title={`${nickname}님의 동물 유형 한줄 소개`} animalColor={color}/>
            {descripData && 
            <div className=" font-['600'] p-7 text-l text-primary-gray">
               {descripData.features}
            </div>}

            <Link to='/animaldict'>
                <div className="w-full h-16 bg-gray-100 rounded-2xl mt-[-12px] mb-6">
                <div className="flex flex-col items-center justify-start p-3">
                        <div className="text-xs text-center">{nickname}님의 동물유형을 포함한 총 8가지의 동물유형이 있어요! </div>
                        <div className="flex flex-row">
                            <div className="mt-1 mr-3 font-['700'] text-m">다른 동물유형 구경하러 가기{'>'}</div>
                            <img src={process.env.PUBLIC_URL + '/zoo.png'} alt="roomie" width="35px"  />
                        </div>
                 </div>
                 </div>
            </Link>
            
            <TitleBox title={`${nickname}님의 생활 유형 한 눈에 보기`} animalColor={color}/>
            <TypeAtAGlanceNotUser color={color} nickname={nickname}/>


            {descripData && 
             <GoodBad
             linecolor={color} 
              colorRGB={colorRGB} 
              good1={descripData.wellMatchedRoommates[0]} 
              good2={descripData.wellMatchedRoommates[1]}
              bad1={descripData.incompatibleRoommates[0]}
              bad2={descripData.incompatibleRoommates[1]}
              />
            }

        <TitleBox title={`${nickname}님의 생활 유형 상세보기`} animalColor={color}/>
            <ResultDetailAnother nickname={nickname}/>
          

            <Link to='/roommatelist'>
                <div className="w-full h-16 bg-gray-100 rounded-2xl mt-2">
                <div className="flex flex-col items-center justify-start p-3">
                        <div className="text-xs text-center">다른 룸메이트도 둘러보세요!</div>
                        <div className="flex flex-row">
                            <div className="mt-1 mr-3 font-['700'] text-m ">룸메이트 찾으러 가기{'>'}</div>
                            <img src={process.env.PUBLIC_URL + '/roommate.png'} alt="roomie" width="35px"  />
                        </div>
                 </div>
                 </div>
            </Link>

            <div className="text-white">
                        <div>sfsdfs</div>
                        <div>sfsdfs</div>
                        <div>sfsdfs</div>
                        
                        
                     
            </div>
        </div>
    )
}