import Textfield from './Textfield'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: Textfield,
  title: 'Components/Textfield',
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: 'select'
    }
  }
} as Meta<typeof Textfield>

type Story = StoryObj<typeof Textfield>

export const Large : Story = {
  render: (args) => <Textfield placeholder='placeholder' {...args} />
}

export const Small : Story = {
  render: (args) => <Textfield placeholder='placeholder' size='small' {...args} />
}