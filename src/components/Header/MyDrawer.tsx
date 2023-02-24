import style from './Header.module.scss'

import { FC } from "react";

import { INavItems } from "../../types";

import { useAppDispatch } from "../../store/store";
import { setShowSignIn } from "../../store/profilePageSlice";

import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface props {
    navItems: INavItems[]
    logged: boolean
    showSignIn: boolean
    navigate: (path: string) => void
    handleDrawerToggle: () => void
}

export const MyDrawer: FC<props> = ({ navItems, logged, showSignIn, navigate, handleDrawerToggle }): JSX.Element => {
    const dispatch = useAppDispatch()

    return (
        <Box onClick={handleDrawerToggle} className={style.textAlignCenter}>
            <Typography variant="h6" className={style.marginTopBottom}>
                The Worldwide Post
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton className={style.textAlignCenter}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem>
                    {logged ?
                        <ListItemButton className={style.textAlignCenter} onClick={() => navigate('/profile')}>
                            <ListItemText primary='Profile' />
                        </ListItemButton> :
                        <ListItemButton className={style.textAlignCenter} onClick={() => dispatch(setShowSignIn(!showSignIn))}>
                            <ListItemText primary='Sign in' />
                        </ListItemButton>
                    }
                </ListItem>
            </List>
        </Box>
    )
}