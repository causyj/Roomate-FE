import { AnimalDescription } from "../../components/resultdetail/AnimalDescription"
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import { TypeEmoji } from "./components/TypeEmoji"
import { TitleBox } from "../../components/resultdetail/TitleBox"
import { ANIMAL_DATA } from "../../constants"
import { tw } from '../../styles'
import { Link } from "react-router-dom"
import { TypeEmojif } from "../../components/resultdetail/TypeEmoji"
import { Divider } from "@mui/material"
import { GoToGroup } from "../roommatelist/components/GoToGroup"

  interface TypeAtAGlanceProps {
    noise: number;
    temperature: number;
    outgoing: number;
    clean: number;
    sleep: number;
    animalColor: 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'yellow' | 'rose' | 'sky';
  }
const TypeAtAGlance = ({ noise, temperature, outgoing, clean, sleep,animalColor }: TypeAtAGlanceProps) =>{
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
    const animalIconStyle = animalIconStyles[animalColor];
    const nosieCount = Array.from({ length: noise }, (_, index) => (
        <FavoriteOutlined key={index} />
      ));
      const EmptynosieCount = Array.from({ length: 5 - noise }, (_, index) => (
        <FavoriteBorder key={noise + index} />
      ));
      const temperatureCount = Array.from({ length: temperature }, (_, index) => (
        <FavoriteOutlined key={index} />
      ));
      const EmptytemperatureCount = Array.from({ length: 5 - temperature }, (_, index) => (
        <FavoriteBorder key={noise + index} />
      ));
      const outgoingCount = Array.from({ length: outgoing }, (_, index) => (
        <FavoriteOutlined key={index} />
      ));
      const EmptyoutgoingCount = Array.from({ length: 5 - outgoing }, (_, index) => (
        <FavoriteBorder key={noise + index} />
      ));
      const cleanCount = Array.from({ length: clean }, (_, index) => (
        <FavoriteOutlined key={index} />
      ));
      const EmptycleanCount = Array.from({ length: 5 - clean }, (_, index) => (
        <FavoriteBorder key={noise + index} />
      ));
      const sleepCount = Array.from({ length: sleep }, (_, index) => (
        <FavoriteOutlined key={index} />
      ));
      const EmptysleepCount = Array.from({ length: 5 - sleep }, (_, index) => (
        <FavoriteBorder key={noise + index} />
      ));

     
    return (
      <div className="flex flex-col items-center p-6">
          <div className="flex flex-row">
            <div className="flex flex-col mr-8 font-['700']">
                <div className="mb-1">생체 리듬</div>
                <div className="mb-1">흡연 여부</div>
                <div className="mb-1">소음 민감도</div>
                <div className="mb-1">온도 민감도</div>
                <div className="mb-1">외출/외박</div>
                <div className="mb-1">청결도</div>
                <div className="mb-1">잠버릇</div>
            </div>
            <div className="flex flex-col mb-1 font-['700'] text-primary-gray">
                <div className="mb-1">아침형</div>
                <div className="mb-1">비흡연자</div>
                <div className={`mb-1 ${animalIconStyle.color} flex flex-row`}>
                        {nosieCount}
                        {EmptynosieCount}
                 </div>
                 <div className={`mb-1 ${animalIconStyle.color} flex flex-row`}>
                        {temperatureCount}
                        {EmptytemperatureCount}
                 </div>
                 <div className={`mb-1 ${animalIconStyle.color} flex flex-row`}>
                        {outgoingCount}
                        {EmptyoutgoingCount}
                 </div>
                 <div className={`mb-1 ${animalIconStyle.color} flex flex-row`}>
                        {cleanCount}
                        {EmptycleanCount}
                 </div>
                 <div className={`mb-1 ${animalIconStyle.color} flex flex-row`}>
                        {sleepCount}
                        {EmptysleepCount}
                 </div>
                
            </div>
        </div>
      </div>
    )
}  
const ResultDetail = () => {
    return(

        <div className="p-8">
            <div className="font-['800'] mb-2">김푸앙님은 이런 생활 유형이에요!</div>
            <div className="font-['700'] text-primary-gray mb-8">: 밤 12시에 취침하고, 오전 8시에 일어나요.매일 한 번의 방청소를 통해 깨끗한 환경을 유지하며,
                    씻는 시간도 아침으로 일정하고 적절한 시간동안만 해요. 음식을 주로 방에서 섭취하지 않고, 비흡연자에요
                    도서관에서 주로 공부하고, 노트북을 자주 사용해요. 룸메이트와 친하게 지내고 싶어해요. 잠버릇이 심해요.
            </div>
            <div className="font-['800'] mb-2">김푸앙님이 원하는 룸메이트 스타일은?</div>
            <div className="font-['700'] text-primary-gray">: 밤 12시에 취침하고, 오전 8시에 일어났으면 좋겠어요.매일 한 번의 방청소를 통해 깨끗한 
                   환경을 유지하길 바라며, 씻는 시간도 아침으로 일정하고 적절한 시간동안만 했으면 좋겠어요. 음식을 방에서 섭취하지 않았으면 좋겠고, 비흡연자였으면 좋겠어요
                    도서관에서 주로 공부하고, 노트북 소음을 안 냈으면 좋겠어요.룸메이트도 저와 친하게 지냈으면 좋겠어요. 저는 잠귀가 어두워요
            </div>
        </div>
            
    )
}
const GoToRecommend = () => {
    return (
        <div>
            <Link to='/roommatelist'>
                <div className="w-full h-16 bg-gray-100 rounded-2xl mt-2">
                <div className="flex flex-col items-center justify-start p-3">
                        <div className="text-xs text-center">나와 성향이 맞는 룸메이트를 보러가세요~!</div>
                        <div className="flex flex-row">
                            <div className="mt-1 mr-9 font-['700'] text-m ">룸메이트 추천 받으러가기 {'>'}</div>
                            <img src={process.env.PUBLIC_URL + '/roommate.png'} alt="roomie" width="35px"  />
                        </div>
                 </div>
                 </div>
            </Link>
        </div>
        
    )
}

