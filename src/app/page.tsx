'use client';

import React from 'react';
import Header from "@/app/components/header.component";
import Footer from "@/app/components/footer.component";
import Hero from "@/app/components/hero.component";
import PressSection from "@/app/components/press.components";

export default function Home() {
  return (
    <main className="bg-secondary overflow-hidden">
      <Header />
      <Hero
        id="newsletter"
        header="Colectivo de Café del Desierto"
        backgroundUrl="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGNvZmZlZXxlbnwwfHx8fDE3MjkyODQ2Mzd8MA&ixlib=rb-4.0.3&q=80&w=2000"
      >
        <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center">
          <a href={"https://cafe-del-desierto.ghost.io/"} className="mt-4 sm:mt-0 sm:ml-4 bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition">
            Ir al blog
          </a>
        </div>
      </Hero>

      <PressSection />

      <Footer />
    </main>
  );
}