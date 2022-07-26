import React from 'react'
import { Navbar } from '../componentsMain/Components'
import { AboutUsInfo, SupFooter, WriteSupport, } from '../ComponentsSup/ComponentsSup'


const Support = () => {
    return (
      <>
  
        <head>
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
        </head>
  
  
        <main>
          <div id='supportNav'>
            <Navbar />
          </div>
          <AboutUsInfo />
          <WriteSupport />
          <SupFooter />
        </main>
  
      </>
    )
  }
  
  export default Support