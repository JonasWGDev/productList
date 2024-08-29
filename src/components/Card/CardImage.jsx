
// import style
import "./Styles/CardImage.css";

const CardImage = (props) => {
    return (
        <div id='card-image'>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
    )
}

export default CardImage;