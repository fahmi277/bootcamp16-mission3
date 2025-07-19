const { status } = require("express/lib/response")

let todoList =[]

const addTodo = (desc) => {

    todoList = [{
        desc: desc,
        status:"todo"
    },...todoList]

    
}