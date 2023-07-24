import React from 'react'
import '../Form/Form.css'
function Form({wheatherMethod}) {


  return (
    <div className='Form'>
        <form onSubmit={wheatherMethod} > 
            <input  type='text' name='city' placeholder='City'/>
            <button>Get the weather</button>
        </form>
        
    </div>
  )
}

export default Form