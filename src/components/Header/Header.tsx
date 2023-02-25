import style from './Header.module.scss'
import MenuIcon from '@mui/icons-material/Menu';

import { FC, useState } from "react";

import { useNavigate } from "react-router-dom";

import { MyDrawer } from "./MyDrawer";
import { LoginForm } from "../LoginForm/LoginForm";

import { setShowSignIn } from "../../store/profilePageSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

import { Box, Typography, CssBaseline, AppBar, Toolbar, IconButton, Button, Drawer } from "@mui/material";
import { useTranslation } from 'react-i18next';

export const Header: FC = (): JSX.Element => {
  const logged = useAppSelector(state => state.profilePageSlice.logged)

  const showSignIn = useAppSelector(state => state.profilePageSlice.showSignIn)

  const navItems = [{ name: 'Home', path: '/' }, { name: 'News', path: '/news' }]

  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <>
      {showSignIn && <LoginForm />}
      <Box className={style.Container}>
        <CssBaseline />
        <AppBar component="nav" position="fixed" className={style.AppBar}>
          <Toolbar>
            <IconButton onClick={handleDrawerToggle} className={style.IconButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={style.SiteName}>
              The Worldwide Post
            </Typography>
            <div style={{margin: 2, cursor: 'pointer'}} onClick={() => changeLanguage('en')}>EN</div>
            <div style={{margin: 2, cursor: 'pointer'}} onClick={() => changeLanguage('ua')}>UA</div>
            <Box className={style.NavItems}>
              {navItems.map((item) => (
                <Button onClick={() => navigate(item.path)} key={item.name} className={style.NavItems} >
                  {t(item.name)}
                </Button>
              ))}
              {logged ?
                <Button onClick={() => navigate('/profile')}>Profile</Button> :
                <Button onClick={() => dispatch(setShowSignIn(!showSignIn))}>Sign in</Button>
              }
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 270 },
            }}
          >
            <MyDrawer 
              navItems={navItems}
              logged={logged}
              showSignIn={showSignIn} 
              navigate={navigate} 
              handleDrawerToggle={handleDrawerToggle} 
              />
          </Drawer>
        </Box>
      </Box>
    </>
  );
}
