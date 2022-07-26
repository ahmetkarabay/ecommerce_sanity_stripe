import React from 'react'
import { Navbar } from '../componentsMain/Components'
import { CartItemDisplay, PayNowArea, ShopAgain, } from '../ComponentsCart/ComponentsCart'


const Cart = () => {
    return (
      <>
  
        <head>
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
        </head>
  
  
        <main>
          <div id='cartNav'>
            <Navbar />
          </div>
          <ShopAgain />
          <CartItemDisplay />
          <PayNowArea />
        </main>
  
      </>
    )
  }
  
  export default Cart