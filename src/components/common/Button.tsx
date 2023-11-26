import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import "../../index.css"

// const ColorButton = styled(MUIButton)<ButtonProps>(({ theme }) => ({
//     color: theme.palette.getContrastText('#27334B'),
//     backgroundColor: '#27334B',
//     fontSize: 20,
//     '&:hover': {
//       backgroundColor: '#27334B',
//     },
//     padding: '8px',
//     width: '95%',  
//     fontFamily: "Pretendard",
//     borderRadius : '10px'
//   }));
// export function Button({ buttonText }: { buttonText: string }) {
//     return (
//         <ColorButton variant="contained">{buttonText}</ColorButton>
//     )
// }
export function Button({ buttonText }: { buttonText: string }) {
  return (
      <button className="text-[22px] font-['400'] bg-primary-logo w-[95%]  p-[8px] h-14 rounded-xl hover:bg-primary-logo text-white flex justify-center items-center">{buttonText}</button>
  )
}