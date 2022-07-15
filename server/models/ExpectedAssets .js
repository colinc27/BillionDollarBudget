const {Schema, model} = require('mongoose');

const expectedPaycheckSchema = new Schema ({
    expectedSalary: {
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

const expectedAssets = model('expectedAssets',expectedPaycheckSchema);
module.exports = expectedAssets