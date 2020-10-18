import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from "../api"

//#region styles
const ShopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .checkout-button {
  width: 35%;
  margin: 15px;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bolder;
  border: solid 1px black;
  background-color: white;
  font-family: 'Nixie One', cursive;
}
`
const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 395px;
  width: 300px;
  padding: 40px;
  margin: 40px;
  border: solid 1px black;

  img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  margin: 5px;
}

.title {
  margin: 12px;
  font-size: 20px;
  font-weight: bolder;
  font-family: 'Nixie One', cursive;
}
.price {
  margin: 20px;
  font-size: 16px;
  font-weight: bolder;
  font-family: 'Nixie One', cursive;
}

.cart-button {
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bolder;
  border: solid 1px black;
  background-color: white;
  font-family: 'Nixie One', cursive;
}
`
//#endregion

/**
 * This component render a list of products and allows adding them to the cart.
 */
function Shop({ history }) {
  const [productsData, setProductsData] = useState(data.products)
  
  function handleCartClick() {
    const text = "Item added to the cart"
    alert(text)
    }

  function handleCheckoutClick() {
    history.push('/checkout')
  }

  return (
    <ShopWrapper>
      <ProductsWrapper>
      {productsData.map(product => (
        <ProductCard key={product.productid}>
          <img alt={product.title} src={product.image}/>
          <div className="title">{product.title}</div>
          <div className="price">{product.price}</div>
          <button className="cart-button" onClick={handleCartClick}>Add to Cart</button>
        </ProductCard>
      ))}
      </ProductsWrapper>
      <button className="checkout-button" onClick={handleCheckoutClick}>Checkout</button>
    </ShopWrapper>
  )
}

export default Shop