export const ResultHome =() => {
    const result = "rabbit";
    const animalInfo = ANIMAL_DATA[result];
    const animalColor = animalInfo.color; //orange
    
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
        const animalIconStyle = animalIconStyles[animalColor];
    const noise = 3;
    const temperature = 3;
    const outgoing = 1;
    const clean = 5;
    const sleep = 5
    return (
        <div>
           <div className="flex w-full items-center justify-center mb-4">
                    <img src={process.env.PUBLIC_URL + '/logo.png'}alt="logo"style={{width : '120px'}}/>
            </div>
            
            <div className="text-center text-2xl font-['800'] items-center justify-center">
                <div className='mb-4 mt-8'>김푸앙님의 생활 유형은</div>
                <span className={`text-4xl ${animalIconStyle.color}`}>둔감한 토끼</span> 
            </div>

            <div className="mt-6 flex justify-center mb-8 ">
            <img src={process.env.PUBLIC_URL + `/rabbit.png`} alt={`rabbit`} style={{width : '150px'}}/>
            </div>

            <div className="w-full mt-4 mb-8"><TypeEmoji/></div>

            <Divider/>

            <TitleBox title={'나의 동물유형 한줄 소개'} animalColor={animalColor}/>
            <div className=" font-['600'] p-7 text-l text-primary-gray">
            상쾌한 아침을 맞이하는 아침형 인간으로, 혼자만의 시간을 중요하게 생각하고 겨울보단 여름을 좋아하는 성향이 있다.
            </div>
            <Link to='/animaldict'>
                <div className="w-full h-16 bg-gray-100 rounded-2xl mt-[-12px] mb-6">
                <div className="flex flex-col items-center justify-start p-3">
                        <div className="text-xs text-center">내 동물유형을 포함한 총 8가지의 동물유형이 있어요! </div>
                        <div className="flex flex-row">
                            <div className="mt-1 mr-3 font-['700'] text-m ">다른 동물유형 구경하러 가기{'>'}</div>
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
            
            <TitleBox title={'김푸앙님 생활 유형 결과'} animalColor={animalColor}/>
            <ResultDetail />
            
            <TypeEmojif animalColor={animalColor}/>
            <div className="mt-6"> 
                < GoToRecommend/>
            </div>
            <div className="text-white">
                        <div>sfsdfs</div>
                        <div>sfsdfs</div>
                        <div>sfsdfs</div>
                        <div>sfsdfs</div>
                        <div>sfsdfs</div>
            </div>
        </div>
    )
} 