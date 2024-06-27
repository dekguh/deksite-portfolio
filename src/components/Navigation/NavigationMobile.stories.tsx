import NavigationMobile from './NavigationMobile'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: NavigationMobile,
  title: 'Components/Navigation Mobile'
} as Meta<typeof NavigationMobile>

type Story = StoryObj<typeof NavigationMobile>

export const Default : Story = {
  render: () => <NavigationMobile />
}