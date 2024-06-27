import Navigation from './Navigation'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: Navigation,
  title: 'Components/Navigation'
} as Meta<typeof Navigation>

type Story = StoryObj<typeof Navigation>

export const Default : Story = {
  render: () => <Navigation />
}