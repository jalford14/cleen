import React from "react";
import WashOption from "../components/WashOption.js"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WashOption
          color="#6AE6C9"
          price="$10"
          title="Basic Wash"
          description="Come to our home! We'll wash the exterior of your car for only $10."
        />
        <WashOption
          color="#75C2E6"
          price="$15"
          title="On-Demand Wash"
          description="Let us come to you! The only thing we ask is that you have a hose we can use."
        />
        <WashOption
          color="#FA8C9C"
          price="$15"
          title="Interior Detailing"
          description="Our team will vacuum and detail your car."
        />
        <WashOption
          color="#FAB05A"
          price="$20"
          title="The Full Works"
          description="The best value in PA! Get your exterior and interior cleaned for the price of a large pizza."
        />
      </header>
    </div>
  );
}

export default App;
