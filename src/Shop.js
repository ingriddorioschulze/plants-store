import React from 'react'
import styled from 'styled-components'

//#region styles
const ShopWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .checkout-button {
  margin: 15px;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bolder;
  border: solid 1px black;
  background-color: white;
  font-family: 'Nixie One', cursive;
}
`
//#endregion

/**
 * This component render a button that leads the user to the checkout.
 */
function Shop({ history }) {

  function handleCheckoutClick(e) {
    e.preventDefault()
    history.push('/checkout')
  }

  return (
    <ShopWrapper>
      <button className="checkout-button" type="submit" onClick={handleCheckoutClick}>Checkout</button>
    </ShopWrapper>
  )
}

export default Shop
