import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  text: 'Some text...',
}
Default.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({})
Dark.args = {
  title: 'Title',
  text: 'Some text...',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const ThemeError = Template.bind({})
ThemeError.args = {
  title: 'Title',
  text: 'Some text...',
  theme: TextTheme.ERROR,
}

export const TitleOnly = Template.bind({})
TitleOnly.args = {
  title: 'Title',
}
export const TextOnly = Template.bind({})
TextOnly.args = {
  text: 'Some text...',
}

export const TextSizeMd = Template.bind({})
TextSizeMd.args = {
  title: 'Title',
  text: 'text',
  size: 'md',
}
export const TextSizeLg = Template.bind({})
TextSizeLg.args = {
  title: 'Title',
  text: 'text',
  size: 'lg',
}
