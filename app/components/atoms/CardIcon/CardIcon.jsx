import React from 'react';

require('./_style.scss');

const CardIcon = props => (
  <div className="a__card_icon">
    <img src={props.src} alt={props.alt} />
  </div>
);

CardIcon.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
};

export default CardIcon;