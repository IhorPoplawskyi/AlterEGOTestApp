import style from './LoginForm.module.scss'

import { FC, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { ICredentials } from '../../types/index'

import { useForm, SubmitHandler } from 'react-hook-form'

import { TextField, Button, Alert } from '@mui/material'

import { useAppDispatch, useAppSelector } from '../../store/store'

import { signIn, setShowSignIn } from '../../store/profilePageSlice'

export const LoginForm: FC = (): JSX.Element => {
  const { register, handleSubmit } = useForm<ICredentials>({mode: 'onBlur'})

  const usernameCred = useAppSelector(state => state.profilePageSlice.username)
  const passwordCred = useAppSelector(state => state.profilePageSlice.password)

  const [error, setError] = useState<boolean>(false)

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<ICredentials> = ({username, password}) => {
    if (username === usernameCred && password === passwordCred) {
      dispatch(signIn())
      dispatch(setShowSignIn(false))
      setError(false)
      navigate('/profile')
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(false)
    }, 2500)
    return () => clearTimeout(timeout)
  }, [onSubmit])
  
  return (
    <div className={style.FormControlWrapper} onClick={() => dispatch(setShowSignIn(false))}>
      <form className={style.FormControlContainer} onSubmit={handleSubmit(onSubmit)} onClick={(e) => e.stopPropagation()}>
        <TextField
          required
          {...register('username')}
          className={style.FormControlInput}
          label="Login"
          type="text"
        />
        <TextField
          required
          {...register('password')}
          className={style.FormControlInput}
          label="Password"
          type="password"
        />
        {error ? 
        <Alert severity="error" className={style.FormControlInput}>Incorrect login or password</Alert> : 
        <div style={{width: '100%', height: '65px'}}></div>}
        <Button className={style.FormControlInput} variant='contained' type='submit'>Submit</Button>
      </form>
    </div>
  )
} 