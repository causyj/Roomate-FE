import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import BrokenHeart from "@mui/icons-material/HeartBrokenOutlined"
import { TitleBox } from "./TitleBox"
export const TypeEmoji=() => {
    return(
        <div>
            <TitleBox title={'모글리님의 라이프 스타일'}/>
            <div className="flex flex-row p-4 text-center items-center justify-center">
                <div className="flex flex-col text-center mr-8 ">
                    <img src={process.env.PUBLIC_URL + '/morning.png'} alt="morning"  />
                    <div className="font-['700'] text-primary-gray">아침형</div>
                </div>
                <div className="flex flex-col contain mr-8 ">
                    <img src={process.env.PUBLIC_URL + '/nosmoking.png'} alt="morning"  />
                    <div className="font-['700'] text-primary-gray">비흡연</div>
                </div>
                <div className="flex flex-col contain ">
                    <img src={process.env.PUBLIC_URL + '/homelover.png'} alt="morning"  />
                    <div className="font-['700'] text-primary-gray">집순이</div>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col text-center">
                    <div className="w-40 mt-4 mr-4 border-4 border-primary-orange rounded-lg flex items-center justify-center p-1 ">
                        <img src={process.env.PUBLIC_URL + '/good.png'} alt="morning"  />
                    </div>
                    <div className="mr-3 mt-1 font-['700'] text-sm">이런 룸메와 잘 맞아요</div>
                    <div className="mr-4 font-['700']">
                        <div className="flex flex-row text-center  items-center justify-center mt-4">
                                <div className=" text-primary-orange"><FavoriteOutlined/></div>
                                <div className="ml-2">고릴라</div>
                        </div>
                        <div className="flex flex-row text-center items-center justify-center mt-1">
                            <div className=" text-primary-orange"><FavoriteOutlined/></div>
                            <div className="ml-2 ">고양이</div>
                        </div>
                        <div className="flex flex-row text-center items-center justify-center mt-1">
                            <div className=" text-primary-orange"><FavoriteOutlined/></div>
                            <div className="ml-2">강아지</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="w-40 mt-4 border-4 border-primary-orange rounded-lg flex items-center justify-center p-1 ">
                        <img src={process.env.PUBLIC_URL + '/bad.png'} alt="morning"  />
                    </div>
                    <div className="text-center mt-1 font-['700'] text-sm">이런 룸메와는 조금 힘들어요</div>
                    <div className="flex flex-row text-center font-['700'] items-center justify-center mt-4">
                    <div className=" text-primary-orange"><BrokenHeart/></div>
                        <div className="ml-2">고릴라</div>
                    </div>
                    <div className="flex flex-row text-center font-['700'] items-center justify-center mt-1">
                        <div className=" text-primary-orange"><BrokenHeart/></div>
                        <div className="ml-2 ">고양이</div>
                    </div>
                    <div className="flex flex-row text-center font-['700'] items-center justify-center mt-1">
                    <div className=" text-primary-orange"><BrokenHeart/></div>
                        <div className="ml-2">강아지</div>
                    </div>
                </div>
            </div>
        </div>
    )
}