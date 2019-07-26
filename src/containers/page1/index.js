
import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import { Link } from 'react-router-dom'
import './page1.less'

@inject("rootStore")
@observer
export default class  extends Component {
  constructor(props){
    super(props)
    this.store = this.props.rootStore
  }

  onAddAge = () => {
    const { user } = this.store
    user.onChange(++user.age)
  }
  
  render(){
    const { user } = this.store
    return(
      <div> 
        <p>Name: {user.name}, Age: {user.age}</p>
        <button onClick={this.onAddAge}>Add</button>
        <h3 styleName="blue">Page1</h3>
        <Link to={{ pathname: '/page2' }}>Go Page2</Link>
      </div>
    )
 }
}