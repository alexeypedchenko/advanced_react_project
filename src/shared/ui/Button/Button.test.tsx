import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('Button', () => {
  test('should render Button', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })
  test('should have class clear', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Button</Button>)
    expect(screen.getByText('Button')).toHaveClass('clear')
  })
})
