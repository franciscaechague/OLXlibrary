import React from 'react';

require('./_style.scss');

const CardTitle = props => (
  <p className="a__cardtitle">{props.text}</p>
);

CardTitle.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default CardTitle;
