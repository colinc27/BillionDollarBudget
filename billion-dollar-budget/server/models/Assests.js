const {Schema, model} = require('mongoose');

const AssestsSchema = new Schema ({
    paycheck: {
        type: Number 
    }
},
{
    toJSON:{
        getters: true
    }

})

const Assests = model('Assets',AssestsSchema);
module.exports = {Assests}