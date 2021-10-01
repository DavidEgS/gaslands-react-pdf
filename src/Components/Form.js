import React, { useState } from 'react';
import Vehicles from './VehicleObject';

const Form = () => {

  const [vehicle, setVehicle] = useState("all vehicles");

  const handleSelect = (e) => {
    console.log(e.target.value);
    setVehicle(e.target.value);
  }

  // dynamically generate the option tag for each of the different vehicles


  const keys = (Vehicles) => {
    const keysList = Object.keys(Vehicles);
    // console.log(keysList);
    keysList.forEach((key) => {
      // console.log(key)
      const option = `<option value="#{key}">#{key}</option>`;
      console.log(option);
    })   
    
  }

  keys(Vehicles);

  return (
    <form>
      <select value={vehicle} onChange={handleSelect}>
        <option value="car">{Vehicles.car.type}</option>
        <option value="performanceCar">{Vehicles.performanceCar.type}</option>
      </select>
    </form>
  )
}

export default Form
