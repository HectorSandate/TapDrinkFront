/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import memo from  '../../assets/Foubders/memo.jpeg';
import dani from  '../../assets/Foubders/dani.jpg';
import hector from  '../../assets/Foubders/hector.jpeg';
import diego from  '../../assets/Foubders/diego.jpeg';
import jaz from  '../../assets/Foubders/jaz.jpeg';
import alann from  '../../assets/Foubders/alann.jpeg';
import nati from  '../../assets/Foubders/nat.jpeg';




const people = [
  {
    name: 'Hector Jose Diaz Sandate',
    role: 'Co-Founder / CEO',
    imageUrl:
      hector,
  },
  {
    name: 'Héctor Guillermo Pérez Varela',
    role: 'Co-Founder / Director',
    imageUrl:
      memo,
  },
  {
    name: 'Jazmin Roldán Guzmán',
    role: 'Co-Founder',
    imageUrl:
      jaz,
  },
  {
    name: 'Diego Martinez Ramirez',
    role: 'Co-Founder',
    imageUrl:
      diego,
  },
  {
    name: 'Natalia Ramirez Martinez',
    role: 'Co-Founder',
    imageUrl:
      nati,
  },
  {
    name: 'Alann Beltran Monarrez',
    role: 'Co-Founder',
    imageUrl:
      alann,
  },
  {
    name: 'Daniel Bretado Soriano',
    role: 'Co-Founder / CEO',
    imageUrl:
      dani,
  },

  {
    name: 'AI',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://res.cloudinary.com/dsht8f3ff/image/upload/v1697785272/claude_ai_b1pbwb.png',
  },
  // Agrega más objetos de personas aquí...
];

const Leadership = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Conoce a nuestro liderazgo
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Equipo de trabajo de TapDrink
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600 text-yellow-500" >
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leadership;
