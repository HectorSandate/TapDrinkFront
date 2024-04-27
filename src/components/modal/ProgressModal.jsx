import React from 'react';
import LiquidFillChart from '../LiquitProcess';

function ProgressModal({ isOpen, onClose, progress }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-900 bg-opacity-70 z-50 flex justify-center items-center">
      <div className="bg-white p-12 rounded-lg max-w-md">
        <LiquidFillChart percentage={progress} />
        <button
          onClick={onClose}
          className="block mt-4 bg-gray-200 text-black px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ProgressModal;
