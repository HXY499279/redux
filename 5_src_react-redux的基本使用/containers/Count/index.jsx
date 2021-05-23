//引入Count的UI组件
import CountUI from '../../components/Count/index'
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action"
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

/*
    1.mapStateToProps函数返回的是一个对象
    2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    3.mapStateToProps用于传递状态
    4.因为mapStateToProps函数是react-redux的connect调用的，并且容器组件也收到了store，所以react-redux在调用mapStateToProps函数的时候会自己从store拿到状态state并传递到mapStateToProps函数中
*/
function mapStateToProps(state) {
    return { count: state }
}
/*
    1.mapDispatchToProps函数返回的是一个对象
    2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    3.mapDispatchToProps用于传递状态
    4.因为mapDispatchToProps函数是react-redux的connect调用的，并且容器组件也收到了store，所以react-redux在调用mapDispatchToProps函数的时候会自己从store拿到方法dispatch并传递到mapDispatchToProps函数中
*/
function mapDispatchToProps(dispatch) {
    return {
        //通知redux执行加法
        jia: (number) => { dispatch(createIncrementAction(number)) },
        jian: (number) => { dispatch(createDecrementAction(number)) },
        asyncjia: (number, time) => { dispatch(createIncrementAsyncAction(number, time)) }
    }
}
//使用connect()()创建并暴露一个Count的容器组件,connect函数需要传递两个参数，这两个参数的类型是函数，第一个参数是状态，第二个参数是操作状态的方法
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
