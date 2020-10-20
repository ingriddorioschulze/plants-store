import React, { useState } from 'react'
import styled from 'styled-components'
import { useCheckout } from '../hooks'
import { executeOrder } from '../api'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import OrderCompletion from '../OrderCompletion'

//#region styles
const ShippingAndPaymentWrapper = styled.div`
  display: flex;

  .title {
    font-family: 'Nixie One', cursive;
    font-size: 16px;
    font-weight: bolder;
    margin: 10px;
  }

  .inputs-checkout {
    width: 30%;
    height: 20px;
    border: 1px black solid;
    margin: 10px;
    padding: 10px;
    ::placeholder {
      font-family: 'Nixie One', cursive;
      font-size: 12px;
    }
  }
`
const ConfirmationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .confirmation-text {
    font-family: 'Nixie One', cursive;
    font-size: 16px;
    text-align: center;
    margin: 10px;
  }
`
//#endregion

/**
 * This component holds other components that handles the users payment, address and delivery informations.
 */
function Checkout() {
  const checkout = useCheckout({})
  const [state, setState] = useState("showForm")
  const [orderConfirmation, setOrderConfirmation] = useState()

  async function handleBuyClick(e) {
    e.preventDefault()
    setOrderConfirmation(await executeOrder(checkout))
    setState("showConfirmation")
  }

  if (state === "showForm") {
    return (
      <ShippingAndPaymentWrapper>
        <form onSubmit={handleBuyClick}>
          <div className="title">YOUR EMAIL AND PHONE NUMBER</div>
          <input
            required
            className="inputs-checkout"
            type="text"
            placeholder="Email"
            value={checkout.email}
            onChange={(e) => checkout.setEmail(e.target.value)}
          />
          <input
            className="inputs-checkout"
            type="text"
            placeholder="Phone Number"
            value={checkout.phoneNumber}
            onChange={(e) => checkout.setPhoneNumber(e.target.value)}
          />
          <div className="title">SHIPPING ADDRESS</div>
          <AddressForm address={checkout.deliveryAddress} />
          <div className="title">BILLING ADDRESS</div>
          <AddressForm address={checkout.billingAddress} />
          <div className="title">PAYMENT</div>
          <PaymentForm payment={checkout.payment} />
          <OrderCompletion
            orderCompletion={checkout.orderCompletion}
            enableBuy={checkout.enableBuy}
          />
        </form>
      </ShippingAndPaymentWrapper>
    )
  } else if (state === "showConfirmation") {
    return (
      <ConfirmationWrapper>
        <div className="confirmation-text">
          Thanks <strong>{`${orderConfirmation.customerName}`}</strong> for your
          order number <strong>{`${orderConfirmation.orderNumber}`}</strong> and
          id <strong>{`${orderConfirmation.orderID}`}</strong></div>
          <div className="confirmation-text">
            We are happy you have found a special and beautiful plant at Plants
            Store!
          </div>
        <div className="confirmation-text">
          We have send you more informations in your email{' '}
          <strong>{`${orderConfirmation.customerMail}`}</strong>
        </div>
        <div className="confirmation-text">
          Soon you will receive your plants in the following address:
          <strong> {`${orderConfirmation.deliveryAddress}`}</strong>
        </div>
      </ConfirmationWrapper>
    )
  }
}

export default Checkout
