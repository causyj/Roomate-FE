import { GoToGroup } from "./components/GoToGroup"
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ResetIcon from '@mui/icons-material/RestartAltOutlined';
import { RoommateCard1 } from "./components/RoommateCard1";
import { Card73 } from "./components/Card73";
import { Card43 } from "./components/Card43";

const ColorFab = styled(MUIButton)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#27334B'),
    display : 'flex',
    alignItems : 'center',
    backgroundColor: '#27334B',
    '&:hover': {
      backgroundColor: '#27334B',
    },
    width: '20px',  
    height : '35px',
    borderRadius : '20px'
  }));
export const Tab1 = () => {
    return (
        <div>
            <GoToGroup />
            <div className="flex flex-row justify-between items-center mt-4">
                <div className="font-['700'] text-2xl">📍 추천 룸메이트</div>
                <ColorFab>
                 <ResetIcon />
                </ColorFab>
            </div>
            <div className="flex flex-row w-[300px] overflow-scroll overflow-x-auto p-2 mt-4 gap-2 ">
                <Card73 />
                <Card43 />
                <RoommateCard1 name="모글리" dept={"영어학과"} year={23} mbti={"INSJ"} age={"21"} animal={'/cat.png'} color={'purple'}/>
                <RoommateCard1 name="깐풍기" dept={"정치외교학과"} year={21} mbti={"INFP"} age={"21"} animal={'/polarBear.png'} color={'pink'}/>
                <RoommateCard1 name="울랄라" dept={"간호학부"} year={19} mbti={"ESTJ"} age={"비공개"} animal={'/rabbit.png'} color={'orange'}/>
                <RoommateCard1 name="팔보채" dept={"산업보안학과"} year={21} mbti={"ENFP"} age={"22"} animal={"/cat.png"} color={'purple'}/>
            </div>
        </div>
    )
}