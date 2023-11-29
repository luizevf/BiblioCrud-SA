
import './Card.css';

const Card = ({ title, content, imageUrl }) => {
    return (
        <div className="cardTela">

            {imageUrl && <img src={imageUrl} alt={title} />}
            
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Card;