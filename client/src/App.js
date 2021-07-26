import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'

// components
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
    </Provider>
  )
}

export default App
