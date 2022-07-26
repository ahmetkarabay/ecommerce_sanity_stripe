import React from 'react'
import { BenefitsBanner, DiscountBanner, Footer, HeroWelcome, HomeFeaturedProds, Navbar, OtherClickables, } from '../componentsMain/Components'

// import { client } from '../LIB/client';


const Home = () => {
return (
     <>

       <head>
         <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
         <title>Horizon Shades | HomePage</title>
       </head>


       <main>
        <div id='homeNav'>
         <Navbar />
        </div>
         <HeroWelcome />
         <br/>
         <BenefitsBanner />
         <br/>
         <HomeFeaturedProds />
         <br/>
         <DiscountBanner />
         <br/>
         <OtherClickables />
         <Footer />
       </main>

     </>
   )
}

export default Home

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query); 
   

//   return {
//     props: { products }
//   }
// }
