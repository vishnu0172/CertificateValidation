import React, { useState } from "react";
import { generatePDF } from "../utils/pdfGenerator";

export default function GenerateCert({setCertId}){

    const [data, setdata] = useState({});

    const generate = () => {
        const id = generatePDF(data);
        setCertId(id);
    };

    const handleChange = (field, value) => {
        setdata(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div>
            <h2>Generate Certificate</h2>
            <input placeholder="Name" onChange={e => handleChange('name', e.target.value)} />
            <input placeholder="Roll No" onChange={e => handleChange('roll', e.target.value)} />
            <input placeholder="College" onChange={e => handleChange('college', e.target.value)} />
            <input placeholder="Domain" onChange={e => handleChange('domain', e.target.value)} />
            <input type="date" onChange={e => handleChange('date', e.target.value)} />

            <select onChange={e => handleChange('type', e.target.value)}>
                <option>Internship</option>
                <option>Inplant</option>
            </select>

            <button onClick={generate}>Download & Proceed</button>
          </div>
    );
}