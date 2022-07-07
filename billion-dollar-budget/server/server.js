const express = require('express');
const {apolloServer} = require('apollo-server-express');

const{typeDefs,resolvers} = require('./schemas');
const db = require('./config/connection');


const PORT = process.env.PORT|| 3001;
const server = new apolloServer({
    typeDefs,
    resolvers
});
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const startApolloServer =async (typeDefs,resolvers)=>{
    await server.start();
server.applyMiddleware({app});
db.once('open',()=>{
    app.listen(PORT,()=>{
        console.log(`server is now on ${PORT}!`)
    });
})
}

startApolloServer(typeDefs,resolvers);