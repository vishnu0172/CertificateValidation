import React from 'react';
import { ethers } from "ethers";
import { sha256 } from "../utils/hash";

const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

// Full ABI
const abi = [
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
        "name": "storeCertificate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export default function StoreCert({ certId }) {
    const store = async (file) => {
        try {
            const hash = await sha256(file);

            // Connect to local Hardhat node directly (no MetaMask needed)
            const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
            
            // Use the first Hardhat account's private key
            const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
            const wallet = new ethers.Wallet(privateKey, provider);

            const contract = new ethers.Contract(contractAddress, abi, wallet);

            console.log("Storing certificate:", certId, "Hash:", "0x" + hash);
            
            const tx = await contract.storeCertificate(certId, "0x" + hash);
            console.log("Transaction sent:", tx.hash);
            
            await tx.wait();
            console.log("Transaction confirmed!");
            
            alert("Certificate stored on blockchain successfully!");
        } catch (error) {
            console.error("Error storing certificate:", error);
            alert("Error storing certificate: " + error.message);
        }
    };

    return (
        <div>
            <h2>Store Certificate on Blockchain</h2>
            <p>Certificate ID: {certId}</p>
            <input type="file" onChange={e => store(e.target.files[0])} />
            <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
                ℹ️ No MetaMask needed - stores directly to local blockchain
            </p>
        </div>
    );
}