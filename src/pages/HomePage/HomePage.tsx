import style from "./HomePage.module.scss";
import avatar from "../../common/images/avatar.jpeg";

import { FC } from "react";
import { useTranslation } from "react-i18next";

import { IconsBar } from "../../components";
import { Box, Button, Container, Typography } from "@mui/material";

export const HomePage: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box className={style.Wrapper}>
      <Box className={style.ShadowEffect}>
        <Container className={style.Container}>
          <Box className={style.AppInfo}>
            <Box className={style.Title}>THE CHALLENGER</Box>
            <Typography className={style.InfoText}>
              The Challenger is name of test app for Alter Ego IT-company. This
              app meets all the requirements of the test and even more.
            </Typography>
            <IconsBar />
          </Box>
          <Box className={style.AuthorInfo}>
            <Box component="img" alt='avatar' src={avatar} />
            <Button
              variant="contained"
              className={style.ContactMeBtn}
              href="https://t.me/Greg_vishki"
              target="_blank"
            >
              {t("Contact me")}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
