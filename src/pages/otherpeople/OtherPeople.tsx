import { AnimalDescription } from "../../components/resultdetail/AnimalDescription"
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import { TypeEmoji } from "../../components/resultdetail/TypeEmoji"
import { TitleBox } from "../../components/resultdetail/TitleBox"
import { ANIMAL_DATA } from "../../constants"
import { tw } from '../../styles'
import { Link } from "react-router-dom"
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
            <div className="font-['800'] mb-2">김애옹님은 이런 생활 유형이에요!</div>
            <div className="font-['700'] text-primary-gray mb-8">: 밤 12시 쯤에 취침하고, 오전 8~9시 쯤에 일어나요. 쓰레기가 적당히 쌓이면 버리는 편이에요. 음식은 가끔 방에서 먹으며, 비흡연자에요. 주로 도서관에서 공부하고, 노트북을 거의 사용하지 않아요. 룸메이트와 적당한 거리를 두고 지내고 싶어요. 잠버릇은 거의 없는 편이에요.
            </div>
            <div className="font-['800'] mb-2">김애옹님이 원하는 룸메이트 스타일은?</div>
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
                        
                        <div className="flex flex-row">
                            <div className="mt-1 mr-9 font-['700'] text-m ">룸메이트 추천 홈으로 돌아가기</div>
                            <img src={process.env.PUBLIC_URL + '/roommate.png'} alt="roomie" width="35px"  />
                        </div>
                 </div>
                 </div>
            </Link>
        </div>
        
    )
}

export const OtherPeople =() => {
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

    return (
        <div>
            <div className="text-center text-2xl font-['800'] items-center justify-center">
                <div className='mb-4 mt-4'>김애옹님의 생활 유형은</div>
                <span className={`text-4xl ${animalIconStyle.color}`}>예민한 토끼</span> 
            </div>
            <div>
            
            <AnimalDescription type={result} />
        </div>
    
            <TitleBox title={'김애옹님의 생활 유형 한 눈에 보기'} animalColor={animalColor}/>
            <TypeAtAGlance 
                animalColor={animalColor}
                noise={4}
                temperature={4}
                outgoing={3}
                clean={3}
                sleep={1}
                />
            
            <TitleBox title={'김애옹님 생활 유형 결과'} animalColor={animalColor}/>
            <ResultDetail />
            
            <TypeEmoji animalColor={animalColor}/>
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