
import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import i18n from "i18next"
import { useTranslation, withTranslation, Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import './page1.less'

// @withTranslation('common')
@withTranslation(['translation'])
@inject("rootStore")
@observer
export default class  extends Component {
  constructor(props){
    super(props)
    this.store = this.props.rootStore
  }

  componentDidMount() {
    console.log(i18n.t('h1'))
  }

  onAddAge = () => {
    const { user } = this.store
    user.onChange(++user.age)
  }
  
  onSwitch = () => {
    const { i18n } = this.props
    i18n.changeLanguage(i18n.language == 'en'?'zh':'en');
  }

  render(){
    const { user } = this.store
    const { t, i18n } = this.props
    return(
      <div> 
        <p>Name: {user.name}, Age: {user.age}</p>
        <button onClick={this.onAddAge}>Add</button>
        <p>{t('h1')}</p>
        <p>1233</p>
        <button onClick={this.onSwitch}>Switch Language</button>
        <h3 styleName="blue">Page1</h3>
        <Link to={{ pathname: '/page2' }}>Go Page2</Link>
      </div>
    )
 }
}