const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.listen(3001,()=>{
    console.log('Server is on port 3001')
})
mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost:27017/billion-dollar-budget',{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

mongoose.set ('debug',true);