import React, { FC, useEffect } from 'react';
import classes from './RegisterTab.module.scss';
import { Button, Input } from '../index';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../store/app/hooks';
import { registerUser } from '../../../store/actions/authActions';
import { Typography } from '@mui/material';
import { removeError } from '../../../store/features/authSlice';

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
  const { register, formState, handleSubmit, reset } =
    useForm<RegisterFormData>({
      reValidateMode: 'onSubmit',
      defaultValues,
    });
  const err = useAppSelector((state) => state.auth.error);

  const { errors } = formState;

  const onSubmit = (data: RegisterFormData) => {
    dispatch(registerUser(data));
    reset();
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
        {...register('password1', { required: 'This field is required!' })}
        type={'password'}
        errors={errors.password1}
      />
      <Input
        label={'Confirm password'}
        {...register('password2', { required: 'This field is required!' })}
        type={'password'}
        errors={errors.password2}
      />
      <Button text={'Register'} />
    </form>
  );
};

export default RegisterTab;
