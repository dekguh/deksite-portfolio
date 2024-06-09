import React from 'react'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | JSX.Element;
  className?: string;
}