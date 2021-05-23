/*
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
//引入createStore,专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux';
//引入为count组件服务的reducer
import countReducer from './count_reducer';
//引入redux-thunk，用于支持异步action。因为异步action返回值为一个函数，而store只接收对象类型的action，所以需要引入中间件调用函数得到函数里面的对象action
import thunk from 'redux-thunk'
//暴露store
export default createStore(countReducer, applyMiddleware(thunk))