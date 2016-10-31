/**
 * Created by ypling on 10/25/16.
 */

import Customer from "../schema/Customer";
import {ObjectId} from "mongodb";

export function createCustomer({input}, {db}) {
  let collection = db.collection('customers');
  let customer;
  if (input.referBy) {
    input.referBy = ObjectId(input.referBy);
  }
  return collection.insertOne(input)
    .then(result => {
      customer = result.ops[0];
      if (input.referBy) {
        return collection.updateOne({_id: input.referBy}, {$push: {refered: customer._id}});
      }
    })
    .then(()=> {
      return new Customer(customer);
    })
}

export function removeCustomer({id}, {db}) {
  let collection = db.collection('customers');
  return collection.removeOne({_id: new ObjectId(id)})
    .then(()=> {
        return id;
      }
    )
}