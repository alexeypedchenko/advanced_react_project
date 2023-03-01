import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

import { Button, ButtonTheme, ButtonSize } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Clear',
  theme: ButtonTheme.CLEAR,
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Clear inverted',
  theme: ButtonTheme.CLEAR_INVERTED,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline',
  theme: ButtonTheme.OUTLINE,
}

export const OutlineM = Template.bind({})
OutlineM.args = {
  children: 'Outline M',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M,
}
export const OutlineL = Template.bind({})
OutlineL.args = {
  children: 'Outline L',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}
export const OutlineXL = Template.bind({})
OutlineXL.args = {
  children: 'Outline XL',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Outline Dark',
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
  children: 'Background Button',
  theme: ButtonTheme.BACKGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Inverted Background Button',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
  children: 'sq',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'md',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M,
}

export const Large = Template.bind({})
Large.args = {
  children: 'lg',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  children: 'xl',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
}
