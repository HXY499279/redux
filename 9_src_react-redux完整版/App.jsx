import React, { Component } from 'react'
//引入容器组件
import Count from './containers/Count/index'
import Person from './containers/Person/index'

export default class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                <hr />
                <Person/>
                <A />
            </div>
        )
    }
}
