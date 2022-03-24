import React, { FC } from 'react';
import { Button as MUIButton } from '@mui/material';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <MUIButton onClick={onClick} type={'submit'} variant={'contained'}>
      {text}
    </MUIButton>
  );
};

export default Button;
