async function main(){
    const CertificateValidation = await ethers.getContractFactory("CertificateValidation");
    const cert = await CertificateValidation.deploy();
    await cert.waitForDeployment();

    console.log("CertificateValidation deployed to:", await cert.getAddress());
}

main().catch((error)=>{
    console.error(error);
    process.exitCode=1;
});