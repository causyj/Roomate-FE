import { ANIMAL_DATA } from "../../../constants";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import BrokenHeart from "@mui/icons-material/HeartBrokenOutlined"
import { Avatar, Stack } from "@mui/material";
type GoodBadProps = {
    color : string | undefined;
    colorRGB: string | undefined;
}
export const GoodBad = ({color, colorRGB} : GoodBadProps) =>{
    const result = "rabbit";

    return (
        <div>
            <div className="flex flex-row justify-between mb-6">
                <div className="flex flex-col text-center items-center">
                    <div className={`w-40 mr-4 border-4 border-${color}-500 rounded-lg flex items-center justify-center p-1`}>
                        <img src={process.env.PUBLIC_URL + '/good.png'} alt="morning"  />
                    </div>
                    <div className="mr-3 mt-1 font-['700'] text-sm">이런 룸메와 잘 맞아요</div>
                    <div className="mr-4 font-['700'] flex flex-col justify-center items-start  ">
                        <div className="flex flex-row mt-4 items-center ">
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" sx={{bgcolor: colorRGB, width: 25, height: 25}} src={process.env.PUBLIC_URL + `/rabbit.png`} />
                        </Stack> 
                                <div className="ml-2">토끼</div>
                        </div>
                        <div className="flex flex-row  mt-1 items-center">
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" sx={{bgcolor:colorRGB, width: 25, height: 25}} src={process.env.PUBLIC_URL + `/rabbit.png`} />
                        </Stack> 
                            <div className="ml-2 ">북극곰</div>
                        </div>
                       
                    </div>
                </div>

                <div className="flex flex-col text-center items-center justify-center">
                      <div className={`w-40 mr-4 border-4 border-${color}-500 rounded-lg flex items-center justify-center p-1`}>
                        <img src={process.env.PUBLIC_URL + '/bad.png'} alt="morning"  />
                      </div>
                      <div className="text-center mt-1 mr-3 font-['700'] text-sm">이런 룸메와는 조금 힘들어요</div>
                      <div className="mr-4 font-['700'] flex flex-col justify-center items-start  ">
                          <div className="flex flex-row font-['700']  mt-4">
                          <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" sx={{bgcolor: colorRGB, width: 25, height: 25}} src={process.env.PUBLIC_URL + `/rabbit.png`} />
                        </Stack> 
                                <div className="ml-2">늑대</div>
                        </div>
                        <div className="flex flex-row text-center font-['700'] items-center justify-center mt-1">
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" sx={{bgcolor: colorRGB, width: 25, height: 25}} src={process.env.PUBLIC_URL + `/rabbit.png`} />
                        </Stack> 
                            <div className="ml-2 ">쿼카</div>
                        </div>
                   
                      </div>

                </div>
            </div>
        </div>
    )
}