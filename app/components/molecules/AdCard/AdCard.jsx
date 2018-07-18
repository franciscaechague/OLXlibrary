import React from 'react';
import TransparentButton from '../../atoms/TransparentButton/TransparentButton';

require('./_style.scss');

const AdCard = props => (
  <li className="m__ad_card">
    <h4 className="m__ad_card_title">{props.title}</h4>
    <p className="m__ad_card_body">{props.body}</p>
    <TransparentButton onClick={props.onClick} text="Start Selling"/>
  </li>
);

AdCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default AdCard;

// MOCK OBJECT:
// adCard {
//   title: 'String',
//   text: 'String',
//   onClick: function()
// }