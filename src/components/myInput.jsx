import { useState } from 'react'
import '../styles/my_input.css'

function Input () {



    return(
        <div class="my_input" >
            <label for="first-name">FIRST NAME</label>
            <input type="text" id="first-name" name="first-name" required minlength="2" />
        </div>
    )

}

export default Input;