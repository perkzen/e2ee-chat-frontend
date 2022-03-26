import React, { forwardRef } from 'react';
import { BaseTextFieldProps, TextField } from '@mui/material';

interface InputProps extends BaseTextFieldProps {
  errorText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorText, ...props }, ref) => {
    return (
      <TextField
        error={errorText !== undefined}
        helperText={errorText}
        variant={'outlined'}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
