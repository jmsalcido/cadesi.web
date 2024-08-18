import {Hero} from "@/app/components/hero.component";
import {Header} from "@/app/components/header.component";
import {Members} from "@/app/components/memebers.component";
import {Section} from "@/app/components/section.component";

const navigation = [
  {name: 'Quiénes Somos', href: '#quienes-somos'},
  {name: 'Miembros', href: '#miembros'},
  {name: 'Próximos Proyectos', href: '#'},
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
    <main className="bg-white">
      <Header navigation={navigation}/>
      <Hero header={'CADESI'}
            subheader={'Colectivo de Café del Desierto'}/>
      <Section header={navigation[0].name}
               id={'quienes-somos'}
               backgroundUrl={'https://i.imgur.com/vHiGXaT.png'}
               description={'Somos un colectivo que promueve, enaltece y celebra la cultura del café en el desierto de Sonora.\n' +
                 '\n' +
                 'Cafeterías, casas tostadoras, baristas y fans del café, ¡bienvenidos!\n'}
      />
      <Members coffeeShops={coffeeShops}/>
    </main>
  );
}
