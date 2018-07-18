import React from 'react';
import CategoryList from '../../organisms/CategoryList/CategoryList';
import ProductList from '../../organisms/ProductList/ProductList';

require('./_style.scss');

// This template is used for the listing part of the main page
// All props required are stated in respective components.
const Home = props => (
  <div className="app">
    <CategoryList cards={props.categories}/>
    <ProductList cards={props.products}/>
  </div>
);

Home.propTypes = {
  categories: React.PropTypes.array,
  products: React.PropTypes.array
};

// These props shoud come from a state container component
Home.defaultProps = {
  categories: [
    {
      icon: '/imgs/car-front.svg',
      title: 'Vehicles',
      subtitle: ['Cars & Bakkies', 'Car Parts & Accessories', 'Motorcylces & Scooters', 'Trucks & Commercial Vehicles']
    },
    {
      icon: '/imgs/car-front.svg',
      title: 'Property',
      subtitle: ['Houses & Flats for rent', 'Rooms for Rent & Shared', 'Houses & Flats for Sale', 'Land']
    },
    {
      icon: '/imgs/car-front.svg',
      title: 'Electronics & Computers',
      subtitle: ['Cell Phones', 'TV, Audio & Visual', 'Computers & Laptops', 'Gaming & Consoles']
    },
    {
      icon: '/imgs/car-front.svg',
      title: 'Home, Garden & Tools',
      subtitle: ['Furniture & Decor', 'Homeware & Appliances', 'Tools & DIY', 'Garden & Braai']
    },
    {
      icon: '/imgs/car-front.svg',
      title: 'Farming & Industrial',
      subtitle: ['Farming Equipment & Vehicles', 'Livestock', 'Business & Industrial Equipment',
        'Feeds, Supplements & Seeds']
    },
    {
      icon: '/imgs/car-front.svg',
      title: 'Sports & Outdoors',
      subtitle: ['Outdoor & Sports Equipment', 'Bicycles', 'Gym & Fitness']
    },
    {
      icon: '/imgs/car-front.svg',
      title: 'Pets',
      subtitle: ['Dogs & Cats', 'Other pets', 'Pet Care & Accessories']
    },
    {
      icon: '/imgs/car-front.svg',
      title: 'Hobbies & Interests',
      subtitle: ['Toys, Games & Remote Control', 'Musical Instruments', 'Art, Collectibles & Rare Items',
        'Community Announcements']
    }
  ],
  products: [
    {
      img: 'http://via.placeholder.com/350x250',
      title: 'R1 3000',
      text: 'Flat for rent with bed'
    },
    {
      img: 'http://via.placeholder.com/350x250',
      title: 'R1 3000',
      text: 'Flat for rent with bed'
    },
    {
      img: 'http://via.placeholder.com/350x250',
      title: 'R1 3000',
      text: 'Flat for rent with bed'
    },
    {
      img: 'http://via.placeholder.com/350x250',
      title: 'R1 3000',
      text: 'Flat for rent with bed'
    },
    {
      title: 'Your ad could be posted here',
      body: 'Sell your things in your community, its quick and easy'
    },
    {
      img: 'http://via.placeholder.com/350x250',
      title: 'R1 3000',
      text: 'Flat for rent with bed'
    },
    {
      img: 'http://via.placeholder.com/350x250',
      title: 'R1 3000',
      text: 'Flat for rent with bed'
    },
    {
      img: 'http://via.placeholder.com/350x250',
      title: 'R1 3000',
      text: 'Flat for rent with bed'
    },
    {
      img: 'http://via.placeholder.com/350x250',
      title: 'R1 3000',
      text: 'Flat for rent with bed'
    }
  ]
};

export default Home;
