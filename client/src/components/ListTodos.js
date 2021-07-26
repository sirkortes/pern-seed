import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditTodo from './EditTodo'
import { getTodos, deleteTodo } from './../store/actions/todos'

const ListTodos = () => {
  const dispatch = useDispatch()

  // gets all todos on init with useEffect
  const todos = useSelector((state) => state.todos)

  // fn to dispatch deleteTodo which filters from store state
  const onDeleteTodo = (id) => dispatch(deleteTodo(id))

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

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
                <EditTodo todo={todo} />
              </td>
              <td>
                <button className='btn btn-danger' onClick={(e) => onDeleteTodo(todo.todo_id)}>
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
