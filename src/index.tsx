import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import '~/index.css';

import App from '~/App';
import reducers, { CombinedState } from '~/store/reducers';

const store: Store<CombinedState> = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));

