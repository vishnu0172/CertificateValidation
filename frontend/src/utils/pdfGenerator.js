import jsPDF from 'jspdf';

export function generatePDF(data){
    const doc = new jsPDF();

    const certId = "TT-" + Date.now();

    doc.setFontSize(22);
    doc.text("TRAINING TRAINS", 70, 30);

    doc.setFontSize(16);
    doc.text(`Certificate Id: ${certId}`, 20, 50);
    doc.text("This is to certify that", 20, 70);

    doc.setFontSize(18);
    doc.text(data.name, 20, 90);

    doc.setFontSize(15);
    
    doc.text(`Roll No: ${data.roll}`, 20, 100);
    doc.text(`College Name: ${data.college}`, 20, 110);
    doc.text(`Domain: ${data.domain}`, 20, 120);
    doc.text(`Type: ${data.type}`, 20, 130);
    doc.text(`Date: ${data.date}`, 20, 140);
    
    doc.setFontSize(12);
    doc.text("Authorized Signatory", 150, 200);
    doc.save(`${certId}.pdf`);

    return certId;
}
