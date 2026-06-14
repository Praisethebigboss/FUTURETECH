import React from 'react'
import NavBar from '../components/layouts/NavBar'
import LoaderComp from '../components/ui/LoaderComp'
import { useAuth } from '../config/AuthContext'
import Headers from '../components/layouts/Headers'
import Main from '../components/layouts/Main'
import Footer from '../components/layouts/Footer'
const HomePage = () => {
  const{loading}=useAuth()
  return (
    <>
      {loading ? <LoaderComp/>:""}
        <NavBar/>
     <section className='xs:mt-26 sm:mt-32 lg:mt-37'>
        <Headers/>
        <Main/>
        <Footer/>
      </section>    
    </>
  )
}

export default HomePage