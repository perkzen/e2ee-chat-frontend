import React, { FC } from 'react';
import classes from './RegisterTab.module.scss';
import { Button, Input } from '../index';
import { useForm } from 'react-hook-form';

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
  const { register, formState, handleSubmit } = useForm<RegisterFormData>({
    reValidateMode: 'onSubmit',
    defaultValues,
  });

  const { errors } = formState;

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <form className={classes.Container} onSubmit={handleSubmit(onSubmit)}>
      <Input label={'Username'} {...register('username')} />
      <Input label={'Password'} {...register('password1')} type={'password'} />
      <Input
        label={'Confirm password'}
        {...register('password2')}
        type={'password'}
      />
      <Button text={'Register'} />
    </form>
  );
};

export default RegisterTab;
