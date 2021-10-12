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
        <div className="hulltitle">HULL</div>
        <div className="boxholder">
          <div className="halfhull"> {hullBoxes.map(x => <div className="hullbox">&nbsp;</div>) } </div>
          <div className="halfhull"> {hullBoxes.map(x => <div className="hullbox">&nbsp;</div>) } </div>
        </div>
      </div>
      <div className="gear">
        <div className="emptybox"></div>
        <div className="gearbox"><div>MAX GEAR</div><div class="big-num"> { VehicleObject[vehicle].maxGear } </div></div>
      </div>
      <div className="infosection">
        <div className="infos">Handling: {VehicleObject[vehicle].handling} </div>
        <div className="infos">Crew: {VehicleObject[vehicle].crew} </div>
        <div className="infos">Cans: _ _ _ </div>
      </div>
    </div>
   );
}

export default Card;
