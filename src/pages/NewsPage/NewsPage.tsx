import style from './NewsPage.module.scss'

import { FC, useEffect } from "react"

import { fetchNews } from "../../store/thunks"
import { useAppDispatch, useAppSelector } from "../../store/store"

import { Container, TextField, Box } from "@mui/material"
import { NewsPageItem } from "../../components/NewsPageItem/NewsPageItem"


export const NewsPage: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const news = useAppSelector(state => state.newsPageSlice.news)

    useEffect(() => {
        dispatch(fetchNews())
    }, [])

    return (
        <Container>
            <TextField placeholder="Enter keywords" variant="standard" className={style.SearchInput}/>
            <Box className={style.Container}>
                {news && news.map(post => <NewsPageItem key={post.id} {...post} />)}
            </Box>
        </Container>
    )
}