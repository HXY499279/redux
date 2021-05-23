import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

class Count extends Component {
    increment = () => {
        const { value } = this.selectElem
        this.props.increment(value * 1)
    }
    decrement = () => {
        const { value } = this.selectElem
        this.props.decrement(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectElem
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }
    incrementAsync = () => {
        const { value } = this.selectElem
        this.props.incrementAsync(value * 1, 500)
    }

    render() {
        return (
            <Fragment>
                <h1>我是Count组件,下方组件总人数为:{this.props.persons} </h1>
                <h2>当前求和为:{this.props.count}</h2>
                <select name="select" id="select" ref={select => { this.selectElem = select }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
            </Fragment>
        )
    }
}

export default connect(
    state => ({
        persons: state.persons.length,
        count: state.count
    }),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)