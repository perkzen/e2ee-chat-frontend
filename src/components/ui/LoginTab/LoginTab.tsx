import React, { FC } from 'react';
import classes from './LoginTab.module.scss';
import { Button, Input } from '../index';
import { useForm } from 'react-hook-form';

interface LoginFormData {
  username: string;
  password: string;
}

const defaultValues: LoginFormData = {
  username: '',
  password: '',
};

const LoginTab: FC = () => {
  const { register, formState, handleSubmit } = useForm<LoginFormData>({
    reValidateMode: 'onSubmit',
    defaultValues,
  });

  const { errors } = formState;

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form className={classes.Container} onSubmit={handleSubmit(onSubmit)}>
      <Input label={'Username'} {...register('username')} />
      <Input label={'Password'} {...register('password')} type={'password'} />
      <Button text={'Login'} onClick={() => console.log('test')} />
    </form>
  );
};

export default LoginTab;
