import style from './Header.module.scss'

import { FC } from "react";

import { INavItems } from "../../types";

import { useAppDispatch } from "../../store/store";
import { setShowSignIn } from "../../store/profilePageSlice";

import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useTranslation } from 'react-i18next';

interface props {
    navItems: INavItems[]
    logged: boolean
    showSignIn: boolean
    navigate: (path: string) => void
    handleDrawerToggle: () => void
}

export const MyDrawer: FC<props> = ({ navItems, logged, showSignIn, navigate, handleDrawerToggle }): JSX.Element => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    return (
        <Box onClick={handleDrawerToggle} className={style.textAlignCenter}>
            <Typography variant="h6" className={style.marginTopBottom}>
                The Telegraph
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton className={style.textAlignCenter}>
                            <ListItemText primary={t(item.name)} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem>
                    {logged ?
                        <ListItemButton className={style.textAlignCenter} onClick={() => navigate('/profile')}>
                            <ListItemText primary={t('Profile')} />
                        </ListItemButton> :
                        <ListItemButton className={style.textAlignCenter} onClick={() => dispatch(setShowSignIn(!showSignIn))}>
                            <ListItemText primary={t('Sign in')} />
                        </ListItemButton>
                    }
                </ListItem>
            </List>
        </Box>
    )
}