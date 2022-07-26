import React from 'react'

const GuyImg = new URL('../assets/img/home_img/HomePageIntro/yesWeKnow.png', import.meta.url)

const HeroWelcome = () => {
  return (
    <>
      <div style={{fontFamily:'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',fontWeight: '700', fontSize: 'larger',}} id='hero' >
        <div id='RiseOrSet'>
          <button1>Sunrise</button1> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button2>Sunset</button2>
        </div>
        <figure>
          <img src={GuyImg} id="CoolGuy" alt="ManImage" />
          <figcaption style={{ marginLeft: '1300px', color: 'white', position: 'absolute', marginTop: '-5px', fontSize: 'x-large', fontFamily: 'Germania One',}}>Satisfaction Guaranteed with our Products!</figcaption>
        </figure>
        <h4>New Extreme Sun Reflecting Sunglasses!</h4>
        <h2 style={{color: 'darkolivegreen',}} >In Stock Now!</h2>
        <h1 style={{color: 'darkslategrey',}} >Amazing Value on All Products!</h1>
        <p>Buy Them Directly at a Discounted Price <a href="/Project/Shop Page Folder/Shop Page.html">Here</a>!</p>
      </div>
    <br />
    </>
  )
}

export default HeroWelcome