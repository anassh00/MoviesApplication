export const ImageContainer = ({ src }: { src?: string }) => {

    return (
        <div>
            <img
                style={{
                    borderRadius: "8px",
                    width: "320px",
                    padding: "8px"
                }}
                src={src}
                alt="slide"
            />
        </div >
    )
}