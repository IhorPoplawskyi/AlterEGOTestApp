import style from "./LoginForm.module.scss";
import { TextField, Button, Alert, Box } from "@mui/material";

import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ICredentials } from "../../types/index";

import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { signIn, setShowSignIn } from "../../store/profilePageSlice";

export const LoginForm: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [error, setError] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<ICredentials>({ mode: "onBlur" });

  const usernameCred = useAppSelector(
    (state) => state.profilePageSlice.username
  );
  const passwordCred = useAppSelector(
    (state) => state.profilePageSlice.password
  );

  const onSubmit: SubmitHandler<ICredentials> = ({ username, password }) => {
    if (username === usernameCred && password === passwordCred) {
      dispatch(signIn());
      dispatch(setShowSignIn(false));
      setError(false);
      navigate("/profile");
    } else {
      setError(true);
    }
  };

  return (
    <Box
      className={style.FormControlWrapper}
      onClick={() => dispatch(setShowSignIn(false))}
    >
      <Box
        component="form"
        className={style.FormControlContainer}
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e: any) => e.stopPropagation()}
        onChange={() => setError(false)}
      >
        <TextField
          required
          {...register("username")}
          className={style.FormControlInput}
          label="Login"
          type="text"
        />
        <TextField
          required
          {...register("password")}
          className={style.FormControlInput}
          label="Password"
          type="password"
        />
        {error ? (
          <Alert severity="error" className={style.FormControlInput}>
            Incorrect login or password
          </Alert>
        ) : (
          <Box component="div" className={style.ErrorPlug} />
        )}
        <Button
          className={style.FormControlInput}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
