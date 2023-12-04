import { GoToGroup } from "./components/GoToGroup"
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ResetIcon from '@mui/icons-material/RestartAltOutlined';
const ColorFab = styled(MUIButton)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#27334B'),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#27334B',
    '&:hover': {
      backgroundColor: '#27334B',
    },
    width: '20px',
    height: '35px',
    borderRadius: '20px'
  }));
  interface CardDataProps {
    [key: string]: {
      nickname: string;
      animal: string;
      dorm:number;
      room:number;
      age: number;
      dept: string;
      stu_num:number;
      mbti: string;
      rhythm : string;
      smoke: string;
      noise: number;
      temperature:number;
      outgoing:number;
      clean:number;
      sleep:number;
  
      // 추가로 필요한 속성들을 여기에 추가할 수 있습니다.
    };
  }
export const Tab3 = () => {

const handleResetClick = () => {

}; 
    return (
        <div>
          <div className="flex flex-row justify-between items-center mt-4">
            <div className='flex flex-row items-center gap-4'>
              <div className="font-['700'] text-2xl ">📍 내가 찜한 룸메이트</div>
                  <button className="bg-primary-logo w-[45px] h-[45px] rounded-2xl" onClick={handleResetClick}>
                    <ResetIcon sx={{width:'30px', height:'30px', color:'white'}} />
                  </button>
              </div>
           </div>
          <GoToGroup />
        </div>
    )
}
