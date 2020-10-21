import React, { useState } from 'react'
import styled from 'styled-components'
import { useCheckout } from './hooks'
import { data, executeOrder } from './api'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
// import OrderCompletion from '../OrderCompletion'

//#region styles
const CheckoutWrapper = styled.div`
  display: flex;
  padding: 30px;
`
const ShippingAndPaymentWrapper = styled.div`
  flex: 3;

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

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
const OrderSummary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  font-family: 'Nixie One', cursive;
  font-size: 16px;
  font-weight: bolder;
  height: 650px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
const ProductDetails = styled.div`
  display: flex;
  margin: 10px;

  img {
    object-fit: cover;
    object-position: center;
    width: 20%;
    padding: 10px;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`
const CheckoutDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .payment-details {
    margin: 5px;
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
const OrderCompletionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;

  label {
    margin: 10px;
    font-family: 'Nixie One', cursive;
    font-size: 14px;
  }

  .inputs-order-completion {
    margin: 10px;
  }

  .buy-button {
    width: 25%;
    margin: 25px;
    padding: 15px;
    font-size: 16px;
    cursor: pointer;
    font-weight: bolder;
    border: solid 1px black;
    background-color: white;
    font-family: 'Nixie One', cursive;
    color: black;
  }
`
//#endregion

/**
 * This component holds other components that handles the users payment, address and delivery informations.
 */
function Checkout() {
  const checkout = useCheckout({})
  const [state, setState] = useState('showForm')
  const [orderConfirmation, setOrderConfirmation] = useState()

  function handleNewsletter(e) {
    checkout.orderCompletion.setNewsletter(e.target.checked)
  }

  function handleTermsAndConditions(e) {
    checkout.orderCompletion.setTermsAndConditions(e.target.checked)
  }

  async function handleBuyClick(e) {
    e.preventDefault()
    setOrderConfirmation(await executeOrder(checkout))
    setState('showConfirmation')
  }


  if (state === 'showForm') {
    return (
      <CheckoutWrapper>
        <ShippingAndPaymentWrapper>
          <form id="checkout-form" onSubmit={handleBuyClick}>
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
          </form>
        </ShippingAndPaymentWrapper>
        <OrderSummary>
          <div className="title">ORDER SUMMARY</div>
          {data.products.map((product) => (
            <ProductDetails key={product.productid}>
              <img
                className="product-image"
                alt={product.title}
                src={product.image}
              />
              <div className="content-wrapper">
                <div className="title">{product.title}</div>
                <div className="price">{product.price}</div>
                <div className="amount">Qty {product.amount}</div>
              </div>
            </ProductDetails>
          ))}
          <CheckoutDetails>
            <div className="payment-details">
              Shipping: {data.deliveryCosts}
            </div>
            <div className="payment-details">Subtotal: {data.sum}</div>
            <div className="payment-details">
              Vat Percent: {data.vadPercent}
            </div>
            <div className="payment-details">Vat Sum: {data.vadSum}</div>
            <div className="payment-details">Total: {data.totalSum}</div>
          </CheckoutDetails>
          <OrderCompletionWrapper>
              <div>
                <input
                  className="inputs-order-completion"
                  type="checkbox"
                  checked={checkout.orderCompletion.newsletter}
                  name="newsletter"
                  id="newsletter"
                  onChange={handleNewsletter}
                />
                <label htmlFor="newsletter">
                  You'll receive receipts and notifications at this email
                  address.
                </label>
              </div>
              <div>
                <input
                  required
                  className="inputs-order-completion"
                  type="checkbox"
                  checked={checkout.orderCompletion.termsAndConditions}
                  name="termsAndConditions"
                  id="termsAndConditions"
                  onChange={handleTermsAndConditions}
                />
                <label htmlFor="termsAndConditions">
                  I accept the Terms and Conditions and the Privacy Policy of
                  Plants Store.
                </label>
              </div>
              <button className="buy-button" form="checkout-form" disabled={!checkout.enableBuy}>
                Buy
              </button>
          </OrderCompletionWrapper>
        </OrderSummary>
      </CheckoutWrapper>
    )
  } else if (state === 'showConfirmation') {
    return (
      <ConfirmationWrapper>
        <div className="confirmation-text">
          Thanks <strong>{`${orderConfirmation.customerName}`}</strong> for your
          order number <strong>{`${orderConfirmation.orderNumber}`}</strong> and
          id <strong>{`${orderConfirmation.orderID}`}</strong>
        </div>
        <div className="confirmation-text">
          We are happy you have found a special and beautiful plant at Plants
          Store!
        </div>
        <div className="confirmation-text">
          We have send you more informations in your email
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
