
import { useState } from 'react'
import  MyButton  from './myButton.jsx'
import  {MyForm_gen, MyForm_edu, MyForm_exp}  from './myForm.jsx'
import EditGen from './EditGenModal/EditGenModalCall.jsx'

import '../styles/comp_container.css';

/*
//function Comp_Container_gen () with EditGenModal
function Comp_Container_gen () {
    return (
        <div className='comp_container'>
            <EditGen />
            <MyForm_gen/>
        </div>
    );
}
*/

/** */
function Comp_Container_gen () {
    //form entries for general information
    
   return (
    <div className='comp_container'>
        <div>
            <MyForm_gen/>
        </div>   
    </div>
    );
}

/**/

function Comp_Container_edu () {
   /*   
    const handleClick_edit_edu = () => {
        console.log('Edit education info Button was clicked');
    };
    const handleClick_submit_edu = () => {
        console.log('Submit education info Button was clicked');
    };
    */
   return (
        <div className='comp_container'>
            <MyForm_edu/>
        </div>
    );
}

function Comp_Container_exp () {
    /*
    const handleClick_edit_exp = () => {
        console.log('Edit experience info Button was clicked');
    };
    const handleClick_submit_exp = () => {
        console.log('Submit experience info Button was clicked');
    };
    */
   return (
        <div className='comp_container'>
            <MyForm_exp/>
        </div>
    );
}


export  {Comp_Container_gen, Comp_Container_edu, Comp_Container_exp};



/*

//form entries for general information
    const [generalInfo, setGeneralInfo] = useState('');
    //permit edit or not
    const [editGeneral, setEditGeneral]= useState(false);

    const handleClick_edit_gen = () => {
        console.log('Edit general info Button was clicked');
        setGeneralInfo()
    };
    const handleClick_submit_gen = () => {
        console.log('Submitgeneral info Button was clicked');
    };

{isShown && ( )}

<div>
            <MyButton onClick={handleClick_edit_gen}>Edit</MyButton>
            <MyButton onClick={handleClick_submit_gen}>Submit</MyButton>
            <MyForm_gen/>
        </div>
*/
