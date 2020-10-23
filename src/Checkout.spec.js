import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Checkout from './Checkout'

test('buy button is active when the agb checkbox is checked', async () => {
  const { getByText, getByLabelText } = render(<Checkout/>)
  fireEvent.click(getByText('* I accept the Terms and Conditions and the Privacy Policy of Plants Store.'))
  expect(getByLabelText('* I accept the Terms and Conditions and the Privacy Policy of Plants Store.')).toHaveProperty('checked', true)
  expect(getByText('Buy')).not.toHaveAttribute('disabled')
})

test('buy button is disabled when the agb checkbox is not checked', async () => {
  const { getByText, getByLabelText } = render(<Checkout/>)
  expect(getByLabelText('* I accept the Terms and Conditions and the Privacy Policy of Plants Store.')).toHaveProperty('checked', false)
  expect(getByText('Buy')).toHaveAttribute('disabled')
})
