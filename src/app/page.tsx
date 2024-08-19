import React from 'react';
import {Header, Hero, Members, Section} from "@/app/components";

const navigation = [
  {name: 'Quiénes Somos', href: '#quienes-somos'},
  {name: 'Miembros', href: '#miembros'},
  {name: 'Próximos Proyectos', href: '#proximos-proyectos'},
  {name: 'Aliados', href: '#'},
  {name: 'Contacto', href: '#'},
]

const coffeeShops = [
  {
    name: 'Josefina Café',
    imageUrl: 'https://placehold.co/800x800'
  },
  {
    name: 'Dante y Nova',
    imageUrl: 'https://placehold.co/800x800'
  },
  {
    name: 'Culto al Perro Café',
    imageUrl: 'https://placehold.co/800x800'
  },
  {
    name: 'El Chapucero',
    imageUrl: 'https://placehold.co/800x800'
  },
];

export default function Home() {
  return (
    <main className="bg-primary overflow-hidden">
      <Header navigation={navigation}/>
      <Hero/>
      <Section id={'quienes-somos'}
               header={navigation[0].name}
               maskColor={'--primary-color-rgb-mask'}
               height={'50vh'}
               backgroundUrl={'https://res.cloudinary.com/otfusion/image/upload/v1723948290/vHiGXaT_vdzdog.jpg'}
               description={'Somos un colectivo que promueve, enaltece y celebra la cultura del café en el desierto de Sonora.\n' +
                 '\n' +
                 'Cafeterías, casas tostadoras, baristas y fans del café, ¡bienvenidos!\n'}
      />
      <Members coffeeShops={coffeeShops}/>
      <Section id={'proximos-proyectos'}
               header={navigation[2].name}
               height={'50vh'}
               description={'Pasaporte del Café (imagen) Registra a tu cafetería aquí (google form)\n' +
                 'CADESI Talks: tertulias informales para hablar de un tema específico del café \n' +
                 'Colecta para Casas Hogares en diciembre\n' +
                 'Festival del Café 2025\n'}
      />
      <Section id={'aliados'}
               header={'Aliados'}
               height={'50vh'}
               description={'¿Te interesa dar algún curso o taller sobre un tema de café? ¿Quieres vender el Pasaporte del Café de Hermosillo en tu cafetería? ¿Quieres apoyar como voluntario en los eventos? ¡Contáctanos!\n'}
      />
    </main>
  );
}
