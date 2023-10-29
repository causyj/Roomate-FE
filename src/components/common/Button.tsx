import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(MUIButton)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#27334B'),
    backgroundColor: '#27334B',
    fontSize: 24,
    '&:hover': {
      backgroundColor: '#354565',
    },
    padding: '8px 120px',
    
    fontFamily: 'Roboto',
    borderRadius : '10px'
    
  }));
export function Button() {
    return (
       <div>
            <ColorButton variant="contained">Text</ColorButton>
       </div>
    )
}