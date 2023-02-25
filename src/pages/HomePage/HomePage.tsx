import style from './HomePage.module.scss'

import { FC } from "react";

import { Box, Container, Typography } from "@mui/material";


export const HomePage: FC = (): JSX.Element => {
  return (
    <Box className={style.Wrapper}>
      <Container className={style.Container}>
        <Typography className={style.Title}>WELCOME TO ALTER EGO COMPANY</Typography>
        <Typography>This app was made by challanger Ihor Poplawskyi</Typography>
      </Container>
    </Box>
  )
};
