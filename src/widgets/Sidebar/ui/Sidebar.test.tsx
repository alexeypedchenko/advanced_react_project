import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
  test('should render Sidebar', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('should toggle Sidebar', () => {
    componentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(toggleBtn).toBeInTheDocument()
    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
