import React, { Component } from 'react'
//引入nanoid来创建随机id
import { nanoid } from 'nanoid';
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入actionCreator
import { addPerson } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        if (name !== '' && age !== '') {
            this.props.addPerson(personObj)
        }
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>我是Person组件，上方组件求和为：{this.props.count}</h2>
                <input ref={input => this.nameNode = input} type="text" placeholder="输入名字" />
                <input ref={input => this.ageNode = input} type="text" placeholder="输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {this.props.persons.map((item) => {
                        return (<li key={item.id}>{item.name}---{item.age}</li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(
    //从store获取到数据state后,解析state中的数据来传递给UI组件
    state => ({
        persons: state.persons,
        count: state.count
    }),
    {
        addPerson
    }
)(Person)
