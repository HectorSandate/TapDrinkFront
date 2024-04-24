import React from "react";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Ordena con un clic: ',
    description:
      'Facilita a tus clientes la selección y orden de sus bebidas favoritas a través de nuestra interfaz amigable. Solo selecciona, ordena y disfruta de la consistencia en cada sorbo.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Dispensado preciso:',
    description:
      'Nuestro avanzado dispensador de bebidas automatizado garantiza que cada cóctel tenga el sabor exacto y la calidad que tus clientes esperan. Menos desperdicio, más eficiencia.',
    icon: LockClosedIcon,
  },
  {
    name: 'Sistema de colas simples: ',
    description:
      'Gestiona las órdenes eficientemente con nuestro sistema de colas digitales, que permite un flujo constante y organizado, reduciendo tiempos de espera y mejorando la satisfacción del cliente.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Reducción de variabilidad: ',
    description:
      'Fin a las variaciones en el sabor causadas por la preparación manual. Cada cóctel es replicado exactamente igual, independientemente de la hora o el día.',
    icon: FingerPrintIcon,
  },
];

const Feature = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-yellow-500">A tu alcance</h2>

          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Optimiza tu bar con tecnología inteligente
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Automatización de bebidas al alcance de tu mano Nuestra app innova el servicio de bar, permitiendo que cada pedido sea una experiencia perfectamente equilibrada y estandarizada. Justo lo que tu negocio necesita para garantizar la calidad y rapidez en cada servicio.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt>
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="ml-12 text-base font-semibold leading-7 text-gray-900">{feature.name}</span>
                </dt>
                <dd className="mt-2 ml-12 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Feature;
