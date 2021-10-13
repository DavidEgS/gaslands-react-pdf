import { useState } from "react";
import Card from '../Card/Card';
import Form from '../Form';
import './Cards.css'

const Cards = ({ vehicles, setVehicles, printDocument }) => {

  console.log(vehicles);
  const tingy = vehicles.map((car, index) => <Card key={index} vehicle = {car} />);
  // console.log(tingy)
  return (
    <div className="cards">
      <button onClick={printDocument}>Click me!</button>
      <div className="a4page" id="divToPrint">
      { tingy }

      </div>
    </div>
   );
}

export default Cards;
