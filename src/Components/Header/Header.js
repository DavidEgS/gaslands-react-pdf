import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="banner" >
        <h1>Gaslands vehicle cards PDF generator</h1>
        <p>This app is for use in conjunction with Gaslands. You can generate a printable PDF of vehicle stat cards selecting the vehicle type for each one.
        We recommend cutting them out and placing in a card sleeve for use with a wipable pen.</p>
      </div>
      <div className="checkerboard">   </div>
    </div>
  );
}

export default Header;
