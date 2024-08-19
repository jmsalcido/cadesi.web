import React from "react";

interface Props {}

const coffeeShops = [
  {
    name: 'Josefina Café',
    imageUrl: 'https://res.cloudinary.com/otfusion/image/upload/v1724034172/josefina-logo_hyjepc.png'
  },
  {
    name: 'Dante y Nova',
    imageUrl: 'https://res.cloudinary.com/otfusion/image/upload/v1724035053/DYN-logo_dnznkn.png'
  },
  {
    name: 'Culto al Perro Café',
    imageUrl: 'https://res.cloudinary.com/otfusion/image/upload/v1724035257/logocpc_rs84yp.png'
  },
  {
    name: 'El Chapucero',
    imageUrl: 'https://res.cloudinary.com/otfusion/image/upload/v1724034775/Chapucero_roc0ku.png'
  },
];

export const Members: React.FC<Props> = (props) => {
  return (
    <div id={"miembros"} className="bg-cadesi py-24 sm:py-32 text-gray-900">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Miembros
          </h2>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {coffeeShops.map((coffeeShop) => (
            <li key={coffeeShop.name}>
              <div className="flex items-center gap-x-6 text-gray-900">
                <img alt="" src={coffeeShop.imageUrl} className="h-24 w-24 rounded-full"/>
                <div>
                  <h3 className="text-xl font-semibold leading-7 tracking-tight">{coffeeShop.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}