import React, { FC } from 'react';
import classes from './LoginTab.module.scss';
import { Button, Input } from '../index';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store/app/hooks';
import { login } from '../../../store/actions/authActions';

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

  const { errors } = formState;

  const onSubmit = (data: LoginFormData) => {
    dispatch(login(data));
  };

  return (
    <form className={classes.Container} onSubmit={handleSubmit(onSubmit)}>
      <Input label={'Username'} {...register('username')}/>
      <Input label={'Password'} {...register('password')} type={'password'} />
      <Button text={'Login'} />
    </form>
  );
};

export default LoginTab;
