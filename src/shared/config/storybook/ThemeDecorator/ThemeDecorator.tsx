import { Story } from '@storybook/react'
import { Theme, ThemePropvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <ThemePropvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemePropvider>
  )
}
