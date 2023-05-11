import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Skeleton } from './Skeleton'

export default {
  title: 'Shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
)

export const Default = Template.bind({})
Default.decorators = [ThemeDecorator(Theme.LIGHT)]
Default.args = { width: '100%', height: 100 }

export const Circle = Template.bind({})
Circle.args = {
  width: 100,
  height: 100,
  radius: '50%',
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = { width: '100%', height: 100 }

export const CircleDark = Template.bind({})
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
CircleDark.args = {
  width: 100,
  height: 100,
  radius: '50%',
}
