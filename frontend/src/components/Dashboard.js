import React from 'react';

export default function Dashboard({ setPage }) {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <button onClick={() => setPage("generate")}>Generate Certificate</button>
            <button onClick={() => setPage("verify")}>Verify Certificate</button>
        </div>
    );
}