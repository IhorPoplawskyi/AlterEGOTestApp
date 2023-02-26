import { FC } from "react";
import { useTranslation } from "react-i18next";

import { INavItems } from "../../types";

import style from './Header.module.scss'
import { Box, Button } from "@mui/material";

interface INavItemsProps {
    navItems: INavItems[]
    logged: boolean
    navigate: (path: string) => void
    onShowSignInToogle: () => void
}

export const NavItems: FC<INavItemsProps> = ({ navItems, logged, navigate, onShowSignInToogle }): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Box className={style.NavItems}>
              {navItems.map((item) => (
                <Button
                  onClick={() => navigate(item.path)}
                  key={item.name}
                  className={style.NavItems}
                >
                  {t(item.name)}
                </Button>
              ))}
              {logged ? (
                <Button
                  className={style.NavItems}
                  onClick={() => navigate("/profile")}
                >
                  {t("Profile")}
                </Button>
              ) : (
                <Button
                  className={style.NavItems}
                  onClick={onShowSignInToogle}
                >
                  {t("Sign in")}
                </Button>
              )}
            </Box>
    )
}