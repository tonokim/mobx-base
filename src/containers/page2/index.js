
import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import { useTranslation, withTranslation, Trans } from 'react-i18next'
import { Link } from 'react-router-dom'

// @inject("rootStore")
// @observer
export default function Page2(){
  const { t, i18n } = useTranslation(['common'])
  return (
    <div>
      <h3>Page2</h3>
      <p>{t('h1')}</p>
      <Trans i18nKey="h1">
        default text
      </Trans>
      <Link to={{ pathname: '/page1' }}>Go Page1</Link>
    </div>
  )
}