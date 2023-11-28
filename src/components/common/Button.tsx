import React from 'react';
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface ColorButtonProps extends ButtonProps {

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

const StyledColorButton = styled(MUIButton)<ColorButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#27334B'),
  backgroundColor: '#27334B',
  fontSize: 20,
  '&:hover': {
    backgroundColor: '#27334B',
  },
  padding: '8px',
  width: '95%',
  fontFamily: 'Pretendard',
  borderRadius: '10px',
}));

export const Button: React.FC<ColorButtonProps> = ({ onClick, ...rest }) => {
  return (
    <StyledColorButton variant="contained" onClick={onClick} {...rest}>
      {rest.children}
    </StyledColorButton>
  );
};

  