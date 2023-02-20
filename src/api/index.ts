import queryString from "query-string"
import { INews } from "../types"

const articlesEndpoint = 'https://api.spaceflightnewsapi.net/v3/articles'

export const getNews = async (limit: number, offset: number): Promise<INews[]> => {
    const query = queryString.stringify({
        _limit: limit,
        _start: offset * limit
    })
    
    const response = await fetch(`${articlesEndpoint}?${query}`)
    return response.json()
}

export default {
    getNews
}