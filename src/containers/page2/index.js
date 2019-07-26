
import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import { Link } from 'react-router-dom'

// @inject("rootStore")
// @observer
export default function Page2(){
  return (
    <div>
      <h3>Page2</h3>
      <Link to={{ pathname: '/page1' }}>Go Page1</Link>
    </div>
  )
}