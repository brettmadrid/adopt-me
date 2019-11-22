import React from 'react';
import { render } from 'react-dom';
import { Pet } from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'), // children passed into div element
    React.createElement(Pet, {
      name: 'Samson',
      animal: 'Dog',
      breed: 'Rottweiler'
    }),
    React.createElement(Pet, {
      name: 'Ruffles',
      animal: 'Dog',
      breed: 'Cocker Spaniel'
    }),
    React.createElement(Pet, {
      name: 'Hogan',
      animal: 'Dog',
      breed: 'Labrador'
    })
  ]);
};

render(React.createElement(App), document.getElementById('root'));
