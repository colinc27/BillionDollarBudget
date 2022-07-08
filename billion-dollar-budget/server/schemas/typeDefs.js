const {gql} = require('apollo-server-express');

const typeDefs= gql`
type Assests{
    _id: ID
    paycheck: Number
    Posted: String
}
type Query{
    assests: [Assests]
}`;

module.exports=typeDefs