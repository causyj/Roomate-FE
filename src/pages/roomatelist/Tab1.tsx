import { GoToGroup } from "./components/GoToGroup"
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import ResetIcon from '@mui/icons-material/RestartAltOutlined';
import { RoomateCard } from "./components/RoomateCard";
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
            <RoomateCard />
        </div>
    )
}