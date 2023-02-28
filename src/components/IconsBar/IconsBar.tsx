import { FC } from "react";

import { Box } from "@mui/material";

import style from "./IconsBar.module.scss";

import gmail from "./gmail.png";
import github from "./github.png";
import telegram from "./telegram.png";
import linkedin from "./linkedin.png";

export const IconsBar: FC = (): JSX.Element => {
  return (
    <Box className={style.Icons}>
      <Box
        component="a"
        className={style.Icon}
        href="https://t.me/Greg_vishki"
        target="_blank"
      >
        <Box component="img" alt="telegram" src={telegram} />
      </Box>
      <Box
        component="a"
        className={style.Icon}
        href="mailto:poplawskyiihor@gmail.com"
        target="_blank"
      >
        <Box component="img" alt="gmail" src={gmail} />
      </Box>
      <Box
        component="a"
        className={style.Icon}
        href="https://www.linkedin.com/in/ihor-poplawskyi-867a20254/"
        target="_blank"
      >
        <Box component="img" alt="linkedin" src={linkedin} />
      </Box>
      <Box
        component="a"
        className={style.Icon}
        href="https://github.com/IhorPoplawskyi"
        target="_blank"
      >
        <Box component="img" alt="github" src={github} />
      </Box>
    </Box>
  );
};
