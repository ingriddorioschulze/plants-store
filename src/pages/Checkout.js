import React, { useState } from 'react'
import { useCheckout } from '../hooks'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import OrderCompletion from '../OrderCompletion'
import { executeOrder } from '../api'

//#region styles
//#endregion

/**
 * This component holds other components that handles the users payment, address and delivery informations.
 */
function Checkout(history) {
  const checkout = useCheckout({})
  const [state, setState] = useState("showForm")
  const [orderConfirmation, setOrderConfirmation] = useState()


  async function handleBuyClick() {
    setOrderConfirmation(await executeOrder(checkout))
    setState("showConfirmation")
  }

  if (state === "showForm") {
    return (
      <div>
        <div>Checkout</div>
        <div>1. Your Email</div>
        <input
          type="text"
          placeholder="your email"
          value={checkout.email}
          onChange={(e) => checkout.setEmail(e.target.value)}
        />
        <div>2. Shipping Address</div>
        <AddressForm address={checkout.deliveryAddress} />
        <div>3. Billing Address</div>
        <AddressForm address={checkout.billingAddress} />
        <div>4. Payment</div>
        <PaymentForm payment={checkout.payment} />
        <OrderCompletion orderCompletion={checkout.orderCompletion} />
        <button onClick={handleBuyClick}>Buy</button>
      </div>
    )
  } else if (state === "showConfirmation") {
    return (
    <pre>{JSON.stringify(orderConfirmation, null, 2)}</pre>
    )
  }
}

export default Checkout
