import React, { useState } from "react";
import { generatePDF } from "../utils/pdfGenerator";

export default function GenerateCert({setCertId}){

    const [data, setdata] = useState({});
    const [loading, setLoading] = useState(false);
    const [showCustomDuration, setShowCustomDuration] = useState(false);

    const generate = async () => {
        if (!data.name || !data.roll || !data.college || !data.domain || !data.date || !data.company || !data.type || !data.duration) {
            alert('Please fill all fields including company, training type, and duration');
            return;
        }
        
        setLoading(true);
        try {
            const id = await generatePDF(data);
            setCertId(id);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Error generating certificate. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (field, value) => {
        setdata(prev => ({ ...prev, [field]: value }));
    };

    const handleDurationChange = (e) => {
        const value = e.target.value;
        if (value === 'custom') {
            setShowCustomDuration(true);
            setdata(prev => ({ ...prev, duration: '' }));
        } else {
            setShowCustomDuration(false);
            setdata(prev => ({ ...prev, duration: value }));
        }
    };

    return (
        <div>
            <h2>Generate Certificate</h2>
            
            <select onChange={e => handleChange('company', e.target.value)} style={{ marginBottom: '10px', width: '100%' }}>
                <option value="">Select Company *</option>
                <option value="trainingtrains">Training Trains</option>
                <option value="w3appdevelopers">W3 App Developers</option>
                <option value="domainhostly">Domain Hostly</option>
            </select>
            
            <input placeholder="Name" onChange={e => handleChange('name', e.target.value)} />
            <input placeholder="Roll No" onChange={e => handleChange('roll', e.target.value)} />
            <input placeholder="College" onChange={e => handleChange('college', e.target.value)} />
            <input placeholder="Domain" onChange={e => handleChange('domain', e.target.value)} />
            <input type="date" placeholder="Completion Date" onChange={e => handleChange('date', e.target.value)} />

            <select onChange={e => handleChange('type', e.target.value)} style={{ marginBottom: '10px', width: '100%' }}>
                <option value="">Select Training Type *</option>
                <option value="Internship">Internship</option>
                <option value="Inplant Training">Inplant Training</option>
            </select>

            <select onChange={handleDurationChange} style={{ marginBottom: '10px', width: '100%' }}>
                <option value="">Select Duration *</option>
                <option value="1 Week">1 Week</option>
                <option value="2 Weeks">2 Weeks</option>
                <option value="3 Weeks">3 Weeks</option>
                <option value="4 Weeks">4 Weeks</option>
                <option value="6 Weeks">6 Weeks</option>
                <option value="8 Weeks">8 Weeks</option>
                <option value="12 Weeks">12 Weeks</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
                <option value="4 Months">4 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="30 Days">30 Days</option>
                <option value="45 Days">45 Days</option>
                <option value="60 Days">60 Days</option>
                <option value="90 Days">90 Days</option>
                <option value="custom">Custom Duration</option>
            </select>

            {showCustomDuration && (
                <input 
                    placeholder="Enter custom duration (e.g., 5 Months, 10 Weeks)" 
                    onChange={e => handleChange('duration', e.target.value)} 
                    style={{ marginBottom: '10px', width: '100%' }}
                    autoFocus
                />
            )}

            <button onClick={generate} disabled={loading}>
                {loading ? 'Generating...' : 'Download & Proceed'}
            </button>
          </div>
    );
}