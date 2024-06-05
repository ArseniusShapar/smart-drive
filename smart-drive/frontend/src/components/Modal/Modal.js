import { React, useState } from 'react';
import './Modal.css';

export default function Modal({ children }) {
    const [isOpen, setIsOpen] = useState(true)

    const onClose = () => {
        setIsOpen(false);
    }


    if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='modal-close' onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};