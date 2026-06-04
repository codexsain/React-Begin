import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/index'
// import { TodoProvider } from './contexts'


function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {

    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])

  }

  const updateTodo = (id, todo) => {

    setTodos((prev) => prev.map((PrevTodo) => (PrevTodo.id === todo.id ? todos : PrevTodo)))  // chances to geting error on this code for todos or todo 

  }


  const deleteTodo = () => {
    setTodos((prev) => prev.filter((PrevTodo) => PrevTodo.id !== id))

  }


  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((PrevTodo) => PrevTodo.id === id ? { ...PrevTodo, completed: !PrevTodo.completed } : PrevTodo))
  }



  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.lenght > 0) {
      setTodos(todos)
    }

  }, [])

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])




  return (

    <TodoProvider value={{ todos, updateTodo, addTodo, deleteTodo, toggleTodo }} >

      <div className=' bg-blue-900' >hello  world</div>

    </TodoProvider>
  )

}


export default App



