import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import UserAdd from './components/userAdd'
import EditUser from './components/editUser'
import App from './containers/App'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import photoGrid from './components/photoGrid.js';

import { syncHistoryWithStore } from 'react-router-redux';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}


export const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

export const history = syncHistoryWithStore(browserHistory, store);
const router =(
	<Provider store={store}>
		<Router history={hashHistory} >
			<Route path="/" component={App}>
				<IndexRoute component={photoGrid}></IndexRoute>
				<Route path="/edit/:id" component={EditUser}></Route>
				<Route path="/useradd" component={UserAdd}></Route>
			</Route>
		</Router>
	</Provider>
);


render(router, document.getElementById('root'));
