import Button from './Button'

import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Button unit testing', () => {
  test('Button should rendered', () => {
    render(<Button data-testid='button'>click me</Button>)

    expect(screen.getByTestId('button')).toHaveTextContent('click me')
  })

  test('Button should can add props HTMLButtonElement', () => {
    render(<button aria-label='button-aria'>button</button>)

    expect(screen.getByLabelText('button-aria')).toBeDefined()
  })
})