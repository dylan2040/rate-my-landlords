const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose')
require('dotenv').config()

/* DATABASE CONNECTION */
//process.env.DB_CONNECTION_STRING, 
mongoose.connect(
  "mongodb+srv://Apierre1:Annasophiaasdf1!1@cluster0.w8xvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",  
  {useNewUrlParser: true, useUnifiedTopology: true }, 
  () => console.log('connected to db')
)
 
const db = mongoose.connection 

const typeDefs = gql`
  type Landlord {
    name: String 
    id: String 
    city: String 
    state: String 
    street: String 
    zipcode: String
  }

  input AddressObj{
    street: String, 
    city: String, 
    zipcode: String
  }

  type Query {
    getResults(city: String, street: String, zipcode: String): [Landlord]
    hello: String, 
    getAllLandlords(id: String): [Landlord]
  }
`;
 
const resolvers = {
  Query: {
    getResults: (__, args, context) => {
      console.log(args)
      return [
        {
          name: 'test test', 
          id: '12345', 
          city: args.city, 
          state: 'test', 
          street: args.address, 
          zipcode: args.zipcode, 
          message: 'Got results!'
        },
        {
          name: 'test test2', 
          id: '123452', 
          city: args.city, 
          state: 'test2', 
          street: args.address, 
          zipcode: args.zipcode, 
          message: 'Got results!2'
        }
      ]},
    getAllLandlords: (__, args, context) => [{
      name: 'name', 
      id: args.id, 
      city: 'city', 
      state: 'state', 
      street: 'street', 
      zipcode: 'zipcode'
    }],
    hello: () => 'hello'
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
