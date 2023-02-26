import calendar from "./calendar.png";

import { FC } from "react";

import { INews } from "../../types";

import style from "./NewsPageItem.module.scss";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface INewsPageItem {
  post: INews
  onDeleteArticle: (id: number) => void
}

export const NewsPageItem: FC<INewsPageItem> = ({post: {
  title,
  imageUrl,
  summary,
  publishedAt,
  id,
}, onDeleteArticle
}): JSX.Element => {
  
  const trimmedPublisedAt = publishedAt.slice(0, 10);

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
        <Button onClick={() => onDeleteArticle(id)} size="small">
          Delete article
        </Button>
      </CardActions>
    </Card>
  );
};
