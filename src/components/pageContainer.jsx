import { useState } from 'react'
import { MyForm_gen,
        // Form_edu,
        // Form_exp
} from './myForm.jsx'
import RenderField from './RenderField.jsx'
import '../styles/page_container.css'
import DisplayCV from './displayData.jsx';
import editIcon from '../assets/edit-1.png'

function Page_Container () {

    const [form_gen, setFormGen] = useState('');
    const [editFormGen , setEditFormGen] = useState(false);

    const editForm = () => {
      console.log('edit clicked - editFormGen: ',editFormGen);
      setEditFormGen(!editFormGen);
     // setEditFormGen(true);
  };

  const saveInputValue = (obj) => {
        setFormGen(obj);
        setEditFormGen(false);
  };

 // console.log('form_gen: ',form_gen);

  
    return (
        <>
        <div className="basic-form-fill page_container">
           {!editFormGen && (
              <MyForm_gen 
                saveInputValue={saveInputValue}
                isEditing={editFormGen}
                infoToEdit={form_gen}
              />
            )}
           
            {editFormGen && (
              <MyForm_gen 
                saveInputValue={saveInputValue}
                isEditing={editFormGen}
                infoToEdit={form_gen}
              />
            )}
            {form_gen != '' && (
              <div className="basic-form-show">
                <div className="basic-form-general-info">
                  <RenderField props={form_gen} />
                </div>
                <div>
                <img
                      onClick={editForm}
                      src={editIcon}
                      className="edit-form"
                  />
                </div>
              </div>
            )}
          </div>



        <div className="cv-show">
          <div className="cv-section" id="cv-report">
            <div className="cv-basic-info">
              <RenderField props={form_gen}/>
            </div>

          </div>
        </div>
        
            
        </>
    )
    
}

export default  Page_Container ;

/*
<DisplayCV props={form_gen}/>



 <div className='page_container'>
            <MyForm_gen 
                saveInputValue={saveInputValue}
                isEditing={editFormGen}
                infoToEdit={form_gen}
            />      
        </div>


        <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 -960 960 960"
                      width="48"
                      className="svg-edit"
                    >
                      <path d="M480-120v-71l216-216 71 71-216 216h-71ZM120-330v-60h300v60H120Zm690-49-71-71 29-29q8-8 21-8t21 8l29 29q8 8 8 21t-8 21l-29  <SaveCV />29ZM120-495v-60h470v60H120Zm0-165v-60h470v60H120Z" />
                    </svg>
                    <span></span>
                    Edit
                  </span>


 {!editFormGen && (
              <MyForm_gen 
                saveInputValue={saveInputValue}
                isEditing={editFormGen}
                infoToEdit={form_gen}
              />
            )}





                  */