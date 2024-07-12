import React from "react";
import BasketballPlayerCard from "./components/BasketballPlayerCard.jsx";

function App() {
  return (
    <div>
      <BasketballPlayerCard
        name="LeBron James"
        image="https://www.investopedia.com/thmb/ECsOoFZRndwomnBqK-rkNZHAPHw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1489016138-b69c82ea8e044ad78514797af9882740.jpg"
        position="Forward"
        stats={{
          pointsPerGame: 25.4,
          assistsPerGame: 7.1,
          reboundsPerGame: 10.5,
        }}
      />
    </div>
  );
}

export default App;
