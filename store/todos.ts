import { createSlice, PayloadAction } from 'redux-starter-kit'
// ______________________________________________________
//
interface Todo {
  id: string
  done: boolean
  task: string
}

const todosModule = createSlice({
  slice: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload)
    }
  }
})

export default todosModule
