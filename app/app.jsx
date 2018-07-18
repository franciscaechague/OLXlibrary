import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Home from './components/templates/Home/Home';


require('./_general_style.scss');

const App = () => (
  <div>
    <Home />
  </div>
);

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('app'));
}
