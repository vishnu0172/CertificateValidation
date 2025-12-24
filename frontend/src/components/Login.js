import React, { useState } from 'react';

export default function Login({ setAuth }) {
    const [user, setuser] = useState('');
    const [pass, setpass] = useState('');

    const login = () => {
        console.log('Login attempt:', user, pass);
        if (user === 'admin' && pass === 'admin123') {
            setAuth(true);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Admin Login</h2>
            <div>
                <input 
                    placeholder='Username' 
                    value={user}
                    onChange={(e) => setuser(e.target.value)} 
                />
            </div>
            <div>
                <input 
                    type='password' 
                    placeholder='Password'
                    value={pass}
                    onChange={(e) => setpass(e.target.value)} 
                />
            </div>
            <button onClick={login}>Login</button>
        </div>
    );
}