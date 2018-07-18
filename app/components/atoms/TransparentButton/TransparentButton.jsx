import React from 'react';

require('./_style.scss');

const TransparentButton = props => (
  <button className="a__transparent_button" onClick={props.onClick}>
    <p className="a__transparent_button_text">{props.text}</p>
  </button>
);

TransparentButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string
};

export default TransparentButton;