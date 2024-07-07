import ProjectCard from './ProjectCard'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: ProjectCard,
  name: 'Project/Project Card'
} as Meta<typeof ProjectCard>

type Story = StoryObj<typeof ProjectCard>

export const Default : Story = {
  render: () => <ProjectCard
    description='I got client from upwork, he want to convert ui figma to react js and with tailwindcss as styling.'
    image='https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg'
    title='Project Card'
  />
}