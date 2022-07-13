const {Schema, model} = require('mongoose');

const AssestsSchema = new Schema ({
    paycheck: {
        type: Number 
    }
})

const Assests = model('Assets',AssestsSchema);
module.exports = {Assests}