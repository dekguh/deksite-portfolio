import Navigation from './Navigation'

import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Navigation unit testing', () => {
  test('Navigation should rendered', () => {
    render(<Navigation />)

    expect(screen.getByTestId('navigation')).toBeDefined()
  })
})