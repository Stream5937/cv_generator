
import { useState } from 'react'
import  MyButton  from './myButton.jsx'
import  MyForm  from './myForm.jsx'
import '../styles/comp_container.css';

function Comp_Container () {
   // const [id, setID] = useState(0);
   //const [labelText, setLabelText] = useState('');
   //setLabelText('Edit');
   //const Comp_Container = () => {
   //const label={setLabelText('Edit')};
   
    const handleClick_Edit = () => {
        console.log('Edit Button was clicked');
    };
    const handleClick_Submit = () => {
        console.log('Submit Button was clicked');
    };
    
    return (
        <div className='comp_container'>
            Container
            <MyButton onClick={handleClick_Edit}>Edit</MyButton>
            <MyButton onClick={handleClick_Submit}>Submit</MyButton>
            <MyForm />
        </div>
    );
}

/*
<MyButton onClick={handleClick} label={setLabelText('Edit')}>{labelText}</MyButton>
<MyButton onClick={handleClick} label={setLabelText('Submit')}>{labelText}</MyButton>
<MyForm />
export default Comp_Container;

/*
import  MyButton  from './myButton.jsx'

const Comp_Container = () => {
    const handleClick = () => {
        console.log('Button was clicked');
    };

    return (
        <div>
            <MyButton onClick={handleClick}>
                Edit
            </MyButton>
        </div>
    );

};
*/

export default Comp_Container;
