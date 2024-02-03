import Image from 'next/image'
import PropTypes from 'prop-types';


function Card(props) {

    return (
        <div className='w-fit'>
            <Image
            src={props.revealed ? props.src : "card_back.svg"}
            width={100}
            height={100}
            alt={props.alt}
            onClick={props.handleCardClick}
        />
        </div>
    )
}

Card.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    revealed: PropTypes.bool,
    handleCardClick: PropTypes.func
};

export default Card;