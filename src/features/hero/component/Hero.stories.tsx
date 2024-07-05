import Hero from './Hero'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: Hero,
  title: 'Home/Hero'
} as Meta<typeof Hero>

type Story = StoryObj<typeof Hero>

export const Default : Story = {
  render: () => <Hero />
}