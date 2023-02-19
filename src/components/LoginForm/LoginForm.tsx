import { FC, useEffect, useState } from 'react'

import { FormControl, TextField, Button, FormHelperText } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { loggingin } from '../../store/profilePageSlice';

export const LoginForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const logged = useAppSelector(state => state.profilePageSlice.logged)
  const login = useAppSelector(state => state.profilePageSlice.login)
  const password = useAppSelector(state => state.profilePageSlice.password)
  const [error, setError] = useState<boolean>(false)
  const [userLogin, setUserLogin] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')

  console.log(logged)

  const onSubmitHandler = () => {
    if (userLogin === login && userPassword === password) {
      dispatch(loggingin())
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <FormControl>
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        variant="standard"
        value={userLogin}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserLogin(event.target.value)}
      />
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        variant="standard"
        value={userPassword}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserPassword(event.target.value)} 
      />
      {error && <FormHelperText>Incorrect login or password</FormHelperText>}
      <Button variant="contained" onClick={onSubmitHandler}>Submit</Button>
    </FormControl>
  )
} 