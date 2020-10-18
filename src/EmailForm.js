import React, { useState } from 'react'

//#region styles
//#endregion

/**
 * This component is responsible for the users emails, newsletter and AGB.
 */

function EmailForm() {

    const [newsletter, setNewsletter] = useState(true)
    const [termsAndConditions, setTermsAndConditions] = useState(true)

    function handleNewsletter() {
      setNewsletter(false)
    }
    function handleTermsAndConditions() {
      setTermsAndConditions(false)
    }

  return (
    <div>
      <input type="text" placeholder="your email" />
      <input
        type="checkbox"
        defaultChecked={newsletter}
        name="newsletter"
        onChange={handleNewsletter}
      />
      <label htmlFor="newsletter">
        You'll receive receipts and notifications at this email address.
      </label>
      <input
        type="checkbox"
        defaultChecked={termsAndConditions}
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

export default EmailForm
