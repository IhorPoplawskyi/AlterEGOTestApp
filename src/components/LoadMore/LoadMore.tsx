import { FC } from "react";

import { Button } from "@mui/material/";

interface LoadMoreProps {
  onClick: () => void;
}

export const LoadMore: FC<LoadMoreProps> = ({ onClick }): JSX.Element => (
  <Button variant="outlined" onClick={onClick}>
    Load More
  </Button>
);
