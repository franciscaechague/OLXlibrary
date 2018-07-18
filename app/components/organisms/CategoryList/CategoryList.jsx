import React from 'react';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';
import PrimaryTitle from '../../atoms/PrimaryTitle/PrimaryTitle';
import SecondaryTitle from '../../atoms/SecondaryTitle/SecondaryTitle';

require('./_style.scss');

// The title and subtitle dont need to be defined here, they can be
// defined in any parent component and can also come from database if wished.
const title = 'Popular Categories';
const subTitle = 'Browse through the most popular categories.';

const CategoryList = props => (
  <div>
    <PrimaryTitle text={title}/>
    <SecondaryTitle text={subTitle}/>
    <ul className="o__category_list">
      {
        props.cards.map((card, i) => (
          <CategoryCard
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            key={i}
          />
        ))
      }
    </ul>
  </div>

);

CategoryList.propTypes = {
  cards: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default CategoryList;

// MOCK OBJECT:
// categories: [
//   {
//     icon: 'url.to.icon',
//     title: 'String',
//     subtitle: ['Array', 'Of', 'Strings']
//   },
//   {
//     icon: 'url.to.icon',
//     title: 'String',
//     subtitle: ['Array', 'Of', 'Strings']
//   }
// ]