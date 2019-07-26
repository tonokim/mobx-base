import { observable, computed, toJS, action } from "mobx"

class User {
  constructor(rootStore) {
    this.rootStore = rootStore
  }
  @observable name = 'sam'
  @observable age = 18
  
  @action onChange = (age) => {
    this.age = age
  }
  
}

export default User
