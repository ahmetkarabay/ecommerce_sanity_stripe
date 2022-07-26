import React from 'react'

const ValidPay = new URL('../assets/img/home_img/Features/BESTBOTHLOGO.png', import.meta.url)

const Footer = () => {
  return (
    <section className='section-p1 shadesFooter' style={{fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif',}}>


      <div className="col">
        <h4 style={{paddingBottom: '25px', fontSize: '20px', textDecoration: 'underline',}}>Contact</h4>
        <p style={{marginBottom: '8px',}}><strong>Phone: </strong>+1 512 000 0000</p>
        <p style={{marginBottom: '16px',}}><strong>Hours: </strong>Mon-Fri(9-5)/Sat-Sun(10-4)</p>
        <div className="follow">
          <h4 style={{marginBottom: '7px',}}>Follow us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4 style={{fontSize: '20px', marginBottom: '21px', textDecoration: 'underline',}}>About</h4>
        
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
      </div>

      <div className="col" style={{marginRight: '600px',}}>
        <h4 style={{fontSize: '20px', marginBottom: '21px', textDecoration: 'underline',}}>Account</h4>
        
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">Help</a>
        <a href="#">Settings</a>

        <div className="col install">
          <h4>Secured Payment Gateways </h4>
          <img src={ValidPay} alt="" style={{height: '75px',}}/>
        </div>
      </div>

      <div className="copyright">
        <p>© 2022, Horizon Shades - HTML CSS Ecommerce Website</p>
      </div>


    </section>
  )
}

export default Footer