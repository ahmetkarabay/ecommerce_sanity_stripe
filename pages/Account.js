import React from 'react'
import { Navbar } from '../componentsMain/Components'
import { AccountInfo, SignInArea, SignInOptions, } from '../ComponentsAcc/ComponentsAcc'



const Account = () => {
    return (
      <>
  
        <head>
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
        </head>
  
  
        <main>
          <div id='accountNav'>
            <Navbar />
          </div>
          <SignInOptions />
          <SignInArea />
          <AccountInfo />
        </main>
  
      </>
    )
  }
  
  export default Account