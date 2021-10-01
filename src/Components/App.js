
import '../App.css';
import Header from './Header/Header.js';
import Form from './Form';
import Card from './Card/Card.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function App() {
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
      <Form />
      <Card printDocument={printDocument} />
    </div>

  );
}

export default App;
