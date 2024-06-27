import NavigationMobile from './NavigationMobile'

import { describe, test, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Navigation Mobile unit testing', () => {
  test('Navigation Mobile should rendered', () => {
    render(<NavigationMobile />)

    expect(screen.getByTestId('navigation-mobile')).toBeDefined()
  })

  test('Navigation Mobile menu should be can open and close', () => {
    render(<NavigationMobile />)

    fireEvent.click(screen.getByTestId('hamburger-button'))
    expect(screen.getByTestId('hamburger-menu').classList.toString()).toContain('max-h-[480px]')

    fireEvent.click(screen.getByTestId('hamburger-button'))
    expect(screen.getByTestId('hamburger-menu').classList.toString()).toContain('max-h-0')
  })
})