const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zbie1as.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// async function run() {
// 	try {//code to interact with Database
// 	}
// 	finally {
// 	}
// }
// run().catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Snap server is running');
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})