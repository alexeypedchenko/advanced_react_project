import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { LoginForm } from './LoginForm'

export default {
  title: 'feature/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
)

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'username',
      password: 'password',
    },
  }),
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'username',
      password: 'password',
      isLoading: true,
    },
  }),
]

export const WithError = Template.bind({})
WithError.args = {}
WithError.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'username',
      password: 'password',
      error: 'some error',
    },
  }),
]
