const {User, Assests,Liabilities} = require('../models')
const resolvers = {
Query:{
    assests:async()=>{
        return Assests.find().sort({paycheck})
    }
} 
}

module.exports = resolvers