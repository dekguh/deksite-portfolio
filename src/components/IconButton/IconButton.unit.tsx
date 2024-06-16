import IconButton from './IconButton'

import { expect, test, describe, vitest } from 'vitest'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { screen, render, fireEvent } from '@testing-library/react'

describe('Icon Button unit testing', () => {
  test('Icon Button should rendered', () => {
    render(<IconButton data-testid='iconButton'>
      <ContentCopyIcon />
    </IconButton>)

    expect(screen.getByTestId('iconButton')).toBeDefined()
  })

  test('Icon Button should can add props HTMLButtonElement', () => {
    render(<IconButton aria-label='icon-button-aria'>
      <ContentCopyIcon />
    </IconButton>)

    expect(screen.getByLabelText('icon-button-aria')).toBeDefined()
  })

  test('Icon Button should can clicked', () => {
    const onClickFn = vitest.fn()
    render(<IconButton data-testid='iconButton' onClick={onClickFn}>
      <ContentCopyIcon />
    </IconButton>)

    fireEvent.click(screen.getByTestId('iconButton'))
    expect(onClickFn).toBeCalledTimes(1)
  })
})