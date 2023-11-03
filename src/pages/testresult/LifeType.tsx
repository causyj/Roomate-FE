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
        <TitleBox title={'나의 생활 유형 한 눈에 보기'}/>
        <TypeAtAGlance />
        </div>
    )
} 