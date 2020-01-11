const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/car', (req,res) => 
{
	const id = req.query.id;
	if (id) {
		// TODO: here call web3.js with id --> blockchain
		// result <-- blockchain
		// format result
		let name = "sumsi-car";
		let consumption = 7;
		let km = 777;
		let calculatedEmissions = consumption * km;
		res.json({ id: id, name: name, consumption: consumption, km: km, emissions: calculatedEmissions });
	} else {
		res.json({ error: "no id given"});
	}
});

app.get('/flight', (req,res) => 
{
	const id = req.query.id;
	if (id) {
		// TODO: here call web3.js with id --> blockchain
		// result <-- blockchain
		// format result
		let name = "sumsi-flight";
		let consumption = 0.27;
		let km = 777;
		let calculatedEmissions = consumption * km;
		res.json({ id: id, name: name, consumption: consumption, km: km, emissions: calculatedEmissions });
	} else {
		res.json({ error: "no id given"});
	}
});

app.get('/heating', (req,res) => 
{
	const id = req.query.id;
	if (id) {
		// TODO: here call web3.js with id --> blockchain
		// result <-- blockchain
		// format result
		let name = "sumsi-heating";
		let consumption = 0.25;
		let kwh = 120;
		let calculatedEmissions = consumption * kwh;
		res.json({ id: id, name: name, consumption: consumption, kwh: kwh, emissions: calculatedEmissions });
	} else {
		res.json({ error: "no id given"});
	}
});

app.get('/power', (req,res) => 
{
	const id = req.query.id;
	if (id) {
		// TODO: here call web3.js with id --> blockchain
		// result <-- blockchain
		// format result
		let name = "sumsi-power";
		let consumption = 0.527;
		let kwh = 240;
		let calculatedEmissions = consumption * kwh;
		res.json({ id:id, name: name, consumption: consumption, kwh: kwh, emissions: calculatedEmissions });
	} else {
		res.json({ error: "no id given"});
	}
});

app.post('/car', (req,res) => 
{
	const data = req.body;
	console.log("post-car: " + JSON.stringify(data));

	// TODO: here call web3.js with data --> blockchain
	// result <-- blockchain
	// when result ok, send status 200
	res.sendStatus(200);
});

app.post('/flight', (req,res) => 
{
		
	const data = req.body;
	console.log("post-flight: " + data);

	// TODO: here call web3.js with data --> blockchain
	// result <-- blockchain
	// when result ok, send status 200
	res.sendStatus(200);
});

app.post('/heating', (req,res) => 
{
		
	const data = req.body;
	console.log("post-heating: " + data);

	// TODO: here call web3.js with data --> blockchain
	// result <-- blockchain
	// when result ok, send status 200
	res.sendStatus(200);
});

app.post('/power', (req,res) => 
{
		
	const data = req.body;
	console.log("post-power: " + data);

	// TODO: here call web3.js with data --> blockchain
	// result <-- blockchain
	// when result ok, send status 200
	res.sendStatus(200);
});
app.listen(port, () => console.log(`Server is listening on port ${port}`));


