import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/index'
// import { TodoProvider } from './contexts'

import { TodoForm } from './components/index'
import { TodoItem } from './components/index'



function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {

    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    // setTodos((prev) => [{ id: , ...todo }, ...prev])

  }

  const updateTodo = (id, todo) => {

    setTodos((prev) => prev.map((PrevTodo) => (PrevTodo.id === todo.id ? todo : PrevTodo)))  // chances to geting error on this code for todos or aebey bug 

  }


  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((PrevTodo) => PrevTodo.id !== id))

  }


  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((PrevTodo) => PrevTodo.id === id ? { ...PrevTodo, completed: !PrevTodo.completed } : PrevTodo))
  }



  useEffect(() => {

    const todos = JSON.parse(localStorage.getItem("todos"))
    // console.log(todos)
    if (todos && todos.length > 0) {
      setTodos(todos)
    }

  }, [])

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])

  // console.log(todos)
  // todos.map(todo => console.log(todo.id))

  return (

    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />

              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )

}


export default App



