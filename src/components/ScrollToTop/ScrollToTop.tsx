import { FC } from "react";

import { Box } from "@mui/material";
import arrow from "./arrow.png";
import style from "./ScrollToTop.module.scss";

export const ScrollToTop: FC = (): JSX.Element => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box component="button" onClick={goToTop} className={style.Button}>
      <img src={arrow} alt="arrow" />
    </Box>
  );
};
