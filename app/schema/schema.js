/**
 *
 * Created by ypling on 10/24/16.
 */
import {buildSchema} from 'graphql';
import viewer from '../query/viewer';
import {createCustomer, removeCustomer} from '../mutation/customers';

export const schema = buildSchema(`
  type Query {
    viewer(token: String): User
  }
  
  # some description
  type User {
    id: ID!
    username: String
    customers(ids: [ID]): [Customer]
  }
  
  # represent to a customer
  type Customer {
    id: ID!
    weiChatId: String
    weiChatName: String
    refered: [ID]
    referBy: ID
  }
  
  type Mutation {
    createCustomer(input: CustomerInput!): Customer
    removeCustomer(id: ID!): ID
  }
  
  input CustomerInput {
    weiChatId: String
    weiChatName: String
    referBy: ID
  }
`);

export const root = {
  viewer,
  createCustomer,
  removeCustomer
};