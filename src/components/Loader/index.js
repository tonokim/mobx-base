
import React, { Component } from 'react';
import style from './loader.less'

const Loader = ({ spinning }) => (
  <div styleName="loader" className={{ [style.hidden]: !spinning }}>
    <div styleName="warpper">
      <div styleName="inner" />
      <div styleName="text" >Loading...</div>
    </div>
  </div>
)

export default Loader