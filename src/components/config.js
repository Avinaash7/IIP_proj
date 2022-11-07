const CONTACT_ADDRESS = '0x3ddC9d08921E4f9E4CA3b40b0CEaBea61b6333C2';


const CONTACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_firstname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lastname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_DOB",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sex",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bloodtype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_doctorname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phonenumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_medicines",
				"type": "string"
			}
		],
		"name": "createPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "firstname",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "lastname",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "DOB",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "adress",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "sex",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "bloodtype",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "doctorname",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "phonenumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "medicines",
				"type": "string"
			}
		],
		"name": "PatientCreated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "patientCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patients",
		"outputs": [
			{
				"internalType": "string",
				"name": "firstname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lastname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "DOB",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "adress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sex",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bloodtype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "doctorname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phonenumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medicines",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]