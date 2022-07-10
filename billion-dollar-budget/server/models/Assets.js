const {Schema, model} = require('mongoose');

const paycheckSchema = new Schema ({
    salary: {
        type: Number 
    },
    createdAt:{
        type: Date,
        default: Date.now

    },
},
{
    toJSON:{
        getters: true
    }

})

const Assets = model('Assets',paycheckSchema);
module.exports = Assets