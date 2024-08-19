import React from "react";

interface Props {
  id?: string;
  header: string;
  description: string;
  backgroundUrl?: string;
  maskColor?: string;
  textColor?: string;
  height?: string;
}

export const Section: React.FC<Props> = (props) => {
  const {
    id,
    header,
    description,
    backgroundUrl,
    maskColor = '--primary-color-rgb-mask',
    textColor = 'text-secondary',
    height = 'min-h-screen',
  } = props;

  return (
    <div id={id} className={`relative isolate overflow-hidden bg-cadesi-font py-24 sm:py-24 ${height}`}>
      <img
        alt=""
        src={backgroundUrl}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="absolute inset-0 -z-10" style={{backgroundColor: `var(${maskColor})`}}></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className={`text-4xl font-bold tracking-tight ${textColor} sm:text-6xl`}>
            {header}
          </h2>
          <p className={`mt-6 text-lg leading-8 ${textColor}`}>
            {description}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div
            className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {/*{links.map((link) => (*/}
            {/*  <a key={link.name} href={link.href}>*/}
            {/*    {link.name} <span aria-hidden="true">&rarr;</span>*/}
            {/*  </a>*/}
            {/*))}*/}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {/*{stats.map((stat) => (*/}
            {/*  <div key={stat.name} className="flex flex-col-reverse">*/}
            {/*    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>*/}
            {/*    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>*/}
            {/*  </div>*/}
            {/*))}*/}
          </dl>
        </div>
      </div>
    </div>
  );
}