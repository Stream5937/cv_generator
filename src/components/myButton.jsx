import { useState } from 'react';
import '../styles/my_button.css';
/*
function MyButton ({label}) {

    return (
        <button 
            type='button'
            label={label}
            >
           {label}
        </button>
    )
}

export default MyButton;
*/

const MyButton = ({ children, onClick }) => {
  console.log('btn children: ',children);
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
