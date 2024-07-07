import React from 'react'

import ProjectShapeDot from '@/assets/images/project-shape-dot.svg'

import Typography from '@/components/Typography/Typography'

import { twMerge } from 'tailwind-merge'

interface IProjectCardProps {
  cardClass?: string;
  description: string;
  image: string;
  title: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, React.PropsWithRef<IProjectCardProps>>((props, ref) => {
  const { title, image, description, cardClass } = props

  return (
    <div className={cardClass} ref={ref}>
      <img
        className={twMerge('h-20 mb-[-64px] mr-[-12px] ml-auto')}
        src={ProjectShapeDot}
      />

      <div
        className={twMerge(
          'w-full h-[220px] mb-3 relative z-[1]',
          'bg-no-repeat bg-center bg-cover'
        )}
        style={{
          backgroundImage: `url("${image}")`
        }}
      />
      <Typography component='h5' size='h5'>{title}</Typography>
      <Typography className={twMerge('mt-1')} color='body' component='p' size='body'>
        {description}
      </Typography>
    </div>
  )
})

export default ProjectCard