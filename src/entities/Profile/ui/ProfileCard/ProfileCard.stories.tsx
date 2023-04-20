import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ProfileCard } from './ProfileCard'
import SrcImg from 'shared/assets/tests/avatar.png'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  data: {
    avatar: SrcImg,
    firstname: 'firstname',
    lastname: 'lastname',
    age: 20,
    city: 'city',
    username: 'username',
  },
}
Default.decorators = [ThemeDecorator(Theme.LIGHT)]

export const DarkTheme = Template.bind({})
DarkTheme.args = {
  data: {
    avatar: SrcImg,
    firstname: 'firstname',
    lastname: 'lastname',
    age: 20,
    city: 'city',
    username: 'username',
  },
}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]

export const WithError = Template.bind({})
WithError.args = {
  error: 'Error title',
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  isLoading: true,
}
