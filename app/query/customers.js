/**
 * Created by ypling on 10/25/16.
 */

import Customer from '../schema/Customer';
export default function({}, {db}) {
  let collection = db.collection('customers');
  return collection.find().toArray().then(customers =>{
    return customers.map(customer => new Customer(customer));
  })
}