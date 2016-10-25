/**
 * Created by ypling on 10/25/16.
 */
export default class User {
  constructor({username}) {
    this.inputUsername = username;
  }

  username({id}) {
    return this.inputUsername || "username Value" + id;
  };

  password() {
    return "password Value";
  };
}
