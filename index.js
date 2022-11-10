const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


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