import React from 'react'
import InputData from '../components/InputData'
import DisplayData from '../components/DisplayData'
import PrintPage from './PrintPage'
import SchoolHeading from '../components/SchoolHeading'

const Home = () => {
  return (
    <div className='container border-2 mx-auto'>
        <InputData />
        <DisplayData />
       
    </div>
  )
}

export default Home