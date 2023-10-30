import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(MUIButton)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#27334B'),
    backgroundColor: '#27334B',
    fontSize: 22,
    '&:hover': {
      backgroundColor: '#27334B',
    },
    padding: '8px',
    width: '300px',  
    fontFamily: 'Pretendard',
    borderRadius : '10px'
  }));
export function Button({ buttonText }: { buttonText: string }) {
    return (
        <ColorButton variant="contained">{buttonText}</ColorButton>
    )
}