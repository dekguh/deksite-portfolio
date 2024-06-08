import React from 'react'

export interface IButtonProps {
  children: React.ReactNode | JSX.Element;
  rest?: React.HTMLProps<HTMLButtonElement>;
}