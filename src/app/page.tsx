'use client';

import React from 'react';
import Header from "@/app/components/header.component";
import Footer from "@/app/components/footer.component";
import Hero from "@/app/components/hero.component";
import PressSection from "@/app/components/press.components";

export default function Home() {
  return (
    <main className="bg-secondary overflow-hidden">
      <Header/>

      <Hero
        id="newsletter"
        header="Colectivo de Café del Desierto"
        backgroundUrl="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGNvZmZlZXxlbnwwfHx8fDE3MjkyODQ2Mzd8MA&ixlib=rb-4.0.3&q=80&w=2000"
      >
        <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center">
          <a href={"https://cafe-del-desierto.ghost.io/"}
             className="mt-4 sm:mt-0 sm:ml-4 bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition">
            Ir al blog
          </a>
        </div>
      </Hero>

      {/* Sleek Info Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-6">¿Qué es CADESI?</h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            El Colectivo de Café del Desierto promueve y celebra la cultura del café en el desierto de Sonora.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.3}
                stroke="currentColor"
                className="w-24 h-24 mx-auto mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">Cafeterías</h3>
              <p className="text-gray-600">Apoya a las mejores cafeterías locales.</p>
            </div>
            <div className="text-center">
              <svg fill="none" stroke="black" strokeWidth={0.5} viewBox="0 0 50 50" className="w-24 h-24 mx-auto mb-4"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M23 2C22.449219 2 22 2.449219 22 3L22 4C22 4.226563 22.078125 4.449219 22.21875 4.625L26 9.351563L26 11L8 11C7.449219 11 7 11.449219 7 12L7 47C7 47.550781 7.449219 48 8 48L39 48C39.550781 48 40 47.550781 40 47L40 33L42 33C42.550781 33 43 32.550781 43 32L43 26C43 25.449219 42.550781 25 42 25L28 25L28 22.261719L29.8125 19L34 19C34.15625 19 34.308594 18.964844 34.449219 18.894531L35.898438 18.167969C36.496094 18.5625 37.253906 18.609375 37.894531 18.289063L38.894531 17.789063C39.738281 17.382813 40.1875 16.445313 39.976563 15.53125C39.761719 14.621094 38.945313 13.976563 38.011719 13.984375C37.695313 13.988281 37.386719 14.066406 37.105469 14.210938L36.105469 14.710938C35.46875 15.03125 35.046875 15.667969 35.003906 16.378906L33.765625 17L30.921875 17L32.875 13.484375C32.957031 13.335938 33 13.171875 33 13L33 12L37 12C37.15625 12 37.308594 11.964844 37.449219 11.894531L38.90625 11.164063C39.234375 11.378906 39.613281 11.5 40 11.5C40.304688 11.5 40.609375 11.433594 40.894531 11.289063L41.894531 10.789063C42.882813 10.292969 43.28125 9.09375 42.789063 8.105469C42.292969 7.117188 41.089844 6.714844 40.105469 7.210938L39.105469 7.710938C38.445313 8.042969 38.054688 8.6875 38.011719 9.375L36.765625 10L33 10L33 9.351563L36.78125 4.625C36.921875 4.449219 37 4.226563 37 4L37 3C37 2.449219 36.550781 2 36 2 Z M24.28125 4L34.71875 4L31.519531 8L27.480469 8 Z M28 10L31 10L31 10.832031C30.980469 10.941406 30.980469 11.050781 31 11.15625L31 12.738281L28 18.140625 Z M9 13L26 13L26 25.832031C25.980469 25.941406 25.980469 26.050781 26 26.15625L26 31.832031C25.949219 32.125 26.03125 32.425781 26.226563 32.652344C26.417969 32.875 26.703125 33.003906 27 33L38 33L38 46L9 46 Z M13 27C12.449219 27 12 27.449219 12 28C12 28.550781 12.449219 29 13 29C13.550781 29 14 28.550781 14 28C14 27.449219 13.550781 27 13 27 Z M16 27C15.449219 27 15 27.449219 15 28C15 28.550781 15.449219 29 16 29C16.550781 29 17 28.550781 17 28C17 27.449219 16.550781 27 16 27 Z M19 27C18.449219 27 18 27.449219 18 28C18 28.550781 18.449219 29 19 29C19.550781 29 20 28.550781 20 28C20 27.449219 19.550781 27 19 27 Z M22 27C21.449219 27 21 27.449219 21 28C21 28.550781 21.449219 29 22 29C22.550781 29 23 28.550781 23 28C23 27.449219 22.550781 27 22 27 Z M28 27L41 27L41 31L28 31 Z M12 30L12 32L17 32L17 30 Z M18 30L18 32L23 32L23 30 Z M14 38C12.355469 38 11 39.355469 11 41C11 42.644531 12.355469 44 14 44C15.644531 44 17 42.644531 17 41C17 39.355469 15.644531 38 14 38 Z M14 40C14.5625 40 15 40.4375 15 41C15 41.5625 14.5625 42 14 42C13.4375 42 13 41.5625 13 41C13 40.4375 13.4375 40 14 40Z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">Tostadores</h3>
              <p className="text-gray-600">Explora casas tostadoras comprometidas con ofrecer café de alta calidad.</p>
            </div>
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.3}
                stroke="currentColor"
                className="w-24 h-24 mx-auto mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <h3 className="text-xl font-semibold text-gray-800">Eventos</h3>
              <p className="text-gray-600">
                Únete a nuestros eventos donde celebramos y compartimos la cultura del café.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PressSection/>

      <Footer/>
    </main>
  );
}