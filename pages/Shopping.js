import React from 'react'
import { Navbar } from '../componentsMain/Components'
import { ShopHeader, ShopFooter, Product, } from '../ComponentsShop/ComponentsShop'

import { client } from '../LIB/client';

const Shopping = ({ products }) => {
  return (
    <>


      <head>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
        <title>Horizon Shades | ShoppingPage</title>
      </head>


      <main>
        <div id='shoppingNav'>
          <Navbar />
        </div>
        <div className='shopHeaderContainer'>
          <ShopHeader /> 
        </div>

        <div className='productContainer'>
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>

        <ShopFooter />
      </main>

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);


  return {
    props: { products }
  }
}

export default Shopping