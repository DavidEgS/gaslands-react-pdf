import React, { useState } from 'react';

const Form = () => {

  const [vehicle, setVehicle] = useState("all vehicles");

  const handleSelect = (e) => {
    console.log(e.target.value);
    setVehicle(e.value)
    // console.log(vehicle);
  }

  return (
    <form>
      <select value={vehicle} onChange={handleSelect}>
        <option value="car">Car</option>
        <option value="truck">Truck</option>
      </select>
    </form>
  )
}

export default Form
