import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo } from './../store/actions/todos'

const EditTodo = ({ todo }) => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState(todo.description)

  // edit description fn
  const updateDescription = async (e) => {
    e.preventDefault()
    const body = { description }
    dispatch(updateTodo(todo.todo_id, body))
  }

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type='button'
        className='btn btn-warning'
        data-bs-toggle='modal'
        data-bs-target={`#modal${todo.todo_id}`}
        onClick={(e) => setDescription(todo.description)}>
        Edit
      </button>

      {/* <!-- Modal --> */}
      <div
        className='modal fade'
        id={`modal${todo.todo_id}`}
        tabIndex='-1'
        aria-labelledby={`modal${todo.todo_id}Label`}
        aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id={`modal${todo.todo_id}Label`}>
                Edit Todo
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={(e) => setDescription(todo.description)}></button>
            </div>

            {/* MODAL BODY */}
            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
                onClick={(e) => setDescription(todo.description)}>
                Cancel
              </button>
              <button
                type='button'
                className='btn btn-warning'
                data-bs-dismiss='modal'
                onClick={(e) => updateDescription(e)}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditTodo
