import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import SecondaryTitle from '../../atoms/SecondaryTitle/SecondaryTitle';
import AdCard from '../../molecules/AdCard/AdCard';

require('./_style.scss');

// Subtitle is a required prop and can be received from props if wanted
const subTitle = 'Recommended for you';

// The function the button receives can be declared in any father component,
// not necessarily here.
const onClick = () => (
  console.log('I have been clicked')
);

const ProductList = props => (
  <div className="o__product_list_container">
    <SecondaryTitle text={subTitle}/>
    <ul className="o__product_list">
      {
        props.cards.map((card, i) => (
          card.img ?
            <ProductCard
              img={card.img}
              title={card.title}
              text={card.text}
              key={i}
            /> :
            <AdCard
              title={card.title}
              body={card.body}
              onClick={onClick}
            />
        ))
      }
    </ul>
  </div>
);

ProductList.propTypes = {
  cards: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default ProductList;

// MOCK OBJECT:
// products: [
//   {
//     img: 'url.to.image',
//     title: 'String',
//     text: 'String'
//   },
//   {
//     img: '//url.to.image',
//     title: 'String',
//     text: 'String'
//   },
//   {
//     title: 'String',
//     body: 'String'
//   }
// ]