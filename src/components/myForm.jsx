import { useState, useEffect } from 'react';
//import  Input  from './myInput.jsx'
//import {CV_gen, CV_edu, CV_exp} from '../data/data.js'
import personal from '../assets/personal.png'
import expandMore from '../assets/expand-more.png';
import expandLess from '../assets/expand-less.png';
//import  MyButton  from './myButton.jsx'
//import EditGen from './EditGenModal/EditGenModalCall.jsx'
import '../styles/my_form.css';

const MyForm_gen = (props) => {

console.log('props: ',props);

    const [form, setForm] = useState('form_gen');
    const[name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [isShown, setIsShown] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const  toggleForm =() => {
        setIsShown(!isShown);
        //toggleEdit();
    };
    
    const toggleEdit = () => {
       // setIsEdit(!isEdit);
    };

//NB not using useEffect which should not be called conditionally

   // if(props.isEditing){
       //toggleForm();
      //setIsEdit(!isEdit);
      /*
        setName(name);
        setEmail(email);
        setMobile(mobile);
        setIsShown(true);
        */
       //setIsShown(!isShown);
   // }

    const isFormValid = () => {
    return name.length && email.length && mobile.length;
  };
    
  
const handleNameChange= (e) => {
      e.preventDefault();
      setName(e.target.value);  
  };

  const handleEmailChange= (e) => {
    e.preventDefault();
    setEmail(e.target.value);    
  };

  const handleMobileChange= (e) => {
    e.preventDefault();
    setMobile(e.target.value);    
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      mobile: mobile,
      form: form,
      isShown: isShown,
    };
    props.saveInputValue(formData);
     /*
    setForm(form);
    
    setName('');
    setEmail('');
    setMobile('');
    
    setName(name);
    setEmail(email);
    setMobile(mobile);
    */
    setIsShown(false);
    /**/
    /*
    const handleClick_edit_gen = () => {
        console.log('Edit general info Button was clicked');
       //open edit modal
       
    };
*/
  };

    return (
        <div className='my_form_general'>
          <div className="form-header">
          <div className="form-header-title">
          <img className="form-header-img" src={personal} />
          <p>General Information</p>
          <img
          onClick={toggleForm}
          src={isShown ? expandLess : expandMore}
          className="expand-icon"
          />
          </div>
        </div>
          {(isShown || props.isEditing) && (
          <form onSubmit={onSubmitForm}>
            <div>
                <div className="input-container">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  id="fullName"
                  value= {name} required minLength="2"
                  onChange={handleNameChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="mobile">Mobile Phone Number</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="mobile no."
                  id="mobile"
                  value={mobile}
                  onChange={handleMobileChange}
                />
              </div>
            </div>
            <div className="form-buttons">
            <span></span>
            <button className="save-form" type="submit" disabled={!isFormValid()}>
              <span>
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="svg-right"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                </svg>{' '}
                <span></span>
                Save
              </span>
            </button>
          </div>
            </form>
            )}
        </div>
    )
}

/*
const MyForm_edu = () => {

    const [cv_edu, setCV_edu] = useState(CV_edu[0]);
    const[schoolName, setSchoolName] = useState(CV_edu[0].schoolName);
    const [studyTitle, setStudyTitle] = useState(CV_edu[0].studyTitle);
    const [studyDate, setStudyDate] = useState(CV_edu[0].studyDate);

    const toggleForm = () => {
        setIsShown(!isShown);
    };
    const [isShown, setIsShown] = useState(false);

    const handleSchoolNameChange= (e) => {
   setSchoolName(e.target.value);
    const newCV_edu = { 
      ...cv_edu, 
      schoolName: {schoolName}
    }
    setCV_edu(newCV_edu);    
  };

  //console.log('data: ', CV_edu);

  const handleStudyTitleChange= (e) => {
   setStudyTitle(e.target.value);
    const newCV_edu = { 
      ...cv_edu, 
      studyTitle: {studyTitle}
    }
    setCV_edu(newCV_edu);    
  };

  const handleStudyDateChange= (e) => {
   setStudyDate(e.target.value);
    const newCV_edu = { 
      ...cv_edu, 
      studyDate: {studyDate}
    }
    setCV_edu(newCV_edu);    
  };


    return (
        <div className='my_form_education'>
          <div className="form-header">
          <div className="form-header-title">
          <img className="form-header-img" src={personal} />
          <p>Education Information</p>
          <img
          onClick={toggleForm}
          src={isShown ? expandLess : expandMore}
          className="expand-icon"
          />
          </div>
          </div>
          {isShown && (
            <div>
            <Input  label='School Name'
                    value= {schoolName} required minLength="2"
                    onChange= {handleSchoolNameChange}/>
            <Input  label='Study Title'
                    value= {studyTitle}
                    onChange= {handleStudyTitleChange}/>
            <Input  label='Study Date'
                    value= {studyDate}
                    onChange= {handleStudyDateChange}/>
                </div>
            )}
        </div>
        
    )
}


function MyForm_exp () {

    const [cv_exp, setCV_exp] = useState(CV_exp[0]);
    const[company, setCompany] = useState(CV_exp[0].companyName);
    const[position, setPosition] = useState(CV_exp[0].positionTitle);
    const [responsibilities, setResponsibilities] = useState(CV_exp[0].responsibilities);
    const [startDate, setStartDate] = useState(CV_exp[0].startDate);
    const [endDate, setEndDate] = useState(CV_exp[0].endDate);

    const toggleForm = () => {
        setIsShown(!isShown);
    };
    const [isShown, setIsShown] = useState(false);

    

    const handleCompanyChange= (e) => {
    setCompany(e.target.value);
    const newCV_exp = { 
      ...cv_exp, 
      company: {company}
    }
    setCV_exp(newCV_exp);    
  };

    const handlePositionChange= (e) => {
    setPosition(e.target.value);
    const newCV_exp = { 
      ...cv_exp, 
      position: {position}
    }
    setCV_exp(newCV_exp);    
  };

  const handleResponsibilitiesChange= (e) => {
   setResponsibilities(e.target.value);
    const newCV_exp = { 
      ...cv_exp, 
      responsibilities: {responsibilities}
    }
    setCV_exp(newCV_exp);    
  };

  const handleStartChange= (e) => {
   setStartDate(e.target.value);
    const newCV_exp = { 
      ...cv_exp, 
      startDate: {startDate}
    }
    setCV_exp(newCV_exp);    
  };

  const handleEndChange= (e) => {
   setEndDate(e.target.value);
    const newCV_exp = { 
      ...cv_exp, 
      endDate: {endDate}
    }
    setCV_exp(newCV_exp);    
  };


    return (
        <div className='my_form_experience'>
          <div className="form-header">
          <div className="form-header-title">
          <img className="form-header-img" src={personal} />
          <p>Experience Information</p>
          <img
          onClick={toggleForm}
          src={isShown ? expandLess : expandMore}
          className="expand-icon"
          />
          </div>
          </div>
          
          {isShown && (
            <div>
            <Input  label='Company'
                    value= {company} required minLength="2"
                    onChange= {handleCompanyChange}/>
            <Input  label='Position Title'
                    value= {position} required minLength="2"
                    onChange= {handlePositionChange}/>
            <Input  label='Responsibilities'
                    value= {responsibilities}
                    onChange= {handleResponsibilitiesChange}/>
            <Input  label='From'
                    value= {startDate}
                    onChange= {handleStartChange}/>
            <Input  label='To'
                    value= {endDate}
                    onChange= {handleEndChange}/>
             </div>
            )}
        </div>
        
    )
}

//NB NOT ALLOWED HOOK RULES DO NOT USE HOOKS INSIDE LOOPS OR CONDITIONAL STATEMENTS

//SO EACH CALL HAS TO BE UNIQUE 
/*
//match suffix to function call
const form = {
  'general' : MyForm_gen(),
  'education': MyForm_edu(),
  'experience': MyForm_exp()
}


function MyForm (suffix){
  switch ( suffix) {
    case 'general': {
      return (
          form.general
      )
    }
    case 'education': {
      return (
          form.education
      )
    }
    case 'experience': {
      return (
          form.experience
      )
    }
    default: {
        return (
          console.log ('Error calling MyForm : unknown suffix')
        )
      }
  }//switch
}  
*/

//export default MyForm
//export {MyForm_gen, MyForm_edu, MyForm_exp}
export {MyForm_gen}
//export default MyForm_gen;



/*
const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      mobile: mobile,
      form: form,
      isShown: isShown,
    };
    props.saveInputValue(formData);
    setName('');
    setEmail('');
    setMobile('');
    setIsShown(false);
  };
*/