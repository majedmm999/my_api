const express=require('express');
const myRouter = require('./routes/product');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors= require('cors');
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/' , myRouter);

mongoose.connect('mongodb+srv://majed:2bqTcnuqRj3kYy4f@cluster0.jdn7k.mongodb.net/myDb?retryWrites=true&w=majority',()=>{
    console.log('connect to mongo db suscc');
    app.listen(process.env.PORT || 8080 ,()=>{
        console.log('running server add PORT');
})
})

