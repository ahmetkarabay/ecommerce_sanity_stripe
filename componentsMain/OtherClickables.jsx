import React from 'react'

const OtherClickables = () => {
  return (
    <section id='sm-banner' className='section-p1' style={{backgroundColor: 'slategray',}}>


      <div className="banner-box" style={{marginLeft: '200px',}}>
        <h4>Self-Made</h4>
        <h2>Create Your Own Glasses</h2>
        <span>Create glasses best fit for you!</span>
        <button className="white">Learn More</button>
      </div>
      <div className="banner-box banner-box2" style={{marginRight: '200px',}}>
        <h4>Our Story!</h4>
        <h2>Learn About Our Past!</h2>
        <span>Learn how we ended up as we are now!</span>
        <button className="white">Learn More</button>
      </div>


    </section>
  )
}

export default OtherClickables