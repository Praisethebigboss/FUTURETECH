import React from 'react'
import AppButton from './AppButton'
import TabLayout from './TabLayout'
import TabCard from './TabCard'


const TabSection = ({data,items}) => {
   
  return (
    <section className='p-2 h-fit font-inter text-white bg-[#141414] w-[100%] '>
        <TabCard
         TabsItems={items}
        />
        <TabLayout/>
    </section>
  )
}

export default TabSection