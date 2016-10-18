import express from "express";
import graphqlHTTP from "express-graphql";
import {buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLString} from "graphql";

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    description:'some discription',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "Hello world!"
        }
      }
    }
  })
});

let app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(8002, () => console.log('Now browse to localhost:8002/graphql'));