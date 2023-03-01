import { FC } from "react";

import weatherApp from "./weatherApp.png";
import steamStoreApp from "./steamStoreApp.png";
import newsArticleApp from "./newsArticleApp.png";

import style from "./Projects.module.scss";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Container,
} from "@mui/material";

export const Projects: FC = (): JSX.Element => {
  return (
    <Container className={style.Container}>
      <Card className={style.ProjectItem}>
        <CardActionArea
          href="https://weather-app-snowy-one.vercel.app/"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="140"
            image={weatherApp}
            alt="weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Weather App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the weather app, where you can get current weather, five
              days forecast, detailed forecast for each day by every 3 hours
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={style.ProjectItem}>
        <CardActionArea
          href="https://news-articles-app.vercel.app"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="140"
            image={newsArticleApp}
            alt="news"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              News App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the react app, where you can put keywords to input to
              search articles that contains this keywords, list of articles that
              contains keywords, single article in expanded view
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={style.ProjectItem}>
        <CardActionArea
          href="https://steam-test-app.vercel.app"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="140"
            image={steamStoreApp}
            alt="steam"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Steam Store App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a service where you can find games and information about
              these games on Steam store, add/delete them to Like list
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};
