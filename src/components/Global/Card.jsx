
// import card style
import "../../styles/Card.css";

// import data.json
import data from "../../../data.json";

// import card image component
import CardImage from "../Card/CardImage";

const Card = () => {
    return (
        <div id="card">
            {
                data.map((value) => {
                    return (
                        <li className="item" key={value.name}>
                            <CardImage imgSrc={value.image.desktop} />
                        </li>
                    )
                })
            }
        </div>
    )
}

export default Card;