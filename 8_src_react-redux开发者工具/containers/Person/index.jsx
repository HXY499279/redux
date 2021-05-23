import React, { Component } from 'react'
import {nanoid} from 'nanoid';
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'


class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        if ( name !== '' && age !== '') {
            this.props.addPerson(personObj)
        }
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>我是Person组件，上方组件求和为：{this.props.he}</h2>
                <input ref={input => this.nameNode = input} type="text" placeholder="输入名字" />
                <input ref={input => this.ageNode = input} type="text" placeholder="输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {/* <li>名字1--年龄1</li>
                        <li>名字2--年龄2</li>
                        <li>名字3--年龄3</li> */}
                    {this.props.personObj.map((item) => {
                        return (<li key={item.id}>{item.name}---{item.age}</li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({personObj:state.rens,he:state.he}),
    {
        addPerson: createAddPersonAction
    }
)(Person)
