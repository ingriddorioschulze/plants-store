import React from 'react'

//#region styles
//#endregion

/**
 * This component handles the users payment informations.
 */
function PaymentForm({ payment }) {
  function handleSubmitClick(e) {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmitClick}>
        <input
          type="radio"
          id="bank-account"
          name="payment type"
          value="bank-account"
        />
        <label htmlFor="bank-account">Bank Account</label>
        <input
          type="text"
          placeholder="account holder"
          value={payment.data.accountHolder}
          onChange={(e) => payment.setAccountholder(e.target.value)}
        />
        <input
          type="text"
          placeholder="IBAN"
          value={payment.data.iban}
          onChange={(e) => payment.setIban(e.target.value)}
        />
        <input
          type="text"
          placeholder="BIC"
          value={payment.data.bic}
          onChange={(e) => payment.setIBic(e.target.value)}
        />
        <input
          type="radio"
          id="bank-transfer"
          name="payment type"
          value="bank-transfer"
        />
        <label htmlFor="bank-transfer">Bank Transfer</label>
        <div>
          Transfer the invoice amount within 7 days after receipt of the
          products. You will find the bank account details on the invoice which
          is enclosed with the package.
        </div>
        <input
          type="radio"
          id="credit-card"
          name="payment type"
          value="credit-card"
        />
        <label htmlFor="credit-card">Credit Card</label>
        <input
          type="text"
          placeholder="card holder"
          value={payment.data.cardHolder}
          onChange={(e) => payment.setCardHolder(e.target.value)}
        />
        <input
          type="text"
          placeholder="card number"
          value={payment.data.cardNumber}
          onChange={(e) => payment.setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="card date"
          value={payment.data.cardDate}
          onChange={(e) => payment.setCardDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="cvc"
          value={payment.data.cardCvc}
          onChange={(e) => payment.setCardCvc(e.target.value)}
        />
      </form>
    </div>
  )
}

export default PaymentForm
