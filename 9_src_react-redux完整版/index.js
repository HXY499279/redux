import React from 'react';
import ReactDOM from 'react-dom';
//引入Provider组件来给所有需要store的组件提供store
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  //通过props的方式来传递store
  <Provider store={store} >
    <App />
  </Provider>
  ,
  document.getElementById('root')
);



