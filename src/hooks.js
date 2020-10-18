import { useState } from 'react'

/**
 * This custom hook responsible to share the user's informations as a state for the whole plataform.
 */
export function useAddress(initialData) {
  const [data, setData] = useState(
    initialData || {
      firstName: '',
      lastName: '',
      address: '',
      streetAndNumber: '',
      country: '',
      postalCode: '',
      city: '',
      phoneNumber: '',
      emails: "",
      newsletter: "",
      termsAndConditions: "",
    },
  )
  return {
    data,
    setFirstName(firstName) {
      setData({
        ...data,
        firstName,
      })
    },
    setLastName(lastName) {
      setData({
        ...data,
        lastName,
      })
    },
    setAddress(address) {
      setData({
        ...data,
        address,
      })
    },
    setStreetAndNumber(streetAndNumber) {
      setData({
        ...data,
        streetAndNumber,
      })
    },
    setCountry(country) {
      setData({
        ...data,
        country,
      })
    },
    setPostalCode(postalCode) {
      setData({
        ...data,
        postalCode,
      })
    },
    setCity(city) {
      setData({
        ...data,
        city,
      })
    },
    setPhoneNumber(phoneNumber) {
      setData({
        ...data,
        phoneNumber,
      })
    },
    setEmail(email) {
      setData({
        ...data,
        email,
      })
    },
    setNewsletter(newsletter) {
      setData({
        ...data,
        newsletter,
      })
    },
    setTermsAndConditions(termsAndConditions) {
      setData({
        ...data,
        termsAndConditions,
      })
    },
    
  }
}

export function usePayment(initialData) {
    const [data, setData] = useState(
    initialData || {
      accountHolder: "",
      iban: "",
      bic: "",
      cardHolder: "",
      cardNumber: "",
      cardDate: "",
      cvc: "",
    }
  )
    return {
      data,
    setAccountHolder(AccountHolder) {
        setData({
          ...data,
          AccountHolder,
        })
      },
      setIban(iban) {
        setData({
          ...data,
          iban,
        })
      },
      setBic(bic) {
        setData({
          ...data,
          bic,
        })
      },
      setCardHolder(cardholder) {
        setData({
          ...data,
          cardholder,
        })
      },
      setCardNumber(cardNumber) {
        setData({
          ...data,
          cardNumber,
        })
      },
      setCardDate(cardDate) {
        setData({
          ...data,
          cardDate,
      })
    },
  }
}

export function useCheckout(initialData) {
  const deliveryAddress = useAddress(initialData.deliveryAddress)
  const billingAddress = useAddress(initialData.billingAddress)
  const payment = usePayment(initialData.payment)
  const [email, setEmail] = useState(initialData.email || "" )
  const [newsletter, setNewsletter] = useState(false)
  const [termsAndConditions, setTermsAndConditions] = useState(false)

  return {
    deliveryAddress,
    billingAddress,
    payment,
    email, setEmail,
    orderCompletion: {
      newsletter, setNewsletter,
      termsAndConditions, setTermsAndConditions
    }
  }
}