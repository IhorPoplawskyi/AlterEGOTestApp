import calendar from "./calendar.png";

import style from "./NewsPageItem.module.scss";

import { FC } from "react";

import { INews } from "../../types";
import { useAppDispatch } from "../../store/store";

import { deleteArticle } from "../../store/newsPageSlice";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export const NewsPageItem: FC<INews> = ({
  title,
  imageUrl,
  summary,
  publishedAt,
  id,
}): JSX.Element => {
  
  const trimmedPublisedAt = publishedAt.slice(0, 10);
  const dispatch = useAppDispatch();

  return (
    <Card className={style.Card}>
      <CardMedia
        className={style.CardHeadImage}
        component="img"
        alt="img"
        image={imageUrl}
      />
      <CardContent className={style.CardContent}>
        <Typography className={style.PublishedAt}>
          <CardMedia
            className={style.Calendar}
            component="img"
            alt="calendar"
            image={calendar}
          />
          {trimmedPublisedAt}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => dispatch(deleteArticle(id))} size="small">
          Delete article
        </Button>
      </CardActions>
    </Card>
  );
};
