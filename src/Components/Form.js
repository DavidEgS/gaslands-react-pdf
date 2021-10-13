import React, { useState } from 'react';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import VehicleObject from './VehicleObject';

const Form = ({ vehicles, setVehicles }) => {
  // console.log(vehicles)
  const handleSelect = (e) => {
    // console.log(e.target.value);
    let newVehicles = [...vehicles]
    console.log(newVehicles)
    newVehicles[e.target.id] = e.target.value
    console.log(newVehicles)
    setVehicles(newVehicles);
  }

  const keys = (VehicleObject) => {
    const keysList = Object.keys(VehicleObject);

    const tag = keysList.map((key) => {
      const formSelect = <option>{key}</option>
      return (
       formSelect
      );
    })
    return tag;
  }

  const selectors = () => {
    let selectArray = new Array(8);

    for ( let i = 0; i < 8; i++) {
      selectArray.push(<select value={vehicles} onChange={handleSelect}>
        { keys(VehicleObject) }
      </select>)
    }
    console.log(selectArray);

    return (
      {selectArray}
    )
  }

  return (
    // <form>
    //   { selectors() }
    // </form>

    <div>
    <select value={vehicles} onChange={handleSelect} id='0'>
      { keys(VehicleObject) }
    </select>

    <select value={vehicles} onChange={handleSelect} id='1'>
     { keys(VehicleObject) }
    </select>

    <select value={vehicles} onChange={handleSelect} id='2'>
      { keys(VehicleObject) }
    </select>

    <select value={vehicles} onChange={handleSelect} id='3'>
    { keys(VehicleObject) }
    </select>

      <select value={vehicles} onChange={handleSelect} id='4'>
    { keys(VehicleObject) }
    </select>

      <select value={vehicles} onChange={handleSelect} id='5'>
    { keys(VehicleObject) }
    </select>

      <select value={vehicles} onChange={handleSelect} id='6'>
    { keys(VehicleObject) }
    </select>

    <select value={vehicles} onChange={handleSelect} id='7'>
    { keys(VehicleObject) }
    </select>
    </div>

  )
}

export default Form;






{/* <select value={vehicles} onChange={handleSelect}>
{ keys(VehicleObject) }
</select> */}
