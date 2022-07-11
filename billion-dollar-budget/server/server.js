const express = require('express');
const { ApolloSever } = require('apollo-server-express');
const {typeDefs, resolvers} = require('/schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloSever({
    typeDefs,
    resolvers
})
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async (typeDefs,resolvers) => {
    await server.start();
    server.applyMiddleware({app});

db.once('open', () => {
    app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});
});
}

startApolloServer(typeDefs,resolvers);no