import React from 'react';

interface SectionProps {
  id: string;
  header: string;
  backgroundUrl: string;
  children: React.ReactNode;
}

export default function Hero({ id, header, backgroundUrl, children }: SectionProps) {
  return (
    <section
      id={id}
      className="relative isolate overflow-hidden bg-secondary min-h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center -z-10 filter blur-sm"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-6xl font-serif font-bold text-white sm:text-7xl mb-6 text-shadow-lg">
          {header}
        </h2>
        <div className="mt-4 text-xl text-white max-w-md mx-auto">{children}</div>
      </div>
    </section>
  );
}