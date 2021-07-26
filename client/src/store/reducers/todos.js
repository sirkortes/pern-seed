import { GET_TODOS_SUCCESS, DELETE_TODO_SUCCESS, CREATE_TODO_SUCCESS, UPDATE_TODO_SUCCESS } from '../actions/constants'

const todosReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_TODOS_SUCCESS:
      return payload
    case CREATE_TODO_SUCCESS:
      return [...state, payload]
    case UPDATE_TODO_SUCCESS:
      return state.map((todo) => {
        if (todo.todo_id === payload.id) {
          todo.description = payload.body.description
        }
        return todo
      })
    case DELETE_TODO_SUCCESS:
      return state.filter((todo) => todo.todo_id !== payload.id)
    default:
      return state
  }
}

export default todosReducer
