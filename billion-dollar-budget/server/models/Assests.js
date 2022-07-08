const {Schema, model} = require('mongoose');

const paycheckSchema = new Schema ({
    salary: {
        type: Number 
    },
},
{
    toJSON:{
        getters: true
    }

})

const Assests = model('Assets',paycheckSchema);
module.exports = {Assests}