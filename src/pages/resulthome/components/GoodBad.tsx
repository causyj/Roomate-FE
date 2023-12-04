import { ANIMAL_DATA, getAnimalColor, getAnimalColorRGB } from "../../../constants";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import BrokenHeart from "@mui/icons-material/HeartBrokenOutlined"
import { Avatar, Stack } from "@mui/material";
import { AnimalType } from "../../../interface/AnimalType";
type GoodBadProps = {
    linecolor : string | undefined;
    colorRGB: string | undefined;
    good1 : string;
    good2 : string;
    bad1 : string;
    bad2 : string;
}

// const color = getAnimalColor(animalData?.animal as AnimalType['animal']);
export const GoodBad = ({linecolor, colorRGB, good1, good2, bad1, bad2} : GoodBadProps) =>{
    const good1bg = getAnimalColorRGB(good1  as AnimalType['animal']);
    const good2bg = getAnimalColorRGB(good2  as AnimalType['animal']);
    const bad1bg = getAnimalColorRGB(bad1  as AnimalType['animal']);
    const bad2bg = getAnimalColorRGB(bad2  as AnimalType['animal']);

    return (
        <div>
            <div className="flex flex-row justify-between mb-6">
                <div className="flex flex-col text-center items-center">
                    <div className={`w-40 mr-4 border-4 border-${linecolor}-500 rounded-lg flex items-center justify-center p-1`}>
                        <img src={process.env.PUBLIC_URL + '/good.png'} alt="morning"  />
                    </div>
                    <div className="mr-3 mt-1 font-['700'] text-sm">이런 룸메와 잘 맞아요</div>
                    <div className="mr-4 font-['700'] flex flex-col justify-center items-start  ">
                        <div className="flex flex-row mt-4 items-center ">
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" sx={{bgcolor: good1bg, width: 25, height: 25}} src={process.env.PUBLIC_URL + `/${good1}.png`} />
                        </Stack> 
                                <div className="ml-2">{good1}</div>
                        </div>
                        <div className="flex flex-row  mt-1 items-center">
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" sx={{bgcolor : good2bg, width: 25, height: 25}} src={process.env.PUBLIC_URL + `/${good2}.png`} />
                        </Stack> 
                            <div className="ml-2 ">{good2}</div>
                        </div>
                       
                    </div>
                </div>

                <div className="flex flex-col text-center items-center justify-center">
                      <div className={`w-40 mr-4 border-4 border-${linecolor}-500 rounded-lg flex items-center justify-center p-1`}>
                        <img src={process.env.PUBLIC_URL + '/bad.png'} alt="morning"  />
                      </div>
                      <div className="text-center mt-1 mr-3 font-['700'] text-sm">이런 룸메와는 조금 힘들어요</div>
                      <div className="mr-4 font-['700'] flex flex-col justify-center items-start  ">
                          <div className="flex flex-row font-['700']  mt-4">
                          <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" sx={{bgcolor: bad1bg, width: 25, height: 25}} src={process.env.PUBLIC_URL + `/${bad1}.png`} />
                        </Stack> 
                                <div className="ml-2">{bad1}</div>
                        </div>
                        <div className="flex flex-row text-center font-['700'] items-center justify-center mt-1">
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" sx={{bgcolor: bad2bg, width: 25, height: 25}} src={process.env.PUBLIC_URL + `/${bad2}.png`} />
                        </Stack> 
                            <div className="ml-2 ">{bad2}</div>
                        </div>
                   
                      </div>

                </div>
            </div>
        </div>
    )
}