import express  from "express";
import mongoose from "mongoose";

import data from "./data.js";
import Videos from "./dbModel.js";


// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
});

// db config
const connection_url = "" 

mongoose.connect(connection_url, {
    useNewUrlParser : true,
    useUnifiedTopology: true
});

// api end-point
app.get('/', (req, res) => {
    res.status(200).send("hello world");
});

app.get('/v1/posts/', (req, res) => {
    res.status(200).send(data);
});

app.get('/v2/posts', (req, res)=>{
    Videos.find().then((err, data)=>{
        if(err){
            res.status(200).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});

app.post('/v2/posts/', (req, res) => {
    const dbVideos = req.body;

    Videos.create( dbVideos).then((err, data)=>{
        if(err){
            res.status(201).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
});

// listener
app.listen(port, () => {console.log(`listing on ${port}`)});
