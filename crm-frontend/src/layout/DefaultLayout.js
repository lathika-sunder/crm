import React from 'react'
import Footer from './partials/FooterComp'
import Header from './partials/HeaderComp'
import '../../src/App.css'
export const DefaultLayout = ({children}) => {
  return (
    <div>
    
      <div className='header'>
      <Header />
      </div>
    

        <main className='main'>
        <div className='breadcrumbs'>

        
        </div>
        
        {children}

        </main>
      <div className='footer'>
      <Footer />
      </div>    
    </div>
    

  )
}

export default DefaultLayout