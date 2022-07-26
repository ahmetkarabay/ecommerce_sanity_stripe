import React from 'react'
import Link from 'next/link'


const holyImg = new URL('../assets/img/home_img/HomePageIntro/best_image_holy.png', import.meta.url)

const Navbar = () => {
  return (
    <section id="header">
      <Link href="/">
        <div id="logo">
          <img src={holyImg} className='logo' alt="" width="100" height="90" style={{ marginLeft: '505px', marginTop: '-20px', }} />
        </div>
      </Link>
      <div style={{ fontFamily: 'Satisfy, sans-serif; margin: 0', }} >
        <ul id="navbar">
          <Link href='/'>
            <li><a style={{ fontFamily: 'Georgia, Times New Roman, Times, serif', marginLeft: '-625px', marginBottom: '10px', fontSize: '35px', }}>Horizon Shades</a></li>
          </Link>
          <Link href="/">
            <li><a className="homeActive">Home</a></li>
          </Link>
          <Link href="/Shopping">
           <li><a className="shoppingActive">Shopping</a></li>
          </Link>
          <Link href='/Support'>
            <li><a className='supportActive'>Support</a></li>
          </Link>
          <Link href='/Cart'>
            <li><a className='cartActive'><i className="far fa-solid fa-shopping-basket"></i></a></li>
          </Link>
          <Link href='/Account'>
            <li><a className='accountActive'><i className="far fa-solid fa-user"></i></a></li>
          </Link>
        </ul>
      </div>
    </section>
  )
}


export default Navbar