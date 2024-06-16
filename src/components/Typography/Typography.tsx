import React, { PropsWithChildren } from 'react'

import { ITypographyProps } from './typed'

import { twMerge } from 'tailwind-merge'
import { type VariantProps, cva } from 'class-variance-authority'

const typographyCva = cva('text-gray-900', {
  variants: {
    size: {
      h1: ['text-7xl font-bold'],
      h2: ['text-6xl font-bold'],
      h3: ['text-5xl font-bold'],
      h4: ['text-3xl font-bold'],
      h5: ['text-1xl font-bold'],
      h6: ['text-base font-bold'],
      body: ['text-base font-normal'],
      subtitle: ['text-base font-medium']
    },
    color: {
      heading: [''],
      body: ['']
    }
  },
  defaultVariants: {}
})

interface ITypographyCva extends VariantProps<typeof typographyCva> {}

const Typography : React.FC<PropsWithChildren<ITypographyProps & ITypographyCva>> = (props) => {
  const { component, size, color, className, children, ...rest } = props
  
  const Cmp = component as keyof JSX.IntrinsicElements

  return <Cmp
    className={twMerge(typographyCva({ size, color }), className)}
    {...rest}
  >{children}</Cmp>
}

export default Typography