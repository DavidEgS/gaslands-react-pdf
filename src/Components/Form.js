import React, { useState } from 'react';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import Vehicles from './VehicleObject';

const Form = () => {

  const [vehicle, setVehicle] = useState(['car', 'car', 'car', 'car', 'car', 'car', 'car', 'car']);

  const handleSelect = (e) => {
    console.log(e.target.value);
    setVehicle(e.target.value);
  }

  // dynamically generate the option tag for each of the different vehicles
  // const keys = Object.keys(Vehicles) () => {
  // };

  const keys = (Vehicles) => {
    const keysList = Object.keys(Vehicles);
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
      <select value={vehicle} onChange={handleSelect}>
        { keys(Vehicles) }
        {/* <option value="performanceCar">{Vehicles.performanceCar.type}</option> */}
      </select>
    </form> 
  )
}

export default Form;



