import { Container } from "@mui/material"
import { FC, useEffect } from "react"
import { NewsPageItem } from "../../components/NewsPageItem/NewsPageItem"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { fetchNews } from "../../store/thunks"
import style from './NewsPage.module.scss'

export const NewsPage: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const news = useAppSelector(state => state.newsPageSlice.news)

    useEffect(() => {
        dispatch(fetchNews())
    }, [])

    return (
        <Container className={style.Container}>
            {news && news.map(post => <NewsPageItem key={post.id} {...post}/>)}
        </Container>
    )
}