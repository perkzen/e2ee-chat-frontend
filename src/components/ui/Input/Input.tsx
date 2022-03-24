import React, { FC } from 'react';
import { BaseTextFieldProps, TextField } from '@mui/material';

interface InputProps extends BaseTextFieldProps {
  errorText?: string;
}

const Input: FC<InputProps> = ({ errorText, ...props }) => {
  return (
    <TextField
      error={errorText !== undefined}
      helperText={errorText}
      variant={'standard'}
      {...props}
    />
  );
};

export default Input;
