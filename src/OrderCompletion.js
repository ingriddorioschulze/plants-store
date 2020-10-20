import React from 'react'
import styled from 'styled-components'

//#region styles
const OrderCompletionWrapper = styled.div`

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
    margin: 15px;
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
 * This component is responsible for the clicking in newsletter, accepting AGB and clicking the button to send the order to the BE.
 */
function OrderCompletion({ orderCompletion, enableBuy }) {

  function handleNewsletter(e) {
    orderCompletion.setNewsletter(e.target.checked)
  }

  function handleTermsAndConditions(e) {
    orderCompletion.setTermsAndConditions(e.target.checked)
  }

  return (
    <OrderCompletionWrapper>
      <div>
        <input
          className="inputs-order-completion"
          type="checkbox"
          checked={orderCompletion.newsletter}
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
          checked={orderCompletion.termsAndConditions}
          name="termsAndConditions"
          id="termsAndConditions"
          onChange={handleTermsAndConditions}
        />
        <label htmlFor="termsAndConditions">
          I accept the Terms and Conditions and the Privacy Policy of Plants
          Store.
        </label>
      </div>
      <button className="buy-button" disabled={!enableBuy}>
        Buy
      </button>
    </OrderCompletionWrapper>
  )
}

export default OrderCompletion
