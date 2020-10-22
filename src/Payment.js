import React from 'react'
import styled from 'styled-components'

//#region styles
const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .inputs-payment {
    width: 40%;
    margin: 10px;
    padding: 10px;
    background: none;
    border: 1px black solid;
    ::placeholder {
      color: black;
      font-size: 12px;
      font-family: 'Nixie One', cursive;
    }
  }

  .input-radio {
    margin: 10px;
  }

  label {
    font-size: 14px;
    font-family: 'Nixie One', cursive;
  }

  fieldset {
    margin: 0;
    padding: 0;
    width: 100%;
    border: none;

    @media all and (max-width: 600px) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  .bank-transfer-text {
    width: 65%;
    font-size: 14px;
    margin-left: 10px;
    font-family: 'Nixie One', cursive;
  }

  @media all and (max-width: 800px) {
    display: flex;
    margin-bottom: 40px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`
//#endregion

/**
 * This component handles the users payment informations.
 */
function Payment({ payment }) {

  return (
    <PaymentWrapper>
      <label>
        <input
          className="input-radio"
          required
          type="radio"
          name="payment type"
          value="bank-account"
          onChange={(e) => payment.setPaymentType(e.target.value)}
          checked={payment.data.paymentType === 'bank-account'}
        />
        Bank Account
      </label>
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
        <label htmlFor="bank-transfer">
        <input
          className="input-radio"
          required
          type="radio"
          id="bank-transfer"
          name="payment type"
          value="bank-transfer"
          onChange={(e) => payment.setPaymentType(e.target.value)}
          checked={payment.data.paymentType === 'bank-transfer'}
        />
        Bank Transfer</label>
        <div className="bank-transfer-text">
          Transfer the invoice amount within 7 days after receipt of the
          products. You will find the bank account details on the invoice which
          is enclosed with the package.
        </div>
        <label htmlFor="credit-card">
        <input
          className="input-radio"
          required
          type="radio"
          id="credit-card"
          name="payment type"
          value="credit-card"
          onChange={(e) => payment.setPaymentType(e.target.value)}
          checked={payment.data.paymentType === 'credit-card'}
        />
        Credit Card</label>
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
    </PaymentWrapper>
  )
}

export default Payment
