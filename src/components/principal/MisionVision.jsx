import React from "react";

const MisionVision = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Misión y Visión
        </h2>
        <span className="block w-20 h-1 bg-yellow-500 mx-auto mb-8"></span>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="max-w-md">
            <img
              src="https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-006.jpg"
              alt="Misión"
              className="mx-auto mb-8 rounded-2xl shadow-xl"
              style={{ width: "350px", height: "350px" }}
            />
            <h3 className="text-2xl text-gray-800 font-bold mb-2">Misión</h3>
            <p className="text-gray-600 mb-4 mr-5">
              "Ser líderes a nivel mundial en la innovación de soluciones
              tecnológicas para la industria de bebidas, transformando la
              experiencia de consumo a través de nuestro software y dispositivo
              dispensador único. Nos esforzamos por estandarizar las recetas y
              los sabores de las bebidas globalmente, promoviendo consistencia y
              calidad excepcional en cada sorbo. Aspiramos a que TapDrik sea
              sinónimo de excelencia, innovación y sostenibilidad, creando un
              futuro donde cada bebida servida supera las expectativas del
              consumidor y contribuye a un sistema de alimentación consciente y
              respetuoso."
            </p>
          </div>
          <div className="max-w-md">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/sex-on-the-beach-vertical-6442f7c22a415.jpg"
              alt="Visión"
              className="mx-auto mb-8 rounded-2xl shadow-xl"
              style={{ width: "350px", height: "350px" }}
            />
            <h3 className="text-2xl text-gray-800 font-bold mb-2">Visión</h3>
            <div className="container mx-auto p-4">
              <ul className="list-disc">
                <li>
                  Facilitar a nuestros clientes el mantenimiento de altos
                  estándares de sabor y calidad en sus bebidas.
                </li>
                <li>
                  Innovar constantemente en nuestras soluciones tecnológicas
                  para mantenernos al frente de las necesidades de la industria.
                </li>
                <li>
                  Fomentar la sostenibilidad y la responsabilidad en el proceso
                  de producción y dispensación de bebidas.
                </li>
                <li>
                  Ofrecer un servicio al cliente excepcional, asegurando
                  asistencia integral para la implementación y optimización de
                  nuestros productos.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisionVision;
