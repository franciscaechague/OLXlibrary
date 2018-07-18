import React from 'react';

require('./_style.scss');

const CardSubtitle = props => (
  <p className="a__cardsubtitle">{props.text}</p>
);

CardSubtitle.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default CardSubtitle;
