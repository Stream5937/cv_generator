import { useState } from 'react'
import  Input  from './myInput.jsx'
import {CV_gen, CV_edu, CV_exp} from '../data/data.js'
import personal from '../assets/personal.png'
import expandMore from '../assets/expand-more.png';
import expandLess from '../assets/expand-less.png';
import '../styles/my_form.css';

//function MyForm_gen () {
const MyForm_gen = () => {
    const [cv_gen, setCV_gen] = useState(CV_gen[0]);
    const[name, setName] = useState(CV_gen[0].name);
    const [email, setEmail] = useState(CV_gen[0].email);
    const [tel, setTel] = useState(CV_gen[0].tel);

    const toggleForm = () => {
        setIsShown(!isShown);
    };
    const [isShown, setIsShown] = useState(false);

    console.log('data gen: ', CV_gen);
    console.log('data edu: ', CV_edu);
    console.log('data exp: ', CV_exp);

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
          {isShown && (
            <div>
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
            )}
        </div>
    )
}


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

  console.log('data: ', CV_edu);

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

/*
  companyName: 'John Doe\'s Company',
  positionTitle: 'Astrophysicist',
  responsibilities: 'Making the tea',
  startDate: '01/02/2023',
  endDate:   '01/03/2024'
*/

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

    console.log('data gen: ', CV_gen);
    console.log('data edu: ', CV_edu);
    console.log('data exp: ', CV_exp);

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
export {MyForm_gen, MyForm_edu, MyForm_exp}