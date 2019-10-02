import { Store } from 'redux'
import { configureStore } from 'redux-starter-kit'
import { useSelector } from 'react-redux'
import reducer from './reducer'

// ______________________________________________________
//
export type StoreState = ReturnType<typeof reducer>
export type ReduxStore = Store<StoreState>
// ______________________________________________________
//

export function initStore(state: StoreState) {
  return configureStore({
    preloadedState: state,
    reducer
  })
}

export const useCounterItem = () =>
  useSelector((state: StoreState) => state.counter)
export const useTodosItem = () =>
  useSelector((state: StoreState) => state.todos)
