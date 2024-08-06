import React from 'react'
import './Pricing.css'

const Pricing = () => {
  return (
    <div className='centerTxt pricingBox'>
      <hr />
      <h1>Services Offered</h1>
      <p> Classic Haircut  -  Short to medium hairstyles  -  $50</p>
      <p> Buzz Cut  -  Single size all around  -  $40</p>
      <p> Hot Towel Shave  -  Straight razor wet shave  -  $55</p>
      <p> Classic Beard Trim  -  Long and neat trim and styling  -  $35</p>
      <p> Head Shave  -  Hot Towel razor head shave  -  $50</p>
      <p> Haircut and beard trim  -  $65</p>
      <p> Head Shave + Beard Trim  -  $70</p>
      <p>Full Service  -  Haircut + hot towel shave 60-75 minute service  -  $75</p>
      <p>Kids Haircut  -  Ages 0-12 Classic style  -  $30</p>
      <hr className='bottomHr'/>
    </div>
  )
}

export default Pricing