
const express = require('express');
const { MongoClient, Int32 } = require('mongodb');
const mongoose = require('mongoose')
const cors = require("cors");
const itemAchema = require('./Item');

const uri = "mongodb+srv://Reina:8lRR9nx1HTZIBGnW@cluster0.cypfweo.mongodb.net/?retryWrites=true&w=majority";

async function run(){

	// mongoose Connection String
	mongoose.connect(uri, {dbName: 'hello'}, {
		socketTimeoutMS: 10000
	}).catch( e => console.log(e.reason))

	// Schema Model
	const schema = new mongoose.Schema({})
	const MyModel = mongoose.model('aaaa', schema, 'datas');


	const conn = mongoose.createConnection(uri, {dbName: 'test'}, {
		socketTimeoutMS: 10000
	 })
	 const nn = conn.model('User', itemAchema, 'text')
	
	//MongoClient connection String
	const client = new MongoClient(uri);
	const dbName = 'test';
	const collectionName = 'text';
	const database = client.db(dbName);
	const collection = database.collection(collectionName)

	const Disit = await collection.find().toArray()
	

	const app = express();
	app.use(express.json());
	app.use(cors())

	app.get("/", (req, resp) => {
		resp.send("App is working");
	})

	app.get("/story" , async (req, res) => {
		try {
			res.json(Disit);
		} catch(e){
			res.status(500).send("Server Error");
		}
	})

	app.get("/title", async (req, res) => {
		await nn.find()
		.then(user => res.json(user))
		.catch(err => res.json(err))
	})

	app.get("/api/items" , async (req, res) => {
		try {
			MyModel.find()
			.then(user => res.json(user))
			.catch(err => res.json(err))
		} catch(e){
			console.error(error);
			res.status(500).send("Server Error");
		}
	})



	client.close();
	console.log("App listen at port 5000");
	app.listen(5000);
}
run().catch(console.dir);