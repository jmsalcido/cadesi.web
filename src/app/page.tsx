import {Hero} from "@/app/components/hero";
import {Header} from "@/app/components/header/header.component";

export default function Home() {
  return (
    <main className="bg-white">
      <Header/>
      <Hero/>
    </main>
  );
}
