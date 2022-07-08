const {Schema, model} = require('mongoose');

const LiabilitiesSchema = new Schema({
    rent:{
        type: Number
        
    },
    utilities: {
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

},{
    toJSON: {getters:true}
}) 

const Liabilities = model('Liabilities',LiabilitiesSchema);
module.exports= Liabilities