import React from "react";

interface Props {
  id?: string;
  header: string;
  backgroundUrl?: string;
  maskColor?: string;
  textColor?: string;
  height?: string;
  children?: React.ReactNode;
}

export const Section: React.FC<Props> = (props) => {
  const {
    id,
    header,
    backgroundUrl,
    maskColor = '--primary-color-rgb-mask',
    textColor = 'text-secondary',
    height = 'min-h-screen',
    children,
  } = props;

  return (
    <div id={id} className={`relative isolate overflow-hidden bg-cadesi-font py-24 sm:py-24`} style={{ height }}>
      <img
        alt=""
        src={backgroundUrl}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="absolute inset-0 -z-10" style={{backgroundColor: `var(${maskColor})`}}></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className={`text-4xl font-bold tracking-tight ${textColor} sm:text-5xl`}>
            {header}
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}