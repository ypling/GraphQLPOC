/**
 * Created by ypling on 10/25/16.
 */
import Customer from './Customer';
import {ObjectId} from 'mongodb';
export default class User {
  constructor({_id}) {
    this._id = _id;
  }

  id() {
    return this._id
  }
  
  customers({ids}, {db}) {
    let collection = db.collection('customers');
    let query;
    if(ids){
      query = {_id: {$in: ids.map(id => new ObjectId(id))}}
    }
    return collection.find(query).toArray().then(customers =>{
      return customers.map(customer => new Customer(customer));
    })
  }
}
