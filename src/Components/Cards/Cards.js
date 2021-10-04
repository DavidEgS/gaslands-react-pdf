import { useState } from "react";
import Card from '../Card/Card';
import Form from '../Form';

const Cards = ({ vehicle, setVehicle }) => {
  // const vehicleList = vehicle.map((broom, index) =>
  //     < Card key={index} />
  //   )
  const tingy = vehicle.map((car, index) => <Card key={index} />);
  console.log(tingy)
  return (
    <div className="cards">
      <button>Click me!</button>
      <div className="a4page">
      {tingy }

      </div>
    </div>
   );
}

export default Cards;
