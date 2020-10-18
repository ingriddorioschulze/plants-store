import { useState } from 'react'

/**
 * This custom hook responsible to share the user's informations as a state for the whole plataform.
 */

export function useAddress(initialData) {
  const [data, setData] = useState(initialData || {firstName: "", lastName: "", 
  address: "", streetAndNumber: "", country: "", postalCode: "", city: "", phoneNumber: ""})
  return {
    data,
    setFirstName(firstName) {
      setData({
        ...data, firstName
      })
    },
    setLastName(lastName) {
      setData({
        ...data, lastName
      })
    },
     setAddress(address) {
      setData({
        ...data, address
      })
    },
     setStreetAndNumber(streetAndNumber) {
      setData({
        ...data, streetAndNumber
      })
    },
     setCountry(country) {
      setData({
        ...data, country
      })
    },
     setPostalCode(postalCode) {
      setData({
        ...data, postalCode
      })
    },
     setCity(city) {
      setData({
        ...data, city
      })
    },
    setPhoneNumber(phoneNumber) {
      setData({
        ...data, phoneNumber
      })
    }
    
  }
}