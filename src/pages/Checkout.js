import React from 'react'
import AddressForm from '../AddressForm'
import EmailForm from '../EmailForm'
import { useAddress } from "../hooks"
import PaymentForm from '../PaymentForm'

//#region styles
//#endregion

/**
 * This component holds other components that handles the users payment, address and delivery informations.
 */

function Checkout() {
  const deliveryAddress = useAddress()
  const billingAddress = useAddress()
  console.log("delivery address", deliveryAddress.data)

  return (
    <div>
      <div>Checkout</div>
        <div>1. Your Email</div>
       <EmailForm/>
        <div>2. Shipping Address</div>
        <AddressForm address={deliveryAddress} />
        <div>3. Billing Address</div>
        <AddressForm address={billingAddress} />
        <div>4. Payment</div>
        <PaymentForm/>
    </div>
  )
}

export default Checkout
