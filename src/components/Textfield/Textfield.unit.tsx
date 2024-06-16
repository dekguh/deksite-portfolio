import Textfield from './Textfield'

import { describe, expect, test } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'

describe('Textfield unit testing', () => {
  test('Textfield should rendered', () => {
    render(<Textfield data-testid='textfield' />)
    expect(screen.getByTestId('textfield')).toBeDefined()
  })

  test('Textfield should can add props HTMLInputElement', () => {
    render(<Textfield aria-label='textfield-aria' />)

    expect(screen.getByLabelText('textfield-aria')).toBeDefined()
  })

  test('Textfield should can input value', () => {
    render(<Textfield data-testid='textfield' />)
    fireEvent.change((screen.getByTestId('textfield')), {
      target: {
        value: 'test'
      }
    })
    expect(screen.getByTestId('textfield')).toHaveValue('test')
  })
})