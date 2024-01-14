import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types';


function Card(props) {
    return (
        <div>
            <Image
            src={props.src}
            width={100}
            height={100}
            alt={props.alt}
        />
        </div>
    )
}

Card.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Card;