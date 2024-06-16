import React, { PropsWithRef } from 'react'

import { IButtonProps } from './typed.d'

import { twMerge } from 'tailwind-merge'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonCva = cva('btn text-white rounded-none border-none min-h-0 h-auto font-medium', {
  variants: {
    color: {
      primary: ['bg-pink-500 hover:bg-pink-700', 'shadow-[4px_4px_0px_rgba(0,0,0,1)]'],
      secondary: ['bg-gray-700 hover:bg-gray-800']
    },
    size: {
      small: ['py-[12px] px-[12px]'],
      large: ['py-[16px] px-[20px]']
    }
  },
  compoundVariants: [
    { color: 'primary', size: 'large' }
  ],
  defaultVariants: {
    color: 'primary',
    size: 'large'
  }
})

interface IButtonCva extends VariantProps<typeof buttonCva> {}

const Button = React.forwardRef<HTMLButtonElement, PropsWithRef<IButtonCva & IButtonProps>>((props, ref) => {
  const { children, color = 'primary', size = 'large', className, ...rest } = props

  return <button
    className={twMerge(buttonCva({ color, size }), className)}
    ref={ref}
    {...rest}
  >
    {children}
  </button>
})

export default Button