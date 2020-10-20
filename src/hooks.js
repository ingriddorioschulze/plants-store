import { useState } from 'react'

/**
 * This custom hook responsible to share the user's informations as a state for the whole plataform.
 */
export function useAddress(initialData) {
  const [data, setData] = useState(
    initialData || {
      firstName: '',
      lastName: '',
      streetAndNumber: '',
      country: '',
      postalCode: '',
      city: '',
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
      paymentType: "",
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
      setPaymentType(paymentType) {
        setData({
          ...data,
          paymentType,
        })
      },
      setAccountHolder(accountHolder) {
        setData({
          ...data,
          accountHolder,
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
      setCardHolder(cardHolder) {
        setData({
          ...data,
          cardHolder,
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
      setCardCvc(cardCvc) {
        setData({
          ...data,
          cardCvc,
        })
      },
    }
}

export function useCheckout(initialData) {
  const deliveryAddress = useAddress(initialData.deliveryAddress)
  const billingAddress = useAddress(initialData.billingAddress)
  const payment = usePayment(initialData.payment)
  const [email, setEmail] = useState(initialData.email || "" )
  const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber || '')
  const [newsletter, setNewsletter] = useState(false)
  const [termsAndConditions, setTermsAndConditions] = useState(false)
  const enableBuy = termsAndConditions

  return {
    deliveryAddress,
    billingAddress,
    payment,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    enableBuy,
    orderCompletion: {
      newsletter,
      setNewsletter,
      termsAndConditions,
      setTermsAndConditions,
    },
  }
}