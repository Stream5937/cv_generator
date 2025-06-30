import React, { useState, useEffect, useRef } from 'react';
import './EditGenModal.css';
import Modal from '../Modal/Modal';

const EditGenModal = ({ onSubmit, modalData, isOpen, onClose }) => {
  const focusInputRef = useRef(null);
  const [formData, setFormData] = useState(modalData);

  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current.focus();
      }, 0);
    }
  }, [isOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleClose = () => {
    setFormData(modalData);
    onClose();
  };

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor="name">Name</label>
          <input
            ref={focusInputRef}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            ref={focusInputRef}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="tel">Tel. number</label>
          <input
            type='number'
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={handleInputChange}
            required
          /> 
        </div>
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditGenModal;


/*
  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            ref={focusInputRef}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="digestType">Digest Type</label>
          <select
            id="digestType"
            name="digestType"
            value={formData.digestType}
            onChange={handleInputChange}
            required
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
*/
