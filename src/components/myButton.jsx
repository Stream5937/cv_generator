import { useState } from 'react';
import '../styles/my_button.css';

function MyButton (label='btn', id=0) {


    return (
        <button 
            type='button'
            label={label}
            id= {id}
            >
           btn
        </button>
    )
}

export default MyButton;