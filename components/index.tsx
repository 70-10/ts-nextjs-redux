import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'
import { useCounterItem } from '../store'
import { useDispatch } from 'react-redux'
import counterModule from '../store/counter'

// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {
  const { count } = useCounterItem()
  const dispatch = useDispatch()

  return (
    <>
      <div className={props.className}>Welcome to next.js!</div>
      <p>{count}</p>
      <button onClick={() => dispatch(counterModule.actions.increment())}>
        +1
      </button>
      <button onClick={() => dispatch(counterModule.actions.setCount(0))}>
        Reset
      </button>
    </>
  )
}

// ______________________________________________________
//
const StyledComponent = styled(Component)`
  color: #f0f;
`
// ______________________________________________________
//
export default StyledComponent
