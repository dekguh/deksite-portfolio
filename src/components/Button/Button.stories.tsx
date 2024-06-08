import Button from './Button'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'select' }
    }
  }
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button {...args}>button</Button>,
}

export const Secondary: Story = {
  render: (args) => <Button color='secondary' {...args}>button</Button>,
}