import React from 'react'

//#region styles
//#endregion

/**
 * This component handles the users payment informations.
 */

function PaymentForm() {
  return (
    <div>
      <div>Bank Account</div>
      <input
        type="text" placeholder="account holder" value={'value'} onChange={'onChange'} />
      <input
        type="text"
        placeholder="IBAN"
        value={'value'}
        onChange={'onChange'}
      />
      <input
        type="text"
        placeholder="BIC"
        value={'value'}
        onChange={'onChange'}
      />
      <div>Bank Transfer</div>
      <div>
        Transfer the invoice amount within 7 days after receipt of the products.
        You will find the bank account details on the invoice which is enclosed
        with the package.
      </div>
      <div>Credit Card</div>
      <input
        type="text"
        placeholder="card holder"
        value={'value'}
        onChange={'onChange'}
      />
      <input
        type="text"
        placeholder="card number"
        value={'value'}
        onChange={'onChange'}
      />
      <input
        type="text"
        placeholder="date"
        value={'value'}
        onChange={'onChange'}
      />
      <input
        type="text"
        placeholder="cvc"
        value={'value'}
        onChange={'onChange'}
      />
    </div>
  )
}

export default PaymentForm
