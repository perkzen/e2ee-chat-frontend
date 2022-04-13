import React, { FC, useEffect } from 'react';
import classes from './LoginTab.module.scss';
import { Button, Input } from '../index';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../store/app/hooks';
import { login } from '../../../store/actions/authActions';
import { Typography } from '@mui/material';
import { removeError } from '../../../store/features/authSlice';

interface LoginFormData {
  username: string;
  password: string;
}

const defaultValues: LoginFormData = {
  username: '',
  password: '',
};

const LoginTab: FC = () => {
  const dispatch = useAppDispatch();
  const { register, formState, handleSubmit } = useForm<LoginFormData>({
    reValidateMode: 'onSubmit',
    defaultValues,
  });
  const err = useAppSelector((state) => state.auth.error);

  const { errors } = formState;

  const onSubmit = (data: LoginFormData) => {
    dispatch(login(data));
  };

  useEffect(() => {
    return () => {
      dispatch(removeError());
    };
  }, []);

  return (
    <form className={classes.Container} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={classes.ErrorMessage}>{err ? err : ''}</Typography>
      <Input
        label={'Username'}
        {...register('username', { required: 'This field is required!' })}
        errors={errors.username}
      />
      <Input
        label={'Password'}
        {...register('password', { required: 'This field is required!' })}
        type={'password'}
        errors={errors.password}
      />
      <Button text={'Login'} />
    </form>
  );
};

export default LoginTab;
