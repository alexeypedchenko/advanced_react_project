import { render, screen, fireEvent } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
  test('should render Sidebar', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('should toggle Sidebar', () => {
    renderWithTranslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(toggleBtn).toBeInTheDocument()
    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
