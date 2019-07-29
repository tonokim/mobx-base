
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'

import App from "./containers/App"
import rootStore from './stores'

import '@/utils/i18n'

render(
	<Router>
		<Provider rootStore={rootStore}>
			<App />
		</Provider>
	</Router>,
	document.getElementById("root")
)