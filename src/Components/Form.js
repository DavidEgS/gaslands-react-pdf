import React, { useState } from 'react';
import Vehicles from './VehicleObject';

const Form = () => {

  const [vehicle, setVehicle] = useState("all vehicles");

  const handleSelect = (e) => {
    console.log(e.target.value);
    setVehicle(e.target.value);
  }

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
