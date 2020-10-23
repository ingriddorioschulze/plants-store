import React, { useState } from 'react'
import styled from 'styled-components'
import { useCheckout } from './hooks'
import { data, executeOrder } from './api'
import AddressForm from './Address'
import PaymentForm from './Payment'

//#region styles
const CheckoutWrapper = styled.div`
  display: flex;
  padding: 30px;
  
  @media all and (max-width: 1140px) {
    display: flex;
    flex-direction: column;
    text-align: center;

  }
  `
const ShippingAndPaymentWrapper = styled.div`
  flex: 3;

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  .title {
    margin: 10px;
    font-size: 16px;
    font-weight: bolder;
    font-family: 'Nixie One', cursive;
  }

  .inputs-checkout {
    width: 40%;
    margin: 10px;
    padding: 10px;
    border: 1px black solid;
    ::placeholder {
      font-size: 12px;
      font-family: 'Nixie One', cursive;
    }
    @media all and (max-width: 600px) {
      width: 95%;
    }
  }

  h2 {
    font-size: 14px;
    font-family: 'Nixie One', cursive;
    margin-left: 10px;

    @media all and (max-width: 900px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 10px 0px 10px 0px;
    }
  }

  form {
    @media all and (max-width: 900px) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`
const OrderSummary = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  padding: 10px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  font-family: 'Nixie One', cursive;
`
const ProductDetails = styled.div`
  margin: 10px;
  display: flex;

  img {
    width: 20%;
    padding: 10px;
    object-fit: cover;
    object-position: center;
  }
  .content-wrapper {
    display: flex;
    padding: 10px;
    text-align: start;
    flex-direction: column;
  }
`
const OrderDetails = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    line-height: 25px;
  }
`
const ConfirmationWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: 'Nixie One', cursive;
  padding: 30px;
`
const OrderCompletionWrapper = styled.div`
  padding: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  label {
    font-size: 14px;
    font-family: 'Nixie One', cursive;
    text-align: center;
  }

  .inputs-order-completion {
    margin: 10px;
  }

  .buy-button {
    color: black;
    margin: 25px;
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
 * This component holds other components that handles the users payment, address and delivery informations and triggers the order completion.
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
            <h2>YOUR EMAIL AND PHONE NUMBER</h2>
            <input
              required
              className="inputs-checkout"
              type="email"
              placeholder="* Email"
              value={checkout.email}
              onChange={(e) => checkout.setEmail(e.target.value)}
            />
            <input
              className="inputs-checkout"
              type="tel"
              placeholder="Phone Number"
              value={checkout.phoneNumber}
              onChange={(e) => checkout.setPhoneNumber(e.target.value)}
            />
            <h2>SHIPPING ADDRESS</h2>
            <AddressForm address={checkout.deliveryAddress} />
            <h2>BILLING ADDRESS</h2>
            <AddressForm address={checkout.billingAddress} />
            <h2>PAYMENT</h2>
            <PaymentForm payment={checkout.payment} />
          </form>
        </ShippingAndPaymentWrapper>
        <OrderSummary>
          <h2>
            <strong>ORDER SUMMARY</strong>
          </h2>
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
          <OrderDetails>
            <ul>
              <li>Subtotal: {data.sum}</li>
              <li>Vat Sum: {data.vadSum}</li>
              <li>Vat Percent: {data.vadPercent}</li>
              <li>Shipping: {data.deliveryCosts}</li>
              <li>
                <strong>TOTAL: {data.totalSum}</strong>
              </li>
            </ul>
          </OrderDetails>
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
                You'll receive receipts and notifications at this email address.
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
                * I accept the Terms and Conditions and the Privacy Policy of
                Plants Store.
              </label>
            </div>
            <button
              className="buy-button"
              type="submit"
              form="checkout-form"
              disabled={!checkout.enableBuy}
            >
              Buy
            </button>
          </OrderCompletionWrapper>
        </OrderSummary>
      </CheckoutWrapper>
    )
  } else if (state === 'showConfirmation') {
    return (
      <ConfirmationWrapper>
        <h3>
          Thanks <strong>{`${orderConfirmation.customerName}`}</strong> for your
          order number <strong>{`${orderConfirmation.orderNumber}`}</strong> and
          id <strong>{`${orderConfirmation.orderID}`}</strong>
        </h3>
        <h5>
          We are happy you have found a special and beautiful plant at Plants
          Store!
        </h5>
        <h5>
          We have send you more informations in your email: 
          <strong> {`${orderConfirmation.customerMail}`}</strong>
        </h5>
        <h5>
          Soon you will receive your plants in the following address:
          <strong> {`${orderConfirmation.deliveryAddress}`}</strong>
        </h5>
      </ConfirmationWrapper>
    )
  }
}

export default Checkout
