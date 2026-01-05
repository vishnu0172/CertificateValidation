import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import { ethers } from 'ethers';

// Get contract address from environment or use default
const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS || '0x5FbDB2315678afecb367f032d93F642f64180aa3';

// Contract ABI - only the functions we need
const CONTRACT_ABI = [
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

// Company configurations
const COMPANIES = {
    trainingtrains: {
        name: "TRAINING TRAINS",
        fullName: "Training Trains Pvt. Ltd.",
        certPrefix: "TT",
        primaryColor: [0, 51, 102], // Dark blue
        accentColor: [0, 102, 204], // Medium blue
        sealColor: [204, 0, 0], // Red
        sealText: ["VERIFIED", "TRAINING", "TRAINS"]
    },
    w3appdevelopers: {
        name: "W3 APP DEVELOPERS",
        fullName: "W3 App Developers Pvt. Ltd.",
        certPrefix: "W3",
        primaryColor: [0, 128, 0], // Green
        accentColor: [34, 139, 34], // Forest green
        sealColor: [255, 140, 0], // Orange
        sealText: ["VERIFIED", "W3 APP", "DEVS"]
    },
    domainhostly: {
        name: "DOMAIN HOSTLY",
        fullName: "Domain Hostly.com Pvt. Ltd.",
        certPrefix: "DH",
        primaryColor: [75, 0, 130], // Indigo
        accentColor: [138, 43, 226], // Blue violet
        sealColor: [220, 20, 60], // Crimson
        sealText: ["VERIFIED", "DOMAIN", "HOSTLY"]
    }
};

export async function generatePDF(data) {
    const doc = new jsPDF();
    
    // Get company configuration
    const company = COMPANIES[data.company] || COMPANIES.trainingtrains;
    
    // Generate certificate ID with company-specific prefix
    const certId = `${company.certPrefix}-${Date.now()}`;
    
    // Generate QR code with certificate ID
    const qrCodeDataUrl = await QRCode.toDataURL(certId, {
        width: 100,
        margin: 1,
        color: {
            dark: '#000000',
            light: '#ffffff'
        }
    });
    
    // Certificate border (use company accent color)
    doc.setLineWidth(1);
    doc.setDrawColor(...company.accentColor);
    doc.rect(10, 10, 190, 277); // Outer border
    doc.setLineWidth(0.5);
    doc.rect(12, 12, 186, 273); // Inner border
    
    // Header - Company/Organization Name
    doc.setFontSize(28);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(...company.primaryColor);
    doc.text(company.name, 105, 30, { align: 'center' });
    
    // Decorative line under header
    doc.setLineWidth(0.5);
    doc.setDrawColor(...company.accentColor);
    doc.line(50, 35, 160, 35);
    
    // Certificate title
    doc.setFontSize(22);
    doc.setTextColor(...company.sealColor);
    doc.text("CERTIFICATE OF COMPLETION", 105, 50, { align: 'center' });
    
    // Certificate ID with QR code
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Gray
    doc.text(`Certificate ID: ${certId}`, 20, 60);
    
    // Add QR code (top right corner)
    doc.addImage(qrCodeDataUrl, 'PNG', 170, 50, 25, 25);
    
    // Training Type Badge (Prominent display)
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(...company.sealColor);
    doc.text(`[ ${data.type || 'Training'} ]`, 105, 70, { align: 'center' });
    
    // Main certificate text
    doc.setFontSize(14);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0); // Black
    doc.text("This is to certify that", 105, 85, { align: 'center' });
    
    // Recipient name (highlighted)
    doc.setFontSize(24);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(...company.primaryColor);
    doc.text(data.name || 'N/A', 105, 100, { align: 'center' });
    
    // Underline for name
    const nameWidth = doc.getTextWidth(data.name || 'N/A');
    doc.setLineWidth(0.5);
    doc.line(105 - nameWidth/2, 102, 105 + nameWidth/2, 102);
    
    // Details section
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0);
    
    const leftColumn = 40;
    const rightColumn = 120;
    let yPos = 120;
    
    // Left column
    doc.setFont(undefined, 'bold');
    doc.text("Roll No:", leftColumn, yPos);
    doc.setFont(undefined, 'normal');
    doc.text(data.roll || 'N/A', leftColumn + 30, yPos);
    
    yPos += 12;
    doc.setFont(undefined, 'bold');
    doc.text("College:", leftColumn, yPos);
    doc.setFont(undefined, 'normal');
    const collegeText = doc.splitTextToSize(data.college || 'N/A', 60);
    doc.text(collegeText, leftColumn + 30, yPos);
    
    // Right column
    yPos = 120;
    doc.setFont(undefined, 'bold');
    doc.text("Domain:", rightColumn, yPos);
    doc.setFont(undefined, 'normal');
    doc.text(data.domain || 'N/A', rightColumn + 30, yPos);
    
    yPos += 12;
    doc.setFont(undefined, 'bold');
    doc.text("Type:", rightColumn, yPos);
    doc.setFont(undefined, 'normal');
    doc.text(data.type || 'N/A', rightColumn + 30, yPos);
    
    yPos += 12;
    doc.setFont(undefined, 'bold');
    doc.text("Duration:", rightColumn, yPos);
    doc.setFont(undefined, 'normal');
    doc.text(data.duration || 'N/A', rightColumn + 30, yPos);
    
    yPos += 12;
    doc.setFont(undefined, 'bold');
    doc.text("Date:", rightColumn, yPos);
    doc.setFont(undefined, 'normal');
    doc.text(data.date || 'N/A', rightColumn + 30, yPos);
    
    // Achievement text (with duration)
    doc.setFontSize(11);
    doc.setFont(undefined, 'italic');
    doc.setTextColor(60, 60, 60);
    const achievementText = `has successfully completed the ${data.duration || ''} ${data.type || 'training'} program in ${data.domain || 'the specified domain'}`;
    const splitText = doc.splitTextToSize(achievementText, 160);
    doc.text(splitText, 105, 175, { align: 'center' });
    
    // Digital Signature Section
    yPos = 220;
    
    // Signature line and text
    doc.setLineWidth(0.5);
    doc.setDrawColor(0, 0, 0);
    doc.line(140, yPos, 185, yPos); // Signature line
    
    // Generate a simple digital signature (hash-based)
    const signatureData = `${certId}-${data.name}-${data.date}-${data.company}`;
    const signature = await generateDigitalSignature(signatureData);
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text("Authorized Signatory", 162.5, yPos + 6, { align: 'center' });
    
    doc.setFontSize(8);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(company.fullName, 162.5, yPos + 11, { align: 'center' });
    
    // Digital signature hash (truncated for display)
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.text(`Digital Signature: ${signature.substring(0, 20)}...`, 162.5, yPos + 16, { align: 'center' });
    
    // Organization stamp/seal (decorative circle with company color)
    doc.setDrawColor(...company.sealColor);
    doc.setLineWidth(2);
    doc.circle(40, yPos + 10, 15, 'S'); // S = stroke (outline only)
    doc.setFontSize(8);
    doc.setTextColor(...company.sealColor);
    doc.text(company.sealText[0], 40, yPos + 8, { align: 'center' });
    doc.setFontSize(6);
    doc.text(company.sealText[1], 40, yPos + 12, { align: 'center' });
    doc.text(company.sealText[2], 40, yPos + 15, { align: 'center' });
    
    // Footer with blockchain verification info
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("This certificate is blockchain-verified and tamper-proof.", 105, 270, { align: 'center' });
    doc.setFontSize(7);
    doc.text(`Issued on: ${new Date().toLocaleDateString()} | Scan QR code to verify authenticity`, 105, 275, { align: 'center' });
    
    // Get PDF as blob to calculate hash
    const pdfBlob = doc.output('blob');
    
    // Calculate hash of the actual PDF file
    const pdfHash = await hashPDFBlob(pdfBlob);
    console.log('📄 Generated PDF Hash:', pdfHash);
    
    // Save the PDF
    doc.save(`${certId}.pdf`);
    
    // Store certificate on blockchain
    try {
        console.log('📝 Attempting to store certificate on blockchain...');
        console.log('📋 Certificate ID:', certId);
        console.log('🔐 PDF Hash (first 20 chars):', pdfHash.substring(0, 20));
        
        await storeOnBlockchain(certId, pdfHash);
        console.log('✅ Certificate stored on blockchain successfully!');
        alert(`✅ Certificate generated and stored on blockchain!\n\nCertificate ID: ${certId}`);
    } catch (error) {
        console.error('❌ Failed to store on blockchain:', error);
        alert(`⚠️ PDF generated but blockchain storage failed!\n\nError: ${error.message}\n\nCertificate ID: ${certId}\n\nPlease check:\n1. Ganache is running\n2. Contract address is correct\n3. Check browser console for details`);
        throw error; // Throw error so user knows something went wrong
    }
    
    return certId;
}

