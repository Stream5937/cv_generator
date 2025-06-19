import { useState } from 'react'
import '../styles/my_input.css'

function Input () {



    return(
        <div className="my_input" >
            <label htmlFor="first-name">FIRST NAME</label>
            <input type="text" id="first-name" name="first-name" required minLength="2" />
        </div>
    )

}

export default Input;