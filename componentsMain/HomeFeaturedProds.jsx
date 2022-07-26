import React from 'react'

const ProdUno = new URL('../assets/img/home_img/Features/FeaturedProduct1.jpg', import.meta.url)
const ProdDos = new URL('../assets/img/home_img/Features/FeaturedProduct2.png', import.meta.url)
const ProdTres = new URL('../assets/img/home_img/Features/FeaturedProduct3.png', import.meta.url)



const HomeFeaturedProds = () => {
  return (
    <section id="product1" className="section-p1">


      <h2 style={{fontSize: '60px',}}>Featured Products</h2>
      <p style={{fontSize: '25px', color:'blue', fontStyle: 'italic', fontWeight: 'bolder',}}>New Summers Cool Blue Specials!</p>
      <div className="pro-container">
            <div className="pro">
                <img src={ProdUno} alt="Prod1"/>
                <div className="des">
                    <h5>SleekBlack Blue Sunglasses</h5>
                    <h4>$109.99</h4>
                </div>
                
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={ProdDos} alt="Prod2"/>
                <div className="des">
                    <h5>Maroon Blue Sunglasses</h5>
                    <h4>$89.99</h4>
                </div>
                
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={ProdTres} alt="Prod3"/>
                <div className="des">
                    <h5>DeepPurple Horizon Sunglasses</h5>
                    <h4>$144.99</h4>
                </div>
                
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
        </div>  

        <br />

    </section>
  )
}

export default HomeFeaturedProds