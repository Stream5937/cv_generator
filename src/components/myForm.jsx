import { useState } from 'react'
import  Input  from './myInput.jsx'
import {CV_gen} from '../data/data.js'
import '../styles/my_form.css';

function MyForm_gen () {

    console.log('data: ', CV_gen);

    const [cv_gen, setCV_gen] = useState(CV_gen[0]);
    const[name, setName] = useState(CV_gen[0].name);
    const [email, setEmail] = useState(CV_gen[0].email);
    const [tel, setTel] = useState(CV_gen[0].tel);

    const handleNameChange= (e) => {
   setName(e.target.value);
    const newCV_gen = { 
      ...cv_gen, 
      name: {name}
    }
    setCV_gen(newCV_gen);    
  };

  const handleEmailChange= (e) => {
   setEmail(e.target.value);
    const newCV_gen = { 
      ...cv_gen, 
      email: {email}
    }
    setCV_gen(newCV_gen);    
  };

  const handleTelChange= (e) => {
   setTel(e.target.value);
    const newCV_gen = { 
      ...cv_gen, 
      tel: {tel}
    }
    setCV_gen(newCV_gen);    
  };


    return (
        <div className='my_form_general'>
            Form General Info.
            <Input  label='Full Name'
                    value= {name} required minLength="2"
                    onChange= {handleNameChange}/>
            <Input  label='Email'
                    value= {email}
                    onChange= {handleEmailChange}/>
            <Input  label='Tel. number'
                    value= {tel}
                    onChange= {handleTelChange}/>
        </div>
    )
}

function MyForm (){
    return (
        MyForm_gen()
    )
}

export default MyForm;