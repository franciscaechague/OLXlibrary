import React from 'react';
import CardIcon from '../../atoms/CardIcon/CardIcon';
import CardTitle from '../../atoms/CardTitle/CardTitle';
import CardSubtitle from '../../atoms/CardSubtitle/CardSubtitle';


require('./_style.scss');

const CategoryCard = props => (
  <li className="m__category_card">
    <div className="m__category_card_header">
      <CardIcon src={props.icon}/>
      <CardTitle text={props.title}/>
    </div>
    <div className="m__category_card_body">
      {
        props.subtitle.map((subtitle, i) => (
          <CardSubtitle
            text={subtitle}
            key={i}
          />
        ))
      }
    </div>
  </li>
);

CategoryCard.propTypes = {
  icon: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};

export default CategoryCard;

// MOCK OBJECT:
// categoryCard {
//   icon: 'url.to.icon',
//   title: 'String',
//   subtitle: 'String'
// }
