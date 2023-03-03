import { FC } from "react";

import { Button } from "@mui/material/";
import { useTranslation } from "react-i18next";

interface LoadMoreProps {
  onClick: () => void;
}

export const LoadMore: FC<LoadMoreProps> = ({ onClick }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Button variant="outlined" onClick={onClick}>
      {t("Load more")}
    </Button>
  );
};
