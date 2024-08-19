import React from "react";

interface Props {
  coffeeShops: {
    name: string;
    imageUrl: string;
  }[];
}

export const Members: React.FC<Props> = (props) => {
  const {coffeeShops} = props;
  return (
    <div id={"miembros"} className="bg-cadesi py-24 sm:py-32 text-cadesi-font">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Miembros
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Los miembros de CADESI son los líderes en la industria del café en el desierto de Sonora.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {coffeeShops.map((coffeeShop) => (
            <li key={coffeeShop.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={coffeeShop.imageUrl} className="h-32 w-32 rounded-full"/>
                <div>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight">{coffeeShop.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}