const {Schema, model} = require('mongoose');

const LiabilitiesSchema = new Schema({
    rent:{
        type: String
        
    },
    utilities: {
        type: String
    },
    reoccurringBills: {
        type: String
    },
    gas: {
        type: String
    },
    food: {
        type: String
    },
    username: {
        type: String,
        required: true
      },
      monthName: {
        type: String
    },
    year: {
        type: String
    } 

},{
    toJSON: {getters:true}
}) 

const Liabilities = model('Liabilities',LiabilitiesSchema);
module.exports= Liabilities