import React, { useState } from 'react';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import Vehicles from './VehicleObject';

const Form = ({ vehicle, setVehicle }) => {

  const handleSelect = (e) => {
    // console.log(e.target.value);
    setVehicle(e.target.value);
    console.log(vehicle);
  }

  const keys = (Vehicles) => {
    const keysList = Object.keys(Vehicles);
    const tag = keysList.map((key) => {
      const formSelect = <option>{key}</option>
     
      return (
       formSelect
      );
    })  
    return tag;
  }

  const selectors = () => {
    new Array(8);
    for ( let i= 0; i < 8; i++ ) {
      
    }

  }

  return (
    <form>
      <select value={vehicle} onChange={handleSelect}>
        { keys(Vehicles) }
      </select>
    </form> 
  )
}

export default Form;



