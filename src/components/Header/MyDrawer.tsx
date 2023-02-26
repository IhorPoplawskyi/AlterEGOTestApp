import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { INavItems } from "../../types";
import { useAppDispatch } from "../../store/store";
import { setShowSignIn } from "../../store/profilePageSlice";

// webpack aliases +(tsconfig)
// import { setShowSignIn } from "@store/profilePageSlice";

import style from "./Header.module.scss";

interface props {
  navItems: INavItems[];
  logged: boolean;
  showSignIn: boolean;
  navigate: (path: string) => void;
  handleDrawerToggle: () => void;
  // onDrawerToggled: () => void;
}

export const MyDrawer: FC<props> = ({
  navItems,
  logged,
  showSignIn,
  navigate,
  handleDrawerToggle,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <Box onClick={handleDrawerToggle} className={style.textAlignCenter}>
      <Typography variant="h6" className={style.marginTopBottom}>
        The Challenger
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton className={style.textAlignCenter}>
              <ListItemText primary={t(item.name)} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          {logged ? (
            <ListItemButton
              className={style.textAlignCenter}
              onClick={() => navigate("/profile")}
            >
              <ListItemText primary={t("Profile")} />
            </ListItemButton>
          ) : (
            <ListItemButton
              className={style.textAlignCenter}
              onClick={() => dispatch(setShowSignIn(!showSignIn))}
            >
              <ListItemText primary={t("Sign in")} />
            </ListItemButton>
          )}
        </ListItem>
      </List>
    </Box>
  );
};


// NotificationModal + NotificationItem

// store/notification (slice, thunk, ) + Notifications (badge + NotificationModal + store + api)

// <MyPage><Notification /></MyPage>

// components(props) // features // pages   => feature-sliced design