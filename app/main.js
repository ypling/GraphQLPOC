import express from "express";
import graphqlHTTP from "express-graphql";
import {MongoClient} from "mongodb";
import {schema, root} from './schema/schema';

// let schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     description: 'some discription',
//     fields: {
//       me: {
//         args: {
//           username: {type: GraphQLString}
//         },
//         type: new GraphQLObjectType({
//           name: 'User',
//           fields: {
//             username: {
//               type: GraphQLString,
//               resolve(parent) {
//                 console.log();
//                 return "username Value";
//               }
//             },
//             password: {
//               type: GraphQLString,
//               resolve() {
//                 return "password Value";
//               }
//             }
//           }
//         }),
//         resolve() {
//           return {username:'test Username', password:'test Password'}
//         }
//       }
//     }
//   })
// });



let app = express();

// Connection URL
const url = 'mongodb://localhost:27017/REFERRAL_REWARDS';

// Use connect method to connect to the server
MongoClient.connect(url, (err, db) => {
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    context: {db}
  }));
  app.listen(8002, () => console.log('Now browse to localhost:8002/graphql'));
});
