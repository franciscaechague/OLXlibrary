import React from 'react';

require('./_style.scss');

const PrimaryTitle = props => (
  <h1 className="a__title">{props.text}</h1>
);

PrimaryTitle.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default PrimaryTitle;
