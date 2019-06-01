import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const store = createStore(
    reducer, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
