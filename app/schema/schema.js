/**
 *
 * Created by ypling on 10/24/16.
 */
import {buildSchema} from 'graphql';
import customers from '../query/customers';

export const schema = buildSchema(`
  type Query {
    customers: [Customer]
  }
  
  # some description
  type User {
    username(id:Int): String
    password: String
  }
  
  # represent to a customer
  type Customer {
    id: ID!
    weiChatId: String
    weiChatName: String
    #customer ID
    refered: ID
    referBy: ID
  }
`);

export const root = {
  customers
};