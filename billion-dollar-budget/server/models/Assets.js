const {Schema, model} = require('mongoose');

const paycheckSchema = new Schema ({
    salary: {
        type: Number 
    },
    createdAt:{
        type: Date,
        default: Date.now

    },
    username: {
        type: String,
        required: true
      }
},
{
    toJSON:{
        getters: true
    }

})

const Assets = model('Assets',paycheckSchema);
module.exports = Assets