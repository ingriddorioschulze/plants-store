
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
