import {Hero} from "@/app/components/hero.component";
import {Header} from "@/app/components/header.component";

const navigation = [
  {name: 'Quiénes Somos', href: '#'},
  {name: 'Miembros', href: '#'},
  {name: 'Próximos Proyectos', href: '#'},
  {name: 'Aliados', href: '#'},
  {name: 'Contacto', href: '#'},
]

export default function Home() {
  return (
    <main className="bg-white">
      <Header navigation={navigation}/>
      <Hero header={'CADESI'}
            subheader={'Colectivo de Café del Desierto'}/>
    </main>
  );
}
