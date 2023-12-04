import { ANIMAL_DATA } from "../../../constants";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import BrokenHeart from "@mui/icons-material/HeartBrokenOutlined"
export const GoodBad = () =>{
    const result = "rabbit";
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
    return (
        <div>
            <div className="flex flex-row justify-between mb-6">
                <div className="flex flex-col text-center items-center">
                    <div className={`w-40 mr-4 border-4 ${animalIconStyle.color} rounded-lg flex items-center justify-center p-1`}>
                        <img src={process.env.PUBLIC_URL + '/good.png'} alt="morning"  />
                    </div>
                    <div className="mr-3 mt-1 font-['700'] text-sm">이런 룸메와 잘 맞아요</div>
                    <div className="mr-4 font-['700'] flex flex-col justify-center items-start  ">
                        <div className="flex flex-row mt-4">
                                <div className={`${heartIconStyle.color}`}><FavoriteOutlined/></div>
                                <div className="ml-2">토끼</div>
                        </div>
                        <div className="flex flex-row  mt-1">
                            <div className={`${heartIconStyle.color}`}><FavoriteOutlined/></div>
                            <div className="ml-2 ">북극곰</div>
                        </div>
                        {/* <div className="flex flex-row text-center items-center justify-center mt-1">
                            <div className={`${heartIconStyle.color}`}><FavoriteOutlined/></div>
                            <div className="ml-2">강아지</div>
                        </div> */}
                    </div>
                </div>

                <div className="flex flex-col text-center items-center justify-center">
                      <div className={`w-40 mr-4 border-4 ${animalIconStyle.color} rounded-lg flex items-center justify-center p-1`}>
                        <img src={process.env.PUBLIC_URL + '/bad.png'} alt="morning"  />
                      </div>
                      <div className="text-center mt-1 mr-3 font-['700'] text-sm">이런 룸메와는 조금 힘들어요</div>
                      <div className="mr-4 font-['700'] flex flex-col justify-center items-start  ">
                          <div className="flex flex-row font-['700']  mt-4">
                            <div className={`${heartIconStyle.color}`}><BrokenHeart/></div>
                                <div className="ml-2">늑대</div>
                        </div>
                        <div className="flex flex-row text-center font-['700'] items-center justify-center mt-1">
                            <div className={`${heartIconStyle.color}`}><BrokenHeart/></div>
                            <div className="ml-2 ">쿼카</div>
                        </div>
                   
                      </div>

                </div>
            </div>
        </div>
    )
}