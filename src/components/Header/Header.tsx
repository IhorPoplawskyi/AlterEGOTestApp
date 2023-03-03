import ua from "./ua.png";
import uk from "./uk.png";

import style from "./Header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";

import { FC, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { MyDrawer, LoginForm, NavItems } from "./../../components";

import { setShowSignIn } from "../../store/profilePageSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

import {
  Box,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
} from "@mui/material";

const navItems = [
  { name: "Home", path: "/" },
  { name: "News", path: "/news" },
];

export const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const logged = useAppSelector((state) => state.profilePageSlice.logged);
  const showSignIn = useAppSelector(
    (state) => state.profilePageSlice.showSignIn
  );

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const onDrawerToggle = useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  const onShowSignInToogle = useCallback(() => {
    dispatch(setShowSignIn(!showSignIn));
  }, [dispatch, showSignIn]);

  return (
    <>
      {showSignIn && <LoginForm />}

      <Box className={style.Container}>
        <CssBaseline />
        <AppBar component="nav" position="fixed" className={style.AppBar}>
          <Toolbar>
            <IconButton onClick={onDrawerToggle} className={style.IconButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={style.SiteName}>
              The Challenger
            </Typography>
            <Box className={style.LangContainer}>
              <Box
                component="img"
                src={uk}
                alt="en"
                onClick={() => changeLanguage("en")}
              />
              <Box
                component="img"
                src={ua}
                alt="ua"
                onClick={() => changeLanguage("ua")}
              />
            </Box>
            <NavItems
              navItems={navItems}
              logged={logged}
              navigate={navigate}
              onShowSignInToogle={onShowSignInToogle}
            />
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            open={mobileOpen}
            onClose={onDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 270 },
            }}
          >
            <MyDrawer
              navItems={navItems}
              logged={logged}
              navigate={navigate}
              onDrawerToggled={onDrawerToggle}
              onShowSignInToogle={onShowSignInToogle}
            />
          </Drawer>
        </Box>
      </Box>
    </>
  );
};
