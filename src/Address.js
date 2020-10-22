import React from 'react'
import styled from 'styled-components'

//#region styles
const AddressFieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;

  .inputs-address-form {
    width: 40%;
    border: 1px black solid;
    margin: 10px;
    padding: 10px;
    ::placeholder {
      font-family: 'Nixie One', cursive;
      font-size: 12px;
    }
  }
  @media all and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
//#endregion

/**
 * This component handles the users address informations.
 */
function Address({ address }) {
  
  return (
    <AddressFieldset>
        <input
          className="inputs-address-form"
          required
          type="text"
          placeholder="First Name"
          value={address.data.firstName}
          onChange={(e) => address.setFirstName(e.target.value)}
        />
        <input
          className="inputs-address-form"
          required
          type="text"
          placeholder="Last Name"
          value={address.data.lastName}
          onChange={(e) => address.setLastName(e.target.value)}
        />
        <input
          className="inputs-address-form"
          required
          type="text"
          placeholder="Street and House Number"
          value={address.data.streetAndNumber}
          onChange={(e) => address.setStreetAndNumber(e.target.value)}
        />
        <input
          className="inputs-address-form"
          required
          type="text"
          placeholder="Country"
          value={address.data.country}
          onChange={(e) => address.setCountry(e.target.value)}
        />
        <input
          className="inputs-address-form"
          required
          type="text"
          placeholder="Postal Code"
          value={address.data.postalCode}
          onChange={(e) => address.setPostalCode(e.target.value)}
        />
        <input
          className="inputs-address-form"
          required
          type="text"
          placeholder="City"
          value={address.data.city}
          onChange={(e) => address.setCity(e.target.value)}
        />
    </AddressFieldset>
  )
}

export default Address
