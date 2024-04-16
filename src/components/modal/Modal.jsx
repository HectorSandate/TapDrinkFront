import React from 'react';

const Modal = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto"> {/* Modificar estas clases */}
        <div className="flex justify-end">
          <button onClick={close} className="bg-red-500 text-white p-2 rounded">Cerrar</button>
        </div>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
