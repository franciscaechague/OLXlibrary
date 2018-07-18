import React from 'react';
import CardImg from '../../atoms/CardImg/CardImg';
import CardTitle from '../../atoms/CardTitle/CardTitle';
import CardText from '../../atoms/CardText/CardText';

require('./_style.scss');

const ProductCard = props => (
  <li className="m__product_card">
    <div className="m__product_card_header">
      <CardImg src={props.img}/>
    </div>
    <div className="m__product_card_body">
      <CardTitle text={props.title}/>
      <CardText text={props.text} />
    </div>
  </li>
);

ProductCard.propTypes = {
  img: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

export default ProductCard;

// MOCK OBJECT:
// productCard {
//   img: 'url.to.img',
//   title: 'String',
//   text: 'String'
// }