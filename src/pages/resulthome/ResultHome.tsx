import { TypeEmoji } from "./components/TypeEmoji"
import { TitleBox } from "../../components/resultdetail/TitleBox"
import { ANIMAL_DATA, getAnimalColor, getAnimalColorRGB } from "../../constants"
import { Link } from "react-router-dom"
import { TypeAtAGlance } from "./components/TypeAtAGlance"
import { GoodBad } from "./components/GoodBad"
import { ResultDetail } from "./components/TypeDetail"
import { useEffect, useState } from "react"
import { AnimalType } from "../../interface/AnimalType"

//api : 닉네임 / 동물 유형 / 
export const ResultHome =() => {
  const [nickname, setNickname] = useState('');
  const [animal, setAnimal] = useState('');

  useEffect(()=>{
    const nicknameData = async () => {
      try {
        const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/nickname`, {
          method: 'GET',
          credentials: 'include',
        });
  
        if (response.ok) {
          const data = await response.json();
          setNickname(data); // 새로운 카드 정보 설정
          
        } else {
          console.error('Failed to fetch new card data : ', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch new card data : ', error);
      }
    };
    nicknameData();
  },[]);
  useEffect(()=>{
    const animalData = async () => {
      try {
        const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/animal`, {
          method: 'GET',
          credentials: 'include',
        });
  
        if (response.ok) {
          const data = await response.json();
          setAnimal(data); // 새로운 카드 정보 설정
          
        } else {
          console.error('Failed to nicknameData data : ', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Failed to nicknameData data : ', error);
      }
    };
    animalData();
  },[]);

    const result = "polarBear";
    const animalInfo = ANIMAL_DATA[result];
    const animalColor = animalInfo.color; //orange
    
   
          const animalIconStyles = {
          yellow: {
              color : 'border-yellow-500', 
          },
          rose: {
              color : 'border-rose-500', 
          },
          orange: {
              color : 'border-orange-500', 
          },
          green: {
              color : 'border-green-500', 
          },
          sky: {
              color : 'border-sky-500', 
          },
          purple: {
              color : 'border-purple-500', 
          },
          gray: {
              color : 'border-gray-500', 
          },
          pink: {
              color : 'border-pink-600', 
          },
      }
      const heartIconStyles = {
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
      const animalIconStyle = animalIconStyles[animalColor];
      const heartIconStyle = heartIconStyles[animalColor];
    const noise = 3;
    const temperature = 3;
    const outgoing = 1;
    const clean = 5;
    const sleep = 5;
    const animals = 'penguin'; 
    const color = getAnimalColor(animals);
    console.log(color);
    return (
        <div>
          {/* 로고 */}
           <div className="flex w-full items-center justify-center mb-4">
                    <img src={process.env.PUBLIC_URL + '/logo.png'}alt="logo"style={{width : '120px'}}/>
            </div>
            
            <div className="text-center text-2xl font-['800'] items-center justify-center">
                <div className='mb-4 mt-8'>{nickname}님의 생활 유형은</div>
                <span className={`text-4xl text-['900'] text-${color}-500`}  >둔감한 토끼</span> 
            </div>

            <div className="mt-6 flex justify-center mb-8 ">
            <img src={process.env.PUBLIC_URL + `/rabbit.png`} alt={`rabbit`} style={{width : '150px'}}/>
            </div>

            <div className="w-full mt-4 mb-8">
              <TypeEmoji/>
              </div>

           
            <TitleBox title={'나의 동물 유형 한줄 소개'} animalColor={color}/>
            <div className=" font-['600'] p-7 text-l text-primary-gray">
            상쾌한 아침을 맞이하는 아침형 인간으로, 혼자만의 시간을 중요하게 생각하고 겨울보단 여름을 좋아하는 성향이 있다.
            </div>
            <Link to='/animaldict'>
                <div className="w-full h-16 bg-gray-100 rounded-2xl mt-[-12px] mb-6">
                <div className="flex flex-col items-center justify-start p-3">
                        <div className="text-xs text-center">내 동물유형을 포함한 총 8가지의 동물유형이 있어요! </div>
                        <div className="flex flex-row">
                            <div className="mt-1 mr-3 font-['700'] text-m">다른 동물유형 구경하러 가기{'>'}</div>
                            <img src={process.env.PUBLIC_URL + '/zoo.png'} alt="roomie" width="35px"  />
                        </div>
                 </div>
                 </div>
            </Link>

            <TitleBox title={'김푸앙님의 생활 유형 한 눈에 보기'} animalColor={animalColor}/>
            <TypeAtAGlance
                animalColor={animalColor}
                noise={3}
                temperature={2}
                outgoing={1}
                clean={5}
                sleep={5}
            />

           <GoodBad/>
    
            
            <TitleBox title={'김푸앙님의 생활 유형 상세보기'} animalColor={animalColor}/>
            <ResultDetail />
            
            <Link to='/roommatelist'>
                <div className="w-full h-16 bg-gray-100 rounded-2xl mt-2">
                <div className="flex flex-col items-center justify-start p-3">
                        <div className="text-xs text-center">나와 성향이 맞는 룸메이트를 보러가세요~!</div>
                        <div className="flex flex-row">
                            <div className="mt-1 mr-3 font-['700'] text-m ">룸메이트 추천 받으러가기 {'>'}</div>
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