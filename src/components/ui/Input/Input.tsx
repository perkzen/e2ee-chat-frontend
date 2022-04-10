import React, {forwardRef} from 'react';
import {BaseTextFieldProps, TextField} from '@mui/material';
import {FieldError} from 'react-hook-form';
import classes from './Input.module.scss';

interface InputProps extends BaseTextFieldProps {
    errors?: FieldError;
    bgWhite?: boolean;

}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({errors,bgWhite ,...props}, ref) => {
        return (
            <TextField
                className={bgWhite ? classes.InputBgWhite : classes.InputBgDark}
                error={errors !== undefined}
                helperText={errors?.message}
                variant={'outlined'}
                ref={ref}
                {...props}
            />
        );
    }
);

export default Input;
