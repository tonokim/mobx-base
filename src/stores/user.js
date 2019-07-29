import { observable, computed, toJS, action } from "mobx"
import i18n from "i18next"

class User {
  constructor(rootStore) {
    this.rootStore = rootStore
  }
  @observable name = 'sam'
  @observable age = 18
  
  @action onChange = (age) => {
    this.age = age
    console.log(i18n.t('h1'))
  }
  
}

export default User
