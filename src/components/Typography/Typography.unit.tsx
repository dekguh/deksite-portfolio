import Typography from './Typography'

import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Typography unit testing', () => {
  test('Typography should be rendered', () => {
    render(<Typography component='h1' data-testid='typography'>Typography</Typography>)
    expect(screen.getByTestId('typography')).toBeDefined()
  })

  test('Typography should be can pass html heading', () => {
    render(<Typography component='h3' data-testid='typography'>Typography</Typography>)

    expect(screen.getByTestId('typography').nodeName.toLowerCase()).toBe('h3')
  })
})