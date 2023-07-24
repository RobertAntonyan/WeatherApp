import React from 'react'
import '../Info/Info.css'

function Info({date}) {
return (
    <div className='info'>
     <h2>Weather App</h2>
     <p className='data'>{date}</p>

     {/* <p>Check the weather in your city</p> */}
    </div>
  )
}

export default Info