// Store certificate on blockchain
async function storeOnBlockchain(certId, hashSignature) {
    try {
        // Connect to blockchain
        const rpcUrl = process.env.REACT_APP_RPC_URL || 'http://127.0.0.1:8545';
        console.log('🔗 Connecting to RPC:', rpcUrl);
        const provider = new ethers.JsonRpcProvider(rpcUrl);
        
        // Check connection
        const network = await provider.getNetwork();
        console.log('🌐 Connected to network, Chain ID:', network.chainId.toString());
        
        // Use the first Ganache/Hardhat account's private key
        const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
        const wallet = new ethers.Wallet(privateKey, provider);
        console.log('👤 Using wallet address:', wallet.address);
        
        // Create contract instance
        console.log('📜 Contract address:', CONTRACT_ADDRESS);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, wallet);
        
        // Convert hash to bytes32 format
        const hashBytes32 = '0x' + hashSignature.substring(0, 64).padEnd(64, '0');
        
        console.log('📝 Storing certificate on blockchain...');
        console.log('   Certificate ID:', certId);
        console.log('   Hash (bytes32):', hashBytes32);
        
        // Store certificate on blockchain
        const tx = await contract.storeCertificate(certId, hashBytes32);
        console.log('📤 Transaction sent! Hash:', tx.hash);
        
        // Wait for confirmation
        const receipt = await tx.wait();
        console.log('✅ Transaction confirmed! Block:', receipt.blockNumber);
        
        return true;
    } catch (error) {
        console.error('❌ Blockchain storage error:', error);
        console.error('   Error name:', error.name);
        console.error('   Error message:', error.message);
        if (error.code) console.error('   Error code:', error.code);
        throw error;
    }
}

// Hash PDF blob using SHA-256
async function hashPDFBlob(blob) {
    const buffer = await blob.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Generate a simple digital signature using Web Crypto API (DEPRECATED - now using PDF hash)
async function generateDigitalSignature(data) {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
