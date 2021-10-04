import './Card.css'
import VehicleObject from "../VehicleObject";

const Card = ({vehicle}) => {
  const hullBoxes = new Array(VehicleObject[vehicle].halfHull).fill(0)
  console.log(hullBoxes)
  return (
    <div className="card" >
      <div className="title">
        <div className="vehicledesc">{VehicleObject[vehicle].type}</div>
        <div className="vehicledesc">{VehicleObject[vehicle].weight}</div>
      </div>
      <div className="hull">
        <div className="hulltitle">hull</div>
        <div className="boxholder">
          <div className="halfhull"> {hullBoxes.map(x => <div className="hullbox">&nbsp;</div>) } </div>
          <div className="halfhull"> {hullBoxes.map(x => <div className="hullbox">&nbsp;</div>) } </div>
        </div>
      </div>
      <div className="gear">
        <div className="emptybox"></div>
        <div className="gearbox"><p>MAX GEAR</p><p> { VehicleObject[vehicle].maxGear } </p></div>
      </div>
      <div className="infosection">
        <div className="infos">HANDLING: {VehicleObject[vehicle].handling} </div>
        <div className="infos">CREW: {VehicleObject[vehicle].crew} </div>
        <div className="infos">CANS: <span className="cansline">&nbsp;&nbsp;</span> </div>
      </div>
    </div>
   );
}

export default Card;
