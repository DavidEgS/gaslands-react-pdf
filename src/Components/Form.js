import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const Form = () => {

  const [vehicle, setVehicle] = useState(['car', 'car', 'car', 'car', 'car', 'car', 'car', 'car']);

  const handleSelect = (e) => {
    console.log(e);
  }

  return (
    <DropdownButton onSelect={handleSelect}>
      <Dropdown.Item eventKey="car">Car</Dropdown.Item>
      <Dropdown.Item eventKey="truck">Truck</Dropdown.Item>
    </DropdownButton>
  )
}

export default Form
