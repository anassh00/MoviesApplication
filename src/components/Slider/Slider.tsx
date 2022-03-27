import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { GenreType, ResultType } from "../../types/App.types";
import { DesktopSlider } from "./DesktopSlider";
import { MobileSlider } from "./MobileSlider";

export const Slider = ({ loading, data, genres }: { loading: boolean, data?: ResultType[], genres?: GenreType[] }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth <= 500 ? setIsMobile(true) : setIsMobile(false));
    }, [])

    return (
        <div>
            {loading ?
                <div>Loading...</div>
                :
                <div>
                    {isMobile ?
                        <div>
                            <MobileSlider data={data} genres={genres}/>
                        </div>
                        :
                        <div>
                            <DesktopSlider data={data} genres={genres} />
                        </div>
                    }
                </div>}
        </div >
    );
}