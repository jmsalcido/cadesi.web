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
      <Header navigation={navigation} className={isBannerVisible ? 'mt-12' : ''}/>
      <Hero/>
      <Section id={'quienes-somos'}
               header={navigation[0].name}
               maskColor={'--secondary-color-rgb-mask'}
               textColor={'text-white'}
               height={'50vh'}
               backgroundUrl={'https://res.cloudinary.com/otfusion/image/upload/v1723948290/vHiGXaT_vdzdog.jpg'}
      >
        <div className={'text-xl sm:text-3xl leading-8 text-gray-100'}>
          <p className={`mt-6`}>
            Somos un colectivo que promueve, enaltece y celebra la cultura del café en el desierto de Sonora.
          </p>
          <p className={`mt-6`}>
            Cafeterías, casas tostadoras, baristas y fans del café, ¡bienvenidos!
          </p>
        </div>
      </Section>
      <Members/>
      <Section id={'proximos-proyectos'}
               header={navigation[2].name}
               maskColor={'--secondary-color-rgb-mask'}
               textColor={'text-white'}
      >
        <ul className={`mt-6 text-xl leading-8 text-gray-100 list-disc list-inside sm:text-3xl`}>
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
                   strokeWidth="1.5"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0  0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
              </svg>
              <span>Pasaporte del Café</span>
            </button>
          </a>
        </div>
      </Section>
      <Section id={'aliados'}
               header={'Aliados'}
               textColor={'text-gray-900'}
      >
        <div className={'text-xl sm:text-3xl leading-8 text-gray-900'}>
          <p className={'mt-6'}>
            ¿Te interesa dar algún curso o taller sobre un tema de café?
          </p>
          <p className={'mt-6'}>
            ¿Quieres vender el Pasaporte del Café de Hermosillo en tu cafetería?
          </p>
          <p className={'mt-6'}>
            ¿Quieres apoyar como voluntario en los eventos?
          </p>
          <p className={'mt-6'}>
            ¡Contáctanos!
          </p>
        </div>
      </Section>
      <Section id={'contacto'}
               header={'Contacto'}
               maskColor={'--secondary-color-rgb-mask'}
               textColor={'text-white'}>
        <div className="flex flex-col justify-center items-center text-xl sm:text-3xl text-gray-100 leading-8">
          <p className={`mt-6`}>
            Ponte en contacto con nosotros por email
          </p>
          <p className={`mt-6`}>
            <a href={'mailto:cadesihmo@gmail.com'}>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"/>
                </svg>
                <span className={'font-thin text-xl'}>cadesihmo@gmail.com</span>
              </button>
            </a>
          </p>
        </div>
      </Section>
    </main>
  );
}
