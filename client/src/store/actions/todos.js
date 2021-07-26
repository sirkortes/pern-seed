import {
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILED,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILED,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILED
} from './constants'

export const getTodos = () => async (dispatch) => {
  try {
    //
    const response = await fetch('/todos')
    const payload = await response.json()
    dispatch({ type: GET_TODOS_SUCCESS, payload })
    //
  } catch (error) {
    dispatch({ type: GET_TODOS_FAILED, error })
  }
}

export const createTodo = (body) => async (dispatch) => {
  try {
    //
    const response = await fetch('/todos', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body)
    })
    const payload = await response.json()
    dispatch({ type: CREATE_TODO_SUCCESS, payload })
    //
  } catch (error) {
    dispatch({ type: CREATE_TODO_FAILED, error })
  }
}

export const updateTodo = (id, body) => async (dispatch) => {
  try {
    //
    const response = await fetch(`/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body)
    })
    const data = await response.json()
    dispatch({ type: UPDATE_TODO_SUCCESS, payload: { id, body, data } })
    //
  } catch (error) {
    dispatch({ type: UPDATE_TODO_FAILED, error })
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  try {
    //
    const response = await fetch(`/todos/${id}`, { method: 'DELETE' })
    const data = await response.json()
    dispatch({ type: DELETE_TODO_SUCCESS, payload: { id, data } })
    //
  } catch (error) {
    dispatch({ type: DELETE_TODO_FAILED, error })
  }
}
