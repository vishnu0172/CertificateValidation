import { useState } from 'react';
import './App.css';

// Import components one by one to debug
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import GenerateCert from './components/GenerateCert';
import StoreCert from './components/Strorecert';
import VerifyCert from './components/VerifyCert';

function App() {
  const [isAuth, setAuth] = useState(false);
  const [page, setPage] = useState('dashboard');
  const [certId, setCertId] = useState('');

  console.log('App rendering - isAuth:', isAuth, 'page:', page);

  // Test if components are imported correctly
  console.log('Login:', Login);
  console.log('Dashboard:', Dashboard);
  console.log('GenerateCert:', GenerateCert);
  console.log('StoreCert:', StoreCert);

  if (!isAuth) {
    return (
      <div className="App">
        <Login setAuth={setAuth} />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Certificate Validation System</h1>
      {page === 'dashboard' && <Dashboard setPage={setPage} />}
      {page === 'generate' && (
        <>
          <GenerateCert setCertId={setCertId} />
          {certId && <StoreCert certId={certId} />}
        </>
      )}
      {page === 'verify' && <VerifyCert />}
      {page !== 'dashboard' && (
        <button onClick={() => setPage('dashboard')}>Back to Dashboard</button>
      )}
    </div>
  );
}

export default App;
