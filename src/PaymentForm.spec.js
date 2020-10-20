import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderHook } from '@testing-library/react-hooks'
import { render, fireEvent } from '@testing-library/react'
import { usePayment } from './hooks'
import PaymentForm from './PaymentForm'


test('clicking in one payment method disable the input from the others', async () => {
  const payment  = renderHook(() => usePayment({}))
  const { getByLabelText, getByPlaceholderText } = render(<PaymentForm payment={payment.result.current}/>)
  fireEvent.click(getByLabelText('Bank Account'))
  expect(getByPlaceholderText('Card Holder').closest("fieldset")).toHaveAttribute('disabled')
  expect(getByPlaceholderText('Card Number').closest('fieldset')).toHaveAttribute('disabled')
  expect(getByPlaceholderText('Card Date').closest('fieldset')).toHaveAttribute('disabled')
  expect(getByPlaceholderText('CVC').closest('fieldset')).toHaveAttribute('disabled')

})
