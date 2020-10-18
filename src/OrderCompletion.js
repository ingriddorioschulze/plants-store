import React from 'react'

//#region styles
//#endregion

/**
 * This component is responsible for the users emails, newsletter and AGB.
 */
function OrderCompletion({ orderCompletion }) {
  function handleNewsletter(e) {
    orderCompletion.setNewsletter(e.target.checked)
  }
  
  function handleTermsAndConditions(e) {
    orderCompletion.setTermsAndConditions(e.target.checked)
  }

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={orderCompletion.newsletter}
        name="newsletter"
        onChange={handleNewsletter}
      />
      <label htmlFor="newsletter">
        You'll receive receipts and notifications at this email address.
      </label>
      <input
        type="checkbox"
        defaultChecked={orderCompletion.termsAndConditions}
        name="termsAndConditions"
        onChange={handleTermsAndConditions}
      />
      <label htmlFor="termsAndConditions">
        I accept the Terms and Conditions and the Privacy Policy of Plants
        Store.
      </label>
    </div>
  )
}

export default OrderCompletion
