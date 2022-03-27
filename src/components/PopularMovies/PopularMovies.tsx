import { useEffect, useState } from "react";
import { getGenres, getPopularMovies } from "../../api/API";
import { GenreType, ResultType } from "../../types/App.types";
import { Slider } from "../Slider/Slider";
import './PopularMovies.css'

export const PopularMovies = () => {

    const [data, setData] = useState<ResultType[]>();
    const [genres, setGenres] = useState<GenreType[]>();
    const [loading, setLoading] = useState(true);

    const fetchPopularMovies = () => {
        setLoading(true);
        getPopularMovies()
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
        fetchPopularMovies();
    }, [])

    return (
        <div>
            <label style={{fontWeight: "bold", fontSize : "30px", wordWrap : 'break-word', marginLeft : '16px'}}>Autres films populaires :</label>
            <Slider loading={loading} genres={genres} data={data} />
        </div>
    )
}