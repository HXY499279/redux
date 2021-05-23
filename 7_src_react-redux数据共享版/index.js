import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  //Provider会自动给所有子代容器分发store
  <Provider store={store} >
    <App />
  </Provider>
  ,
  document.getElementById('root')
);



