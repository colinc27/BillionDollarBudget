const {Schema, model} = require('mongoose');

const LiabilitiesSchema = new Schema({
    rent:{
        type: Number
    },
    Utilities: {
        type: Number
    },
    reoccurringBills: {
        type: Number
    },
    gas: {
        type: Number
    },
    food: {
        type: Number
    }

}) 

const Liabilities = model('Liabilities',LiabilitiesSchema);
module.exports={Liabilities}