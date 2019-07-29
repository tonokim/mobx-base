
import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
// import { useTranslation, withTranslation, Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import './page1.less'

// @withTranslation('common')
// @withTranslation(['common'])
// @inject("rootStore")
// @observer
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
    // const { t, i18n } = this.props
    return(
      <div> 
        <p>Name: {user.name}, Age: {user.age}</p>
        <button onClick={this.onAddAge}>Add</button>
        {/* <p>{t('h1')}</p> */}
        <p>1233</p>
        <button>Switch Language</button>
        <h3 styleName="blue">Page1</h3>
        <Link to={{ pathname: '/page2' }}>Go Page2</Link>
      </div>
    )
 }
}