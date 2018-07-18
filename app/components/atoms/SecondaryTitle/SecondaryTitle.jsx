import React from 'react';

require('./_style.scss');

const SecondaryTitle = props => (
  <p className="a__secondary_title">{props.text}</p>
);

SecondaryTitle.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default SecondaryTitle;
