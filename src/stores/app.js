import { observable, computed, toJS, action } from "mobx"

class App {
  constructor(rootStore) {
    this.rootStore = rootStore
  }
  @observable appName = 'testapp'
  
  @action onChange = (name) => {
    this.appName = name
  }
  
}

export default App
