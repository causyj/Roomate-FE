import { AnimalDescription } from "./components/AnimalDescription"
import { TitleBox } from "./components/TitleBox"
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
const TypeAtAGlance = () =>{
    return (
      <div className="flex flex-col p-8">
          <div className="flex flex-row">
            <div className="flex flex-col mr-8 font-['700']">
                <div className="mb-1">생체 리듬</div>
                <div className="mb-1">흡연 여부</div>
                <div className="mb-1">소음 민감도</div>
                <div className="mb-1">온도 민감도</div>
                <div className="mb-1">외출/외박</div>
                <div className="mb-1">청결도</div>
                <div className="mb-1">잠버릇</div>
                <div className="mb-1">원하는 룸메이트</div>
            </div>
            <div className="flex flex-col mb-1 font-['700'] text-primary-gray">
                <div className="mb-1">아침형</div>
                <div className="mb-1">비흡연자</div>
                <div className="mb-1 text-primary-orange"> 
                    <FavoriteOutlined/><FavoriteOutlined/><FavoriteOutlined/><FavoriteOutlined/><FavoriteOutlined/>
                </div>
                <div className="mb-1 text-primary-orange"> 
                    <FavoriteBorder/><FavoriteOutlined/><FavoriteOutlined/><FavoriteOutlined/><FavoriteOutlined/>
                </div>
            </div>
        </div>
        <div className="font-['700'] text-primary-gray">:  위생개념 있고, 기숙사에 잘 있지 않으며, 도벽이 없고, 개념이 있는 사람.</div>
      </div>
    )
}  
const ResultDetail = () => {
    return(
        <div className="p-8">
            <div className="font-['800'] mb-2">모글리님은 이런 생활 유형이에요!</div>
            <div className="font-['700'] text-primary-gray mb-8">: 밤 12시에 취침하고, 오전 8시에 일어나요.매주 한 번의 방청소를 통해 깨끗한 환경을 유지하며,
                    씻는 시간도 아침으로 일정하고 적절한 시간동안만 해요. 음식을 주로 방에서 섭취하며, 비흡연자에요
                    도서관에서 주로 공부하고, 노트북을 자주 사용해요 .룸메이트와 친하게 지내고 싶어해요. 잠버릇은 좋아요 
            </div>
            <div className="font-['800'] mb-2">모글리님이 원하는 룸메이트 스타일은?</div>
            <div className="font-['700'] text-primary-gray">: 밤 12시에 취침하고, 오전 8시에 일어나요.매주 한 번의 방청소를 통해 깨끗한 환경을 유지하며,
                    씻는 시간도 아침으로 일정하고 적절한 시간동안만 해요. 음식을 주로 방에서 섭취하며, 비흡연자에요
                    도서관에서 주로 공부하고, 노트북을 자주 사용해요 .룸메이트와 친하게 지내고 싶어해요. 잠버릇은 좋아요 
            </div>
        </div>
            
    )
}

export const LifeType =() => {
    return (
        <div>
            <div className="text-center text-2xl font-['800']">
                <div className='mb-4 mt-4'>모글리님의 생활 유형은, </div>
                <span className='text-5xl text-primary-orange'>원숭이</span> 입니다.
            </div>
         <AnimalDescription />
        <div className=" flex justify-center ">
            <img src={process.env.PUBLIC_URL + '/scroll.png'} alt="scroll"  />
        </div>
        <div className="mt-12"> <TitleBox title={'모글리님의 생활 유형 한 눈에 보기'}/></div>
        <TypeAtAGlance />
        <TitleBox title={'모글리님 생활 유형 결과'}/>
        <ResultDetail />
        </div>
    )
} 