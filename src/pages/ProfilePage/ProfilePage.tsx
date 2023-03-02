import road from "./road.jpeg";
import location from "./location.png";
import avatar from "../../common/images/avatar.jpeg";

import { FC } from "react";
import { useTranslation } from "react-i18next"; 

import style from "./ProfilePage.module.scss";
import { Box, Typography, Button } from "@mui/material";

import { Projects } from "../../components/Projects/Projects";

import { useAppDispatch } from "../../store/store";
import { signOut } from "../../store/profilePageSlice";


export const ProfilePage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <Box className={style.Container}>
      <Box className={style.Background}>
        <Box component="img" alt="background" src={road} />
      </Box>
      <Box className={style.Header}>
        <Box component="img" alt="avatar" src={avatar} className={style.Avatar} />
        <Box className={style.AboutMe}>
          <Typography className={style.Name}>Ihor Poplawskyi</Typography>
          <Typography className={style.WorkPosition}>
            Junior React developer
          </Typography>
          <Typography>
            <Box component="img" alt="location" src={location} />
            Zhytomyr, Ukraine
          </Typography>
        </Box>
        <Button
          variant="contained"
          className={style.LogoutBtn}
          onClick={() => dispatch(signOut())}
        >
          {t("Log out")}
        </Button>
      </Box>
      <Box className={style.Main}>
        <Typography className={style.ProjectsTitle}>
          See also my projects
        </Typography>
        <Projects />
      </Box>
    </Box>
  );
};
