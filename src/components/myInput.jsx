import { useState } from 'react'
import '../styles/my_input.css'

function Input ({label, value, onChange}) {

    return(
        <div className="my_input" >
            <label htmlFor={label}>{label}</label>
            <input type="text"
                   id={label} 
                   name={label} 
                   value={value} 
                   onChange={onChange} />
        </div>
    )

}

export default Input;