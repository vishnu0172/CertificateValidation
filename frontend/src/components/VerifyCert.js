import React, { useState } from 'react';
import { ethers } from "ethers";
import { sha256 } from "../utils/hash";

// Get contract address from environment or use default
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS || '0x5FbDB2315678afecb367f032d93F642f64180aa3';

// Get RPC URL from environment
const rpcUrl = process.env.REACT_APP_RPC_URL || 'http://127.0.0.1:8545';

// Full ABI from compiled contract
const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_certId",
                "type": "string"
            }
        ],
        "name": "getCertificateHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_certId",
                "type": "string"
            },
            {
                "internalType": "bytes32",
                "name": "_hash",
                "type": "bytes32"
            }
        ],
        "name": "verifyCertificate",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

export default function VerifyCert() {
    const [certId, setCertId] = useState('');
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');
    const [storedHash, setStoredHash] = useState('');

    const verify = async () => {
        if (!certId || !file) {
            alert('Please enter certificate ID and select file');
            return;
        }

        try {
            console.log('🔍 Starting verification...');
            console.log('📋 Certificate ID:', certId);
            
            const hash = await sha256(file);
            console.log('📄 PDF File Hash:', '0x' + hash);
            
            // Connect directly to local Hardhat node (no MetaMask)
            const provider = new ethers.JsonRpcProvider(rpcUrl);
            const contract = new ethers.Contract(contractAddress, abi, provider);

            const stored = await contract.getCertificateHash(certId);
            console.log('⛓️  Stored Hash from Blockchain:', stored);
            
            const isValid = await contract.verifyCertificate(certId, "0x" + hash);
            console.log('✔️  Verification Result:', isValid);
            
            setStoredHash(stored);
            
            if (isValid) {
                setResult('✅ Certificate is VALID and matches blockchain record!');
                console.log('✅ VERIFICATION SUCCESSFUL!');
            } else {
                setResult('❌ Certificate is INVALID or does not match blockchain record!');
                console.log('❌ VERIFICATION FAILED!');
                console.log('   PDF Hash:    0x' + hash);
                console.log('   Stored Hash: ' + stored);
                console.log('   ⚠️  Hashes do not match!');
            }
        } catch (error) {
            console.error('❌ Verification error:', error);
            setResult('Error verifying certificate: ' + error.message);
        }
    };

    const getHash = async () => {
        if (!certId) {
            alert('Please enter certificate ID');
            return;
        }

        try {
            // Connect directly to local Hardhat node (no MetaMask)
            const provider = new ethers.JsonRpcProvider(rpcUrl);
            const contract = new ethers.Contract(contractAddress, abi, provider);

            const hash = await contract.getCertificateHash(certId);
            
            if (hash === '0x0000000000000000000000000000000000000000000000000000000000000000') {
                setStoredHash('❌ Certificate not found on blockchain');
            } else {
                setStoredHash('✅ Stored Hash: ' + hash);
            }
        } catch (error) {
            console.error('Get hash error:', error);
            setStoredHash('Error: ' + error.message);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Verify Certificate</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <h3>Check Stored Hash</h3>
                <input 
                    placeholder="Certificate ID (e.g., TT-1234567890)" 
                    value={certId}
                    onChange={e => setCertId(e.target.value)}
                    style={{ width: '100%', marginBottom: '10px' }}
                />
                <button onClick={getHash}>Get Stored Hash</button>
                {storedHash && (
                    <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px', wordBreak: 'break-all' }}>
                        {storedHash}
                    </div>
                )}
            </div>

            <hr />

            <div style={{ marginTop: '20px' }}>
                <h3>Verify Certificate File</h3>
                <input 
                    placeholder="Certificate ID (e.g., TT-1234567890)" 
                    value={certId}
                    onChange={e => setCertId(e.target.value)}
                    style={{ width: '100%', marginBottom: '10px' }}
                />
                <input 
                    type="file" 
                    onChange={e => setFile(e.target.files[0])}
                    style={{ marginBottom: '10px' }}
                />
                <button onClick={verify}>Verify Certificate</button>
                
                {result && (
                    <div style={{ 
                        marginTop: '15px', 
                        padding: '15px', 
                        backgroundColor: result.includes('VALID') ? '#d4edda' : '#f8d7da',
                        color: result.includes('VALID') ? '#155724' : '#721c24',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                    }}>
                        {result}
                    </div>
                )}
            </div>
            
            <p style={{ fontSize: '12px', color: '#666', marginTop: '20px', textAlign: 'center' }}>
                ℹ️ No MetaMask needed - connects directly to local blockchain
            </p>
        </div>
    );
}
