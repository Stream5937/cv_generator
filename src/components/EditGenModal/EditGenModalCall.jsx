import { useState } from 'react'
//import './App.css'
import EditGenModal from './EditGenModal.jsx'
import {CV_gen, CV_edu, CV_exp} from '../../data/data.js'

function EditGen() {
  const [isEditGenModalOpen, setEditGenModalOpen] = useState(false);
  const [cv_gen, setCV_gen] = useState(CV_gen[0]);

  // Example default data (could be fetched from an API)
  /*
  const defaultEditGenModalData = {
    
    email: '',
    digestType: 'weekly',
    
  };
*/
  const [editGenFormData, setEditGenFormData] = useState(
    //defaultEditGenModalData
    CV_gen[0]
  );

  const handleOpenEditGenModal = () => {
    setEditGenModalOpen(true);
  };

  const handleCloseEditGenModal = () => {
    setEditGenModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    console.log('pre: ', CV_gen);
    console.log('data: ',data);
   // setEditGenFormData(data);
    const newCV_gen = { 
      ...cv_gen, 
      name: data.name,
      email: data.email,
      tel: data.tel
    }
    console.log('post_1: ', newCV_gen);
    setCV_gen(newCV_gen);
    //setCV_gen(data);
    //console.log('post_2: ', CV_gen);
    handleCloseEditGenModal();
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '1em' }}>  General Information
        <button onClick={handleOpenEditGenModal}>
          Edit
        </button>
      </div>     

      <EditGenModal
        isOpen={isEditGenModalOpen}
        modalData={editGenFormData}
        onSubmit={handleFormSubmit}
        onClose={handleCloseEditGenModal}
      />
    </>
  );
};

export default EditGen

/*
return (
    <>
      <div style={{ display: 'flex', gap: '1em' }}> 
        <button onClick={handleOpenEditGenModal}>
          Edit
        </button>
      </div>

      {editGenFormData && editGenFormData.email && (
        <div className="msg-box">
          <b>{editGenFormData.email}</b> requested a{' '}
          <b>{editGenFormData.digestType}</b> newsletter.
        </div>
      )}

      <EditGenModal
        isOpen={isEditGenModalOpen}
        modalData={editGenFormData}
        onSubmit={handleFormSubmit}
        onClose={handleCloseEditGenModal}
      />
    </>
  );



  {editGenFormData && editGenFormData.email && (
        <div className="msg-box">
          <b>{CV_gen[0].name}</b>
          <b>{CV_gen[0].email}</b> requested a{' '}
          <b>{CV_gen[0].tel}</b>
        </div>
      )}

*/

/*const [cv_gen, setCV_gen] = useState(CV_gen[0]);*/