/*
    创建Person组件的actionCreator
    该文件专门为Person组件生成action对象
*/
//引入定义的常量
import { ADD_PERSON } from '../constant'

export const addPerson = personObj => ({ type: ADD_PERSON, data: personObj })