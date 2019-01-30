import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import root from './store/root-reducer'

export const store = createStore(root, {isConnectedToRedux: true})

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)