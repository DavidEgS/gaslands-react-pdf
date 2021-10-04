import './Card.css'

const Card = ({printDocument}) => {
  return (
    <div className="card" id="divToPrint" onClick={printDocument}>
      <div className="title">
        <div className="vehicledesc">car</div>
        <div className="vehicledesc">middleweight</div>
      </div>
      <div className="hull">
        <div className="hulltitle">hull</div>
        <div className="boxholder">
          <div className="halfhull">xxxxx</div>
          <div className="halfhull">xxxxx</div>
        </div>
      </div>
      <div className="gear">
        <div className="emptybox"></div>
        <div className="gearbox"></div>
      </div>
      <div className="infosection">
        <div className="infos">HANDLING: 3</div>
        <div className="infos">CREW: 2</div>
        <div className="infos">CANS: <span className="cansline">&nbsp;&nbsp;</span> </div>
      </div>
    </div>
   );
}

export default Card;
