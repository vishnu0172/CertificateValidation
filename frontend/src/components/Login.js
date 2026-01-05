import { useState} from 'react';
 export default function Login({ setAuth}){
    const [user, setuser]= useState('');
    const [pass, setpass]= useState('');

    const login = () => {
        if (user === 'admin' && pass === 'admin123') {
            setAuth(true);
        }
        else {
            alert('Invalid credentials');
        }
    };
  return (
    <div>
        <h2> Admin Login</h2>
        <input placeholder='Username' onChange={(e) => setuser(e.target.value)} />
        <input type = 'password' placeholder = 'Password' onChange={e => setpass(e.target.value)} />
        <button onClick={login}>Login</button>
    </div>
  );
}