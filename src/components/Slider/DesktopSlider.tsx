import { Carousel } from "react-bootstrap";
import { GenreType, ResultType } from "../../types/App.types";
import { ImageContainer } from "../ImageContainer/ImageContainer";
import { AppConfig } from "../../const/Config";

export const DesktopSlider = ({ data, genres }: { data?: ResultType[] , genres?: GenreType[] }) => {
    return(
    <Carousel>
        {
            data?.filter((item, index) => index >= 10).map(movie => {
                return (
                    <Carousel.Item key={movie.id}>
                        <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                            <div style={{ marginRight: '20px' }}>
                                <ImageContainer src={AppConfig.imgUrl + movie.poster_path}/>
                                <br />
                                <br />
                                <br />
                            </div>
                            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', width: '400px' }}>
                                <label style={{ fontWeight: "bold", fontSize: "2.5vw", wordWrap: 'break-word' }}>{movie.original_title}</label>
                                <label>Categorie : {movie.genre_ids.map(genreId => {
                                    return (<label key={genreId} style={{ marginRight: '10px' }}> {genres?.find(element => element.id === genreId)?.name + '.'} </label>)
                                })}
                                </label>
                            </div>

                        </div>
                    </Carousel.Item>
                );
            })
        }
    </Carousel>
    )
}