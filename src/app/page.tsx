'use client';

import React, {useState} from 'react';
import {EventBanner, Header, Hero, Members, Section} from "@/app/components";

const navigation = [
  {name: 'Quiénes Somos', href: '#quienes-somos'},
  {name: 'Miembros', href: '#miembros'},
  {name: 'Próximos Proyectos', href: '#proximos-proyectos'},
  {name: 'Aliados', href: '#aliados'},
  {name: 'Contacto', href: '#contacto'},
]

export default function Home() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <main className="bg-primary overflow-hidden">
      {isBannerVisible && (
        <EventBanner
          name={'Pasaporte del Café'}
          message={'Registra a tu cafetería para 2025!'}
          buttonText={'Registrate Aqui!'}
          link={'https://forms.gle/CMbWYrHaEdf8MhQd7'}
          onClose={() => setIsBannerVisible(false)}
        />
      )}
      <Header navigation={navigation} className={isBannerVisible ? 'mt-12' : ''} />
      <Hero />
      <Section id={'quienes-somos'}
               header={navigation[0].name}
               maskColor={'--secondary-color-rgb-mask'}
               textColor={'text-white'}
               height={'50vh'}
               backgroundUrl={'https://res.cloudinary.com/otfusion/image/upload/v1723948290/vHiGXaT_vdzdog.jpg'}
      >
        <p className={`mt-6 text-3xl leading-8 text-gray-100`}>
          Somos un colectivo que promueve, enaltece y celebra la cultura del café en el desierto de Sonora.
        </p>
        <p className={`mt-6 text-3xl leading-8 text-gray-100`}>
          Cafeterías, casas tostadoras, baristas y fans del café, ¡bienvenidos!
        </p>
      </Section>
      <Members/>
      <Section id={'proximos-proyectos'}
               header={navigation[2].name}
               height={'50vh'}
               maskColor={'--secondary-color-rgb-mask'}
               textColor={'text-white'}
      >
        <ul className={`mt-6 text-3xl leading-8 text-gray-100 list-disc list-inside`}>
          <li className="my-5">Pasaporte del Café - Registra a tu cafetería!</li>
          <li className="my-5">CADESI Talks: tertulias informales para hablar de un tema específico del café</li>
          <li className="my-5">Colecta para Casas Hogares en Diciembre</li>
          <li className="my-5">Festival del Café 2025</li>
        </ul>
        <div className={'my-10'}>
          <a href={'https://forms.gle/CMbWYrHaEdf8MhQd7'}>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-4 rounded inline-flex items-center">
                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0  0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                </svg>
                <span>Pasaporte del Café</span>
            </button>
          </a>
        </div>
      </Section>
      <Section id={'aliados'}
               header={'Aliados'}
               height={'50vh'}
               textColor={'text-gray-900'}
      >
        <p className={`mt-6 text-3xl leading-8 text-gray-900`}>
          ¿Te interesa dar algún curso o taller sobre un tema de café?
        </p>
        <p className={`mt-6 text-3xl leading-8 text-gray-900`}>
          ¿Quieres vender el Pasaporte del Café de Hermosillo en tu cafetería?
        </p>
        <p className={`mt-6 text-3xl leading-8 text-gray-900`}>
          ¿Quieres apoyar como voluntario en los eventos?
        </p>
        <p className={`mt-6 text-3xl leading-8 text-gray-900`}>
          ¡Contáctanos!
        </p>
      </Section>
      <Section id={'contacto'}
               header={'Contacto'}
               height={'50vh'}
               maskColor={'--secondary-color-rgb-mask'}
               textColor={'text-white'}>
        <div className="flex flex-col justify-center items-center text-3xl">
          <a href={'mailto:cadesihmo@gmail.com'}>Email</a>
        </div>
      </Section>
    </main>
  );
}
