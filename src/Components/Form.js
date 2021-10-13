import React, { useState } from 'react';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import VehicleObject from './VehicleObject';

const Form = ({ vehicles, setVehicles }) => {

  const handleSelect = (e) => {
    // console.log(e.target.value);
    setVehicles(e.target.value);
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
    <select value={vehicles} onChange={handleSelect}>
      { keys(VehicleObject) }
    </select> 

    <select value={vehicles} onChange={handleSelect}>
     { keys(VehicleObject) }
    </select> 

    <select value={vehicles} onChange={handleSelect}>
      { keys(VehicleObject) }
    </select>

    <select value={vehicles} onChange={handleSelect}>
    { keys(VehicleObject) }
    </select>

    <select value={vehicles} onChange={handleSelect}>
    { keys(VehicleObject) }
    </select>

    <select value={vehicles} onChange={handleSelect}>
    { keys(VehicleObject) }
    </select>

    <select value={vehicles} onChange={handleSelect}>
    { keys(VehicleObject) }
    </select> 

    <select value={vehicles} onChange={handleSelect}>
    { keys(VehicleObject) }
    </select> 
    </div>

  )
}

export default Form;






{/* <select value={vehicles} onChange={handleSelect}>
{ keys(VehicleObject) }
</select> */}
