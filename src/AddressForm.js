import React from 'react'

//#region styles
//#endregion

/**
 * This component handles the users address informations.
 */

function AddressForm({ address }) {

  function handleSubmitClick(e) {
    e.preventDefault()
  }

  return (
    <div>
       <form onSubmit={handleSubmitClick}>
          <input type="text" placeholder="first name" value={address.data.firstName} onChange={(e) => address.setFirstName(e.target.value)}/>
          <input type="text" placeholder="last name" value={address.data.lastName} onChange={(e) => address.setLastName(e.target.value)}/>
          <input type="text" placeholder="address" value={address.data.address} onChange={(e) => address.setAddress(e.target.value)}/>
          <input type="text" placeholder="street and house number" value={address.data.streetAndNumber} onChange={(e) => address.setStreetAndNumber(e.target.value)}/>
          <input type="text" placeholder="country" value={address.data.country} onChange={(e) => address.setCountry(e.target.value)}/>
          <input type="text" placeholder="postal code" value={address.data.postalCode} onChange={(e) => address.setPostalCode(e.target.value)}/>
          <input type="text" placeholder="city" value={address.data.city} onChange={(e) => address.setCity(e.target.value)}/>
          <input type="text" placeholder="phone" value={address.data.phoneNumber} onChange={(e) => address.setPhoneNumber(e.target.value)}/>
        </form>
    </div>
  )
}

export default AddressForm
