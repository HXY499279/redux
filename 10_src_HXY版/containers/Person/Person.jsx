import React, { Component, Fragment } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'


class Person extends Component {

    addPerson = () => {
        const name = this.nameElem.value
        const age = this.ageElem.value
        const personObj = {id:nanoid(),name,age}
        if (name !== '' && age !== '') {
            this.props.addPerson(personObj)
        }
        this.nameElem.value = ''
        this.ageElem.value = ''
    }

    render() {
        return (
            <Fragment>
                <h1>我是Person组件,上方组件求和为:{this.props.count} </h1>
                <input type="text" ref={input => { this.nameElem = input }} placeholder="输入名字" />
                <input type="number" ref={input => { this.ageElem = input }} placeholder="输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {this.props.persons.map(item => {
                        return (
                            <li key={item.id}>姓名:{item.name}  年龄:{item.age}</li>
                        )
                    })}
                </ul>
            </Fragment>
        )
    }
}

export default connect(
    state => ({
        persons: state.persons,
        count: state.count
    }),
    {
        addPerson
    }
)(Person)