import Image from "next/image";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className={props.className || null} style={props.cardStyle || null}>
      <Image
        src={props.revealed ? props.src : "card_back.svg"}
        className={props.imageStyle || null}
        width={100}
        height={100}
        alt={props.alt}
        onClick={props.handleCardClick}
        data-cy={props["data-cy"]}
        data-revealed={props["data-revealed"]}
        style={props.style || null}
      />
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  handleCardClick: PropTypes.func,
};

export default Card;
