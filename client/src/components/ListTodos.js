import React, { useEffect, useState } from 'react'

const ListTodos = () => {
  const [todos, setTodos] = useState([])

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
      })

      console.log('deleteTodo', deleteTodo)
      setTodos(todos.filter((todo) => todo.todo_id !== id))
    } catch (error) {
      console.log(error.message)
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos')
      const jsonData = await response.json()
      setTodos(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }
  useEffect(() => getTodos(), [])

  return (
    <>
      <h1>List Todos</h1>
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Description</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <th scope='row'>{todo.todo_id}</th>
              <td>{todo.description}</td>
              <td>
                <button className='btn btn-warning'>Edit</button>
              </td>
              <td>
                <button className='btn btn-danger' onClick={(e) => deleteTodo(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListTodos
