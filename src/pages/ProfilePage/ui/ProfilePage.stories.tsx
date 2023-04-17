import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import SrcImg from 'shared/assets/tests/avatar.png'

import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args: any) => (
  <ProfilePage {...args} />
)

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        avatar: SrcImg,
        firstname: 'firstname',
        lastname: 'lastname',
        age: 20,
        city: 'city',
        username: 'username',
      },
    },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        avatar: SrcImg,
        firstname: 'firstname',
        lastname: 'lastname',
        age: 20,
        city: 'city',
        username: 'username',
      },
    },
  }),
]
