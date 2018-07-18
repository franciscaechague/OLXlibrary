import React from 'react';

require('./_style.scss');

const CardText = props => (
  <p className="a__cardtext">{props.text}</p>
);

CardText.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default CardText;
