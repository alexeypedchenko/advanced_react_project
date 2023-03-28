import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from './Select'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Select',
  options: [
    {
      value: 'option-1',
      content: 'option-1',
    },
    {
      value: 'option-2',
      content: 'option-2',
    },
    {
      value: 'option-3',
      content: 'option-3',
    },
  ],
}
Default.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Readonly = Template.bind({})
Readonly.args = {
  label: 'Readonly Select',
  readonly: true,
  options: [
    {
      value: 'option-1',
      content: 'option-1',
    },
    {
      value: 'option-2',
      content: 'option-2',
    },
    {
      value: 'option-3',
      content: 'option-3',
    },
  ],
}
Readonly.decorators = [ThemeDecorator(Theme.LIGHT)]
