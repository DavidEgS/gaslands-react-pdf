import React, { useState } from 'react';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import VehicleObject from './VehicleObject';

const Form = ({vehilces, setVehicles}) => {

  const handleSelect = (e) => {
    console.log(e.target.value);
    setVehicles(e.target.value);
  }


  // dynamically generate the option tag for each of the different vehicles
  // const keys = Object.keys(Vehicles) () => {
  // };

  const keys = (VehicleObject) => {
    const keysList = Object.keys(VehicleObject);
    // console.log(keysList);
    const tag = keysList.map((key) => {
      // console.log(key)

      const formSelect = <option>{key}</option>

      return (
       formSelect
      );
      // const option = <option value={key}>{key}</option>;
      // console.log(option.props.value);
      // console.log(option.props.value);
    })
    return tag;
  }

  return (
    <form>
      {/* <select value={vehicles} onChange={handleSelect}>
        {keys(VehicleObject) }
        {/* <option value="performanceCar">{Vehicles.performanceCar.type}</option> */}
      {/* </select> */}
    </form>
  )
}

export default Form;



