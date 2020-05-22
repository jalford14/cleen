import React from 'react';
import logo from '../logo.svg';
import WashOption from '../components/WashOption.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WashOption
          price="$10"
          title="Basic Wash"
          description="Come to our home! We'll wash the exterior of your car for only $10."
        />
        <WashOption
          price="$15"
          title="On-Demand Wash"
          description="Let us come to you! The only thing we ask is that you have a hose we can use."
        />
        <WashOption
          price="$15"
          title="Interior Detailing"
          description="Add this to any wash and we'll "
        />
        <WashOption
          price="$20"
          title="The Full Works"
          description="The best value in PA! Get your exterior and interior cleaned for the price of a large pizza."
        />
      </header>
    </div>
  );
}

export default App;
