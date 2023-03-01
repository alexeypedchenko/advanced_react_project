import { render, screen, fireEvent } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from './Counter'

describe('Counter.test', () => {
  test('should render Counter', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })

  test('should increment value', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })
    const incrementBtn = screen.getByTestId('increment-btn')
    fireEvent.click(incrementBtn)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
  })
  test('should decrement value', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })
    const decrementBtn = screen.getByTestId('decrement-btn')
    fireEvent.click(decrementBtn)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
  })
})
