import IconButton from './IconButton'

import type { Meta, StoryObj } from '@storybook/react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

export default {
  component: IconButton,
  title: 'Components/Icon Button',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'gray'],
      control: 'select'
    },
    size: {
      options: ['large', 'small'],
      control: 'select'
    },

  }
} as Meta<typeof IconButton>

type Story = StoryObj<typeof IconButton>

export const Primary : Story = {
  render: () => <IconButton color='primary'>
    <ContentCopyIcon fontSize='medium' />
  </IconButton>
}

export const Secondary : Story = {
  render: () => <IconButton color='secondary'>
    <ContentCopyIcon fontSize='medium' />
  </IconButton>
}

export const Gray : Story = {
  render: () => <IconButton color='gray'>
    <ContentCopyIcon fontSize='medium' />
  </IconButton>
}