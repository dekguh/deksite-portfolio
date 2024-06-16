import Button from './Button'

import { expect, test, describe, vitest } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Button unit testing', () => {
  test('Button should rendered', () => {
    render(<Button data-testid='button'>click me</Button>)

    expect(screen.getByTestId('button')).toHaveTextContent('click me')
  })

  test('Button should can add props HTMLButtonElement', () => {
    render(<Button aria-label='button-aria'>button</Button>)

    expect(screen.getByLabelText('button-aria')).toBeDefined()
  })

  test('Icon Button should can clicked', () => {
    const onClickFn = vitest.fn()
    render(<Button data-testid='button' onClick={onClickFn}>button</Button>)

    fireEvent.click(screen.getByTestId('button'))
    expect(onClickFn).toBeCalledTimes(1)
  })
})