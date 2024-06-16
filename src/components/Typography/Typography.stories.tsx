import Typography from './Typography'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: Typography,
  title: 'Components/Typography',
  argTypes: {
    size: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'subtitle'],
      control: 'select'
    },
    component: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      control: 'select'
    }
  }
} as Meta<typeof Typography>

type Story = StoryObj<typeof Typography>

export const Default : Story = {
  render: (args) => <Typography {...args} component='h5'>test</Typography>
}