const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose')

/* DATABASE CONNECTION */
//process.env.DB_CONNECTION_STRING, 
mongoose.connect(
  "mongodb+srv://Apierre1:Annasophiaasdf1!1@cluster0.w8xvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",  
  {useNewUrlParser: true, useUnifiedTopology: true }, 
  () => console.log('connected to db')
)
 
const db = mongoose.connection 

const typeDefs = gql`
  type Landlords {
    name: String 
    id: String 
    city: String 
    state: String 
    street: String 
    zipcode: String
}

  type Query {
    getResults: Landlords
  }

`;
 
const resolvers = {
  Query: {
    getResults: () => ({
      name: 'test test', 
      id: '12345', 
      city: 'test', 
      state: 'test', 
      street: 'test', 
      zipcode: 'test'
    })
  },
};
 
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context:  {
    db
  }
});
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
