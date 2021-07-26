import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from './../store/actions/todos'

const InputTodo = () => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState('')
  const onSubmitForm = (e) => {
    e.preventDefault()
    const body = { description }
    dispatch(createTodo(body))
    setDescription('')
  }

  return (
    <>
      <h1 className='text-center mt-5'>PERN Todo List</h1>
      <form className='d-flex mt-5' onSubmit={onSubmitForm}>
        <input
          type='text'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success'>Add</button>
      </form>
    </>
  )
}

export default InputTodo
