import React from 'react'
import styled from 'styled-components'

//#region styles
const PaymentFormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .inputs-wrapper {
    margin: 5px 5px 10px 0;
  }

  .inputs-payment {
    border: 1px black solid;
    margin: 10px;
    padding: 10px;
    background: none;
    ::placeholder {
      font-family: 'Nixie One', cursive;
      font-size: 12px;
      color: black;
    }
  }

  label {
    font-family: 'Nixie One', cursive;
    font-size: 14px;
  }
  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  .bank-transfer-text {
    font-family: 'Nixie One', cursive;
    font-size: 14px;
    margin-left: 10px;
    width: 65%;
  }
`
//#endregion

/**
 * This component handles the users payment informations.
 */
function PaymentForm({ payment }) {

  return (
    <PaymentFormWrapper>
      <div className="inputs-wrapper">
        <input
          className="inputs-payment"
          required
          type="radio"
          id="bank-account"
          name="payment type"
          value="bank-account"
          onChange={(e) => payment.setPaymentType(e.target.value)}
          checked={payment.data.paymentType === 'bank-account'}
        />
        <label htmlFor="bank-account">Bank Account</label>
        <fieldset disabled={payment.data.paymentType !== 'bank-account'}>
          <input
            className="inputs-payment"
            required
            type="text"
            placeholder="Account Holder"
            value={payment.data.accountHolder}
            onChange={(e) => payment.setAccountHolder(e.target.value)}
          />
          <input
            className="inputs-payment"
            required
            type="text"
            placeholder="IBAN"
            value={payment.data.iban}
            onChange={(e) => payment.setIban(e.target.value)}
          />
          <input
            className="inputs-payment"
            required
            type="text"
            placeholder="BIC"
            value={payment.data.bic}
            onChange={(e) => payment.setBic(e.target.value)}
          />
        </fieldset>
      </div>
      <div className="inputs-wrapper">
        <input
          className="inputs-payment"
          required
          type="radio"
          id="bank-transfer"
          name="payment type"
          value="bank-transfer"
          onChange={(e) => payment.setPaymentType(e.target.value)}
          checked={payment.data.paymentType === 'bank-transfer'}
        />
        <label htmlFor="bank-transfer">Bank Transfer</label>
        <div className="bank-transfer-text">
          Transfer the invoice amount within 7 days after receipt of the
          products. You will find the bank account details on the invoice which
          is enclosed with the package.
        </div>
      </div>
      <div className="inputs-wrapper">
        <input
          className="inputs-payment"
          required
          type="radio"
          id="credit-card"
          name="payment type"
          value="credit-card"
          onChange={(e) => payment.setPaymentType(e.target.value)}
          checked={payment.data.paymentType === 'credit-card'}
        />
        <label htmlFor="credit-card">Credit Card</label>
        <fieldset disabled={payment.data.paymentType !== 'credit-card'}>
          <input
            className="inputs-payment"
            required
            type="text"
            placeholder="Card Holder"
            value={payment.data.cardHolder}
            onChange={(e) => payment.setCardHolder(e.target.value)}
          />
          <input
            className="inputs-payment"
            required
            type="text"
            placeholder="Card Number"
            value={payment.data.cardNumber}
            onChange={(e) => payment.setCardNumber(e.target.value)}
          />
          <input
            className="inputs-payment"
            required
            type="text"
            placeholder="Card Date"
            value={payment.data.cardDate}
            onChange={(e) => payment.setCardDate(e.target.value)}
          />
          <input
            className="inputs-payment"
            required
            type="text"
            placeholder="CVC"
            value={payment.data.cardCvc}
            onChange={(e) => payment.setCardCvc(e.target.value)}
          />
        </fieldset>
      </div>
    </PaymentFormWrapper>
  )
}

export default PaymentForm
