import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/index'





function TodoItem(todo) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        //console.log(todo.id);
        toggleComplete(todo.id)
    }


 




    return (
        <div>

        </div>
    )
}

export default TotododoItem
