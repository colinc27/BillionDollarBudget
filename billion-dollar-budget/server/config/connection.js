const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost:27017/billion-dollar-budget',
{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;