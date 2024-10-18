import React from "react";

const pressItems = [
  {
    title: "Revista Foodie",
    description: "Colectivo Café del Desierto, Cadesi, lanza el Pasaporte del Café para fomentar el consumo local en Sonora",
    imageUrl: "https://i.imgur.com/haodeGQ.jpeg",
    link: "https://www.revistafoodie.com/blog-post/Colectivo-Cafe-del-Desierto-Cadesi-lanza-el-Pasaporte-del-Cafe-para-fomentar-el-consumo-local-en-Sonora"
  },
  {
    title: "Noro",
    description: "Cadesi e Historias del Malta están trabajando en el Pasaporte del Café de Sonora, un elemento que permitirá a los amantes del café explorar las mejores cafeterías del estado, con rutas y descuentos exclusivos.",
    imageUrl: "https://i.imgur.com/h6aKjYI.jpeg",
    link: "https://noro.mx/negocios/preparan-pasaporte-del-cafe-para-sonora/"
  },
  // Add more press items here...
];

export default function PressSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-8">Prensa</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressItems.map((item, index) => (
            <a href={item.link} key={index} className="block p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}