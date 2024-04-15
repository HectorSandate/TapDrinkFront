import React from 'react';

const Modal = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-12 rounded">
        <button onClick={close} className="bg-red-500 text-white p-2 rounded">Cerrar</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
