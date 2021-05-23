import React, { Component } from 'react'
//引入容器组件Count
import Count from './containers/Count/index'
//引入容器组件Person
import Person from './containers/Person/index'

export default class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                <hr />
                <Person/>
            </div>
        )
    }
}
