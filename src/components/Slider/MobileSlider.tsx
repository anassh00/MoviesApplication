import { Carousel } from "react-bootstrap";
import { GenreType, ResultType } from "../../types/App.types";
import { ImageContainer } from "../ImageContainer/ImageContainer";
import { AppConfig } from "../../const/Config";

export const MobileSlider = ({ data , genres}: { data?: ResultType[] , genres?: GenreType[]}) => {
    return (
        <Carousel>
            {
                data?.filter((item, index) => index > 10 && index <= 40).map(movie => {
                    return (
                        <Carousel.Item key={movie.id}>
                            <div style={{ display: "flex", justifyContent: 'center', alignContent: "center" }}>
                                <div>
                                    <ImageContainer src={AppConfig.imgUrl + movie.poster_path}/>
                                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
                                        <label style={{ fontWeight: "bold", fontSize: "4vw", wordWrap: 'break-word' }}>{movie.original_title.substring(0, 20)}</label>
                                        <label>Category : {movie.genre_ids.map(genreId => (
                                            genres?.find(element => element.id === genreId)?.name + ". ")
                                        )}
                                        </label>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>)
}
