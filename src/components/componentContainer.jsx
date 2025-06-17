import { useState } from 'react'
import  MyButton  from './myButton.jsx'
import  MyForm  from './myForm.jsx'
import '../styles/comp_container.css';

function Comp_Container () {


    return (
        <div class='comp_container'>
            Container
            <MyButton />
            <MyButton />
            <MyForm />
        </div>
    )
}

export default Comp_Container;