import React, { PropsWithRef } from 'react'

import { IIconButtonProps } from './typed'

import { twMerge } from 'tailwind-merge'
import { type VariantProps, cva } from 'class-variance-authority'

const iconButtonCva = cva('rounded-none border-none min-h-0 h-auto', {
  variants: {
    color: {
      primary: ['bg-pink-500 hover:bg-pink-700 text-white', 'shadow-[4px_4px_0px_rgba(0,0,0,1)]'],
      secondary: ['bg-gray-700 hover:bg-gray-800 text-white'],
      gray: ['bg-gray-100 hover:bg-gray-200']
    },
    size: {
      small: ['py-[12px] px-[12px]'],
      large: ['py-[16px] px-[20px]']
    }
  },
  compoundVariants: [
    { size: 'large' }
  ],
  defaultVariants: {
    size: 'large'
  }
})

interface IIconButtonCva extends VariantProps<typeof iconButtonCva> {}

const IconButton = React.forwardRef<HTMLButtonElement, PropsWithRef<IIconButtonCva & IIconButtonProps>>((props, ref) => {
  const { className, children, color, size, ...rest } = props
  return (
    <button
      className={twMerge(iconButtonCva({ size, color }), className)}
      ref={ref}
      {...rest}
    >{children}</button>
  )
})

export default IconButton