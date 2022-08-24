import {MongoClient, mongodb} from "mongodb";

const express = require('express');
const app = express();
const port = 3001;

const url = "mongodb+srv://BigChonk:DFXOzRp8WyH2ixwS@pyosikdb.bdcgazz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
    res.send(console.log(req.body));
})

app.listen(process.env.PORT ||port, () => {
    console.log(`Example app listening on port ${port}`)
})