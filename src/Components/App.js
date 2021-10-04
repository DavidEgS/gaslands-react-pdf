
import '../App.css';
import React, { useState } from 'react';
import Header from './Header/Header.js';
import Form from './Form';
import Cards from './Cards/Cards.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function App() {
  const [vehicle, setVehicle] = useState(['car', 'car', 'car', 'car', 'car', 'car', 'car', 'car']);

  const printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
      ;
  }
  return (
    <div className="App">
      < Header />
      <Form vehicle vehicle={vehicle} setVehicle={setVehicle}/>
      <Cards printDocument={printDocument} vehicle={vehicle} setVehicle={setVehicle} />
    </div>

  );
}

export default App;
