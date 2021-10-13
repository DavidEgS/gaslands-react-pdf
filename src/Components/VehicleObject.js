const VehicleObject = {
  car: {
    type: 'Car',
    weight: 'middleweight',
    crew: 2,
    halfHull: 5,
    maxGear: 5,
    handling: 3
  },

  performanceCar: {
    type: 'Performance Car',
    weight: 'middleweight',
    crew: 1,
    halfHull: 4,
    maxGear: 6,
    handling: 4
  },

  truck: {
    type: 'Truck',
    weight: 'middleweight',
    crew: 3,
    halfHull: 6,
    maxGear: 4,
    handling: 2
  },

  heavyTruck: {
    type: 'Heavy Truck',
    weight: 'heavyweight',
    crew: 4,
    halfHull: 7,
    maxGear: 3,
    handling: 2
  },

  buggy: {
    type: 'Buggy',
    weight: 'lightweight',
    crew: 2,
    halfHull: 3,
    maxGear: 6,
    handling: 4
  },

  bus: {
    type: 'Bus',
    weight: 'heavyweight',
    crew: 8,
    halfHull: 8,
    maxGear: 3,
    handling: 2
  },

  bikeWithSidecar: {
    type: 'Bike',
    weight: 'lightweight',
    crew: 2,
    halfHull: 2,
    maxGear: 6,
    handling: 5,
    notes: 'full throttle, pivot'
  },

  dragRacer: {
    type: 'Drag Racer',
    weight: 'lightweight',
    crew: 1,
    halfHull: 2,
    maxGear: 6,
    handling: 4,
    notes: 'jet engineer'
  },

  gyrocopter: {
    type: 'Gyrocopter',
    weight: 'middleweight',
    crew: 1,
    halfHull: 2,
    maxGear: 6,
    handling: 4,
    notes: 'airwolf, airborne'
  },

  iceCreamTruck: {
    type: 'Ice Cream Truck',
    weight: 'heavyweight',
    crew: 2,
    halfHull: 5,
    maxGear: 4,
    handling: 2,
    notes: 'infuriating jingle'
  },

  ambulance: {
    type: 'Ambulance',
    weight: 'middleweight',
    crew: 3,
    halfHull: 4,
    maxGear: 4,
    handling: 3,
    notes: 'uppers, downers'
  },

  helicopter: {
    type: 'Helicopter',
    weight: 'heavyweight',
    crew: 3,
    halfHull: 4,
    maxGear: 4,
    handling: 3,
    notes: 'airwolf, airborne'
  },

  tank: {
    type: 'Tank',
    weight: 'heavyweight',
    crew: 3,
    halfHull: 10,
    maxGear: 3,
    handling: 4,
    notes: 'pivot, all terrain, up and over'
  },

  warRig: {
    type: 'War Rig',
    weight: 'heavyweight',
    crew: 5,
    halfHull: 13,
    maxGear: 4,
    handling: 2,
    notes: 'articulated, ponderous, piledriver'
  }
}

export default VehicleObject;
