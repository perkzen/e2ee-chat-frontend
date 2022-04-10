import React, { FC, useState } from 'react';
import classes from './RegisterTab.module.scss';
import { Button, Input } from '../index';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../store/app/hooks';
import { loginError, registerUser } from '../../../store/actions/authActions';
import { FormHelperText } from '@mui/material';
import { getElementError } from '@testing-library/react';
import { RootState, store } from '../../../store/app/store';

interface RegisterFormData {
  username: string;
  password1: string;
  password2: string;
}

const defaultValues: RegisterFormData = {
  username: '',
  password1: '',
  password2: '',
};

const RegisterTab: FC = () => {
  const dispatch = useAppDispatch();
  const { register, formState, handleSubmit } = useForm<RegisterFormData>({
    reValidateMode: 'onSubmit',
    defaultValues,
  });
  const err = useAppSelector((state) => state.auth.error);

  const { errors } = formState;

  const onSubmit = (data: RegisterFormData) => {
    dispatch(registerUser(data));
  };

  return (
    <form className={classes.Container} onSubmit={handleSubmit(onSubmit)}>
      <Input label={'Username'} bgWhite {...register('username')} />
      <Input
        label={'Password'}
        bgWhite
        {...register('password1')}
        type={'password'}
      />
      <Input
        label={'Confirm password'}
        {...register('password2')}
        type={'password'}
      />
      <FormHelperText className={classes.ErrorMessage}>{err}</FormHelperText>
      <Button text={'Register'} />
    </form>
  );
};

export default RegisterTab;
