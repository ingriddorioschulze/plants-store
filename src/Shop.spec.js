import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Shop from './Shop'

test("clicking the button checkout redirect user to checkout", async () => {
  const historyMock = {
    push: jest.fn()
  }
  const { getByText } = render(<Shop history={historyMock} />)
  fireEvent.click(getByText('Checkout'))
  expect(historyMock.push).toBeCalledWith("/checkout")
})
