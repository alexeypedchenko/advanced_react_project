import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import SrcImg from 'shared/assets/tests/avatar.png'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    src: SrcImg,
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 150,
}
Default.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SmallSize = Template.bind({})
SmallSize.args = {
  size: 50,
}
SmallSize.decorators = [ThemeDecorator(Theme.LIGHT)]
