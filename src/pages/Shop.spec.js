import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Shop from './Shop'

test("render the products", async () => {
  const { getByText } = render(<Shop />) 
  expect(getByText('Monstera Deliciosa')).toBeInTheDocument()
  expect(getByText('10.99')).toBeInTheDocument()
  expect(getByText('Photos Ivy')).toBeInTheDocument()
  expect(getByText('200.99')).toBeInTheDocument()
})

test("clicking the button to add the product in the cart show an alert message", async () => {
  const { getAllByText } = render(<Shop />) 
  const alert = jest.spyOn(window, 'alert')
  fireEvent.click(getAllByText('Add to Cart')[0])
  expect(alert).toHaveBeenCalledTimes(1)
  expect(alert).toBeCalledWith('Item added to the cart')
})

test("clicking the button checkout redirect user to checkout", async () => {
  const historyMock = {
    push: jest.fn()
  }
  const { getByText } = render(<Shop history={historyMock} />)
  fireEvent.click(getByText('Checkout'))
  expect(historyMock.push).toBeCalledWith("/checkout")
})
