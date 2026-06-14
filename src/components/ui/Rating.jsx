import React from 'react'
import rating from '../../assets/subcontainer.png'
const Rating = ({classname}) => {
  return (
    <div className={classname}>
        <img src={rating}
         className=' xs:h-[1.4rem] sm:h-[1.5rem] md:h-[1.7rem] lg:h-[2rem]'
        alt="" />
    </div>
  )
}

export default Rating