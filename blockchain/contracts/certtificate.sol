// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CertificateValidation{
    address public admin;
    struct Certificate{
        bytes32 certHash;
        uint256 timestamp;
    }
    mapping(string => Certificate) private certificates;
    event CertificateStored(string certId,bytes32 hash);
    modifier onlyAdmin(){
        require(msg.sender == admin,"Only admin can perform this action");
        _;
    }
    constructor(){
        admin=msg.sender;
    }
    function storeCertificate(
        string memory _certId,
        bytes32 _hash
    )
    public onlyAdmin{
        certificates[_certId]=Certificate(_hash,block.timestamp);
        emit CertificateStored(_certId,_hash);
    }
    function verifyCertificate(
        string memory _certId,
        bytes32 _hash
        )
        public view returns(bool){
            return certificates[_certId].certHash == _hash;
        }
        function getCertificateHash(
            string memory _certId
        )
        public view returns(bytes32){
            return certificates[_certId].certHash;
        }


}
