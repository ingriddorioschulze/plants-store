
/**
 * This file contains a backend mock used to simulate the requests and responses.
 */
export const data = {
    type: "shoppingcart",
    shoppingcartid: "a4cde56a-2e71-42ab-a458-b52dc81b0fdd",
    products: [
      {
        productid: "21291d4d-6199-45eb-8549-e941813752f8",
        title: "Monstera Deliciosa",
        price: "10.99",
        amount: 1,
        image: "/assets/monsteradeliciosa.jpg"
      },
      {
        productid: "f05f4a23-10a1-4f39-a959-bfcbfaa613a3",
        title: "Photos Ivy",
        price: "200.99",
        amount: 1,
        image: "/assets/photosivy.jpg"
      }
    ],
    sum: "211.98",
    vadPercent: "19%",
    vadSum: "49,19",
    deliveryCosts: "4.99",
    totalSum: "266.16"
}

/**
 * 
 * This function send order data to the backend
 * @returns A promise containing the order comfirmation data
 */
export function executeOrder(checkout) {

  const deliveryAddress = checkout.deliveryAddress.data
  
  return new Promise(resolve => setTimeout(() => {
    resolve({
      orderID:"40dc9802-c8d9-4da7-a9cb-711e0a192c8d",
      orderNumber:"NX-123478",
      customerName:`${deliveryAddress.firstName} ${deliveryAddress.lastName}`,
      customerMail: checkout.email,
      deliveryAddress: `${deliveryAddress.firstName} ${deliveryAddress.lastName}\n${deliveryAddress.streetAndNumber}\n${deliveryAddress.postalCode}\n${deliveryAddress.city}`,
      newsletterAbo: checkout.orderCompletion.newsletter,
    })
  }), 500)

}