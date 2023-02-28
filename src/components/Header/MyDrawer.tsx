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
import style from "./Header.module.scss";

import { INavItems } from "../../types";

interface MyDrawerProps {
  navItems: INavItems[];
  logged: boolean;
  navigate: (path: string) => void;
  onDrawerToggled: () => void;
  onShowSignInToogle: () => void;
}

export const MyDrawer: FC<MyDrawerProps> = ({
  navItems,
  logged,
  navigate,
  onDrawerToggled,
  onShowSignInToogle,
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box onClick={onDrawerToggled} className={style.textAlignCenter}>
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
              onClick={onShowSignInToogle}
            >
              <ListItemText primary={t("Sign in")} />
            </ListItemButton>
          )}
        </ListItem>
      </List>
    </Box>
  );
};
