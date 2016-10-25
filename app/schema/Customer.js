/**
 * Created by ypling on 10/25/16.
 */
export default class Customer {
  constructor(customer) {
    this.id = customer._id;
    this.weiChatId = customer.weiChatId;
    this.weiChatName = customer.weiChatName;
    this.refered = customer.refered;
    this.referBy = customer.referBy;
  }
}
