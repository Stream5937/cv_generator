import '../styles/display_container.css'
import '../styles/comp_container.css'
import {CV_gen , CV_edu , CV_exp} from '../data/data.js'



function DisplayCV () {

    const gen = () => {
        return (
            <div className='comp_container'>
            <span id='1'>Name : {CV_gen[0].name }</span><br/>
            <span id='2'>Email : {CV_gen[0].email }</span><br/>
            <span id='3'>Tel. number : {CV_gen[0].tel }</span><br/>
            </div>
        )
    };

const edu = () => {
        return (
            <div className='comp_container'>
            <span id='4'>School : {CV_edu[0].schoolName }</span><br/>
            <span id='5'>Study Title : {CV_edu[0].studyTitle }</span><br/>
            <span id='6'>Study Date : {CV_edu[0].studyDate }</span><br/>
            </div>
        )
    };

const exp = () => {
        return (
            <div className='comp_container'>
            <span id='7' >Company : {CV_exp[0].companyName }</span><br/>
            <span id='8'>Position : {CV_exp[0].positionTitle }</span><br/>
            <span id='9' >Responsibilities : {CV_exp[0].responsibilities }</span><br/>
            <span id='10' >From : {CV_exp[0].startDate }</span> - - 
            <span >To : {CV_exp[0].endDate }</span><br/>
            </div>
        )
    }

    return (
        <div className='display_container'>
            <div className='display_general'>{gen()}</div>
            <div className='display_education'>{edu()}</div>
            <div className='display_experience'>{exp()}</div>
        </div>

    )

}

export default DisplayCV
