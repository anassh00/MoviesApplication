import axios, { AxiosResponse } from "axios"
import { GenreListType, GenreType, MoviesType, ResultType } from "../types/App.types";
import { AppConfig } from "../const/Config";

const baseUrl: string = AppConfig.baseUrl;
const key: string = AppConfig.apiKey;

export const getLastPopularMovies = async (): Promise<ResultType[]> => {
    try {
        const movies: AxiosResponse<MoviesType> = await axios.get(baseUrl + "/movie/popular?api_key="+key);
        return movies.data.results.sort((a, b) => (Date.parse(b.release_date) - Date.parse(a.release_date)));
    } catch (error) {
        throw Error("error occured");
    }
}

export const getPopularMovies = async (): Promise<ResultType[]> => {
    try {
        const movies: AxiosResponse<MoviesType> = await axios.get(baseUrl + "/movie/popular?api_key="+key+"&page=1");
        const moviesPage2: AxiosResponse<MoviesType> = await axios.get(baseUrl + "/movie/popular?api_key="+key+"&page=2");
        const result = movies.data.results.sort((a,b)=> (Date.parse(b.release_date) - Date.parse(a.release_date))).concat(moviesPage2.data.results);
        return result;
    } catch (error) {
        throw Error("error occured");
    }
}

export const getGenres = async () : Promise<GenreType[]> => {
    try {
        const genreList: AxiosResponse<GenreListType> = await axios.get(baseUrl + "/genre/movie/list?api_key="+key);
        return genreList.data.genres;
    } catch (error) {
        throw Error("error occured");
    }    
}