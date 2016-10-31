/**
 * Created by ypling on 10/25/16.
 */
export default class Customer {
  constructor({_id, weiChatId, weiChatName, refered, referBy}) {
    Object.assign(this, {
      _id,
      _weiChatId: weiChatId,
      _weiChatName: weiChatName,
      _refered: refered,
      _referBy: referBy
    })
  }

  _fetchCustomer(db) {
    if (this._fetching) {
      return this._fetching;
    } else {
      let collection = db.collection('customers');
      this._fetching = collection.findOne({_id: this._id});
      return this._fetching;
    }
  }

  id() {
    return this._id;
  }

  weiChatId(query, {db}) {
    if (this._weiChatId !== undefined) return this._weiChatId;
    return this._fetchCustomer(db).then(data => data.weiChatId);
  }

  weiChatName(query, {db}) {
    if (this._weiChatName !== undefined) return this._weiChatName;
    return this._fetchCustomerh(db).then(data => data.weiChatName)
  }

  refered(query, {db}) {
    if (this._refered !== undefined) return this._refered;
    return this._fetchCustomer(db).then(data => data.refered)
  }

  referBy(query, {db}) {
    if (this._referBy !== undefined) return this._referBy;
    return this._fetchCustomer(db).then(data => data.referBy)
  }
}
