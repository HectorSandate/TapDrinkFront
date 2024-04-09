import React from 'react';

const MisionVision = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Misión y Visión</h2>
        <span className="block w-20 h-1 bg-yellow-500 mx-auto mb-8"></span>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="max-w-md">
            <img
              src="/images/bebida.jpg"
              alt="Misión"
              className="mx-auto mb-8 rounded-2xl shadow-xl"
              style={{ width: '350px', height: '350px' }}
            />
            <h3 className="text-2xl text-gray-800 font-bold mb-2">Misión</h3>
            <p className="text-gray-600 mb-4 mr-5">
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable 
            </p>
          </div>
          <div className="max-w-md">
            <img
              src="/images/bebida.jpg"
              alt="Visión"
              className="mx-auto mb-8 rounded-2xl shadow-xl"
              style={{ width: '350px', height: '350px' }}
            />
            <h3 className="text-2xl text-gray-800 font-bold mb-2">Visión</h3>
            <p className="text-gray-600 mb-4 ml-5">
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisionVision;