import React, { PropsWithRef } from 'react'

import { ITextfieldProps } from './typed'

import { twMerge } from 'tailwind-merge'
import { type VariantProps, cva } from 'class-variance-authority'

const textfieldCva = cva('input input-bordered min-h-0 h-auto', {
  variants: {
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

interface ITextfieldCva extends VariantProps<typeof textfieldCva> {}

const Textfield = React.forwardRef<HTMLInputElement, PropsWithRef<ITextfieldCva & Omit<ITextfieldProps, 'size'>>>((props, ref) => {
  const {  className, size = 'large', ...rest } = props

  return (
    <input
      className={twMerge(textfieldCva({ size }), className)}
      ref={ref}
      {...rest}
    />
  )
})

export default Textfield