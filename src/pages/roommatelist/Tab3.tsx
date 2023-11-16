import { GoToGroup } from "./components/GoToGroup"
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ResetIcon from '@mui/icons-material/RestartAltOutlined';
import { RoommateCard1 } from "./components/RoommateCard1";
import { Card73 } from "./components/Card73";
import { Card73like } from "./components/Card73like";
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
export const Tab3 = () => {
    return (
        <div>
            <GoToGroup />
            <div className="flex flex-row justify-between items-center mt-4">
                <div className="font-['700'] text-2xl">📍 내가 찜한 룸메이트</div>
                <ColorFab>
                 <ResetIcon />
                </ColorFab>
            </div>
            <div className="flex flex-row mt-4 gap-2">
                <Card73like/>
            </div>
        </div>
    )
}