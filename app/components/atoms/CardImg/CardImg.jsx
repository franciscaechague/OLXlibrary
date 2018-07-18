import React from 'react';

require('./_style.scss');

const CardImg = props => (
  <div className="a__card_image">
    <img src={props.src} alt={props.alt} />
  </div>
);

CardImg.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
};

export default CardImg;