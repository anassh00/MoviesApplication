import { useEffect, useState } from "react"
import { getGenres, getLastPopularMovies } from "../../api/API"
import { GenreType, ResultType } from "../../types/App.types";
import { ImageContainer } from "../ImageContainer/ImageContainer";
import { AppConfig } from "../../const/Config";
import './LastPopularMovies.css';

export const LastPopularMovies = () => {

    const [data, setData] = useState<ResultType[]>();
    const [loading, setLoading] = useState(true);
    const [genres, setGenres] = useState<GenreType[]>();

    const fetchLastPopularMovies = (): void => {
        getLastPopularMovies()
            .then((response: ResultType[] | any) => {
                setData(response)
            })
            .catch((error: Error) => console.log(error))

        getGenres()
            .then((response: GenreType[] | any) => {
                setGenres(response)
            })
            .catch((error: Error) => console.log(error))
        setLoading(false);
    }

    useEffect(() => {
        fetchLastPopularMovies();
        setLoading(false);
    }, [])

    return (
        <div>
            <div>
                {loading ?
                    <div>Loading...</div>
                    :
                    <div>
                        <label style={{ fontWeight: "bold", fontSize: "28px", wordWrap: 'break-word', marginTop: "6px", marginLeft: '16px' }}>Les derniers films les plus populaires :</label>
                        <div className="Container">
                            {
                                data?.filter((item, index) => index < 10).map(movie => {
                                            return (
                                                <div className="MoviesContainer" key={movie.id}>
                                                    <ImageContainer src={AppConfig.imgUrl + movie.poster_path}/>
                                                    <div className="DescriptionContainer">
                                                        <label style={{ fontWeight: "bolder", fontSize: "23px", wordWrap: 'break-word' }}>{movie.original_title}</label>
                                                        <div>
                                                            <label style={{ fontWeight: "bold" }}>Category : {movie.genre_ids.map(genreId => (
                                                                genres?.find(element => element.id === genreId)?.name + "  ")
                                                            )}
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <span>{movie.overview.substring(0, 119)}</span>
                                                            <span> {"..."}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}