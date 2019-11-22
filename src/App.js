import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Samson" animal="Dog" breed="Rottweiler" />
      <Pet name="Junior" animal="Cat" breed="Tabby" />
      <Pet name="Hogan" animal="Dog" breed="Labrador" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
