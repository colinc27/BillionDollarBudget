const {Schema, model} = require('mongoose');

const expectedLiabilitiesSchema = new Schema({
    expectedRent:{
        type: Number
        
    },
    expectedUtilities: {
        type: Number
    },
    expectedReoccurringBills: {
        type: Number
    },
    expectedGas: {
        type: Number
    },
    expectedFood: {
        type: Number
    }

},{
    toJSON: {getters:true}
}) 

const Liabilities = model('Liabilities',LiabilitiesSchema);
module.exports= Liabilities