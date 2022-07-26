import React from 'react'


const BenefitsBanner = () => {
  return (
    <section id="feature" className="section-p2">

      <div className='fe-box'>
        <h2 style={{ marginTop: '-20px', fontSize: '35px', color: 'darkred', }}>Just Some of Our Products Benefits Include:</h2>
        <ul id="Benefits">
          <li style={{paddingBottom: '5px,'}}>
            Extreme Durability
            <span style={{fontSize:'smaller,'}}>(Not Crush Resistant)</span>
          </li>
          &nbsp;
          <li style={{paddingBottom:'5px',}}>
            Minimum of a 3 month Warranty
          </li>
          &nbsp;
          <li style={{paddingBottom:'5px',}}>
            Fall Damage Resistance
            <span style={{fontSize: 'smaller',}}>(Depends on Height of Drop)</span>
          </li>
          &nbsp;
          <li>Water Resistance! Clear EVEN when Wet!</li>
        </ul>
      </div>


    </section>
  )
}


export default BenefitsBanner