import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CasosExito({ onStart }: { onStart: () => void }) {
  const testimonials = [
    {
      company: 'LexCorp',
      quote: '"LexHonduras es la IA jurídica ideal para profesionales que quieran ahorrar tiempo y centrarse en cuestiones estratégicas y de valor añadido para sus clientes."',
      author: 'Susana Rodríguez',
      role: 'Directora Legal'
    },
    {
      company: 'Asociados HN',
      quote: '"No concibo el ejercicio de la profesión en los tiempos de la IA sin LexHonduras"',
      author: 'Alejandro García',
      role: 'Gerente y Socio'
    },
    {
      company: 'Bufete Central',
      quote: '"LexHonduras no es la lámpara mágica de la abogacía, pero sí una gran ayuda en nuestro día a día"',
      author: 'Rafael López',
      role: 'Abogado y Miembro Fundador'
    },
    {
      company: 'Honduras Legal',
      quote: '"Ahora respondo dudas de cualquier área de la empresa con mayor rapidez."',
      author: 'Miguel A. Martín',
      role: 'Abogado y Asesoría Jurídica'
    },
    {
      company: 'Derecho & Asociados',
      quote: '"LexHonduras es una compañera más del departamento jurídico"',
      author: 'Alicia Lorenzo',
      role: 'Socia responsable'
    },
    {
      company: 'Gremicat',
      quote: '"LexHonduras es la compañera de equipo que siempre está disponible"',
      author: 'Christian Vilalta',
      role: 'Socio Director'
    }
  ];

  return (
    <div className="pt-32 pb-20 w-full overflow-hidden bg-white">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <p className="text-slate-600 font-medium mb-4">Historias reales, resultados reales</p>
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Casos de éxito</h1>
        <p className="text-slate-600 max-w-2xl text-lg">
          Detrás de cada caso de éxito hay un profesional del derecho que decidió dejar atrás las tareas repetitivas para centrarse en el trabajo de alto valor. Descubre de primera mano cómo LexHonduras les ha ayudado a transformar su práctica legal y a potenciar su verdadero talento.
        </p>
      </div>

      {/* Logos */}
      <div className="border-y border-slate-100 py-8 mb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 justify-between">
          <p className="font-medium text-slate-800">Empresas que confían en nosotros</p>
          <div className="flex gap-8 flex-wrap items-center justify-center opacity-50 grayscale">
            <span className="text-xl font-bold font-serif">LexCorp</span>
            <span className="text-xl font-bold font-serif">Honduras Legal</span>
            <span className="text-xl font-bold font-serif">Asociados HN</span>
            <span className="text-xl font-bold font-serif">Bufete Central</span>
            <span className="text-xl font-bold font-serif">Derecho & Asociados</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-[#f8fcfd] border border-[#e8f1f2] rounded-2xl p-8 flex flex-col justify-between group hover:shadow-md transition-shadow cursor-pointer">
              <div>
                <p className="font-bold text-slate-400 mb-6 uppercase tracking-wider text-sm">{test.company}</p>
                <p className="text-xl font-serif text-slate-800 mb-8 leading-snug">
                  {test.quote}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">{test.author}</p>
                    <p className="text-xs text-slate-500">{test.role}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1a7484] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Plus */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
        <h2 className="text-3xl font-serif text-slate-900 mb-4">Clientes de LexHonduras Plus</h2>
        <p className="text-slate-600 mb-8">Descubre lo que algunos de nuestros clientes, usuarios de LexHonduras Plus, dicen sobre el impacto en su trabajo</p>

        <div className="bg-[#fff9f5] rounded-3xl p-12 border border-[#f5e6dc] flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-4 mb-10">
               <div className="w-14 h-14 bg-slate-300 rounded-full"></div>
               <div>
                 <p className="font-bold text-slate-900">Sezen Turkkanlar</p>
                 <p className="text-slate-500 text-sm">Abogada</p>
               </div>
            </div>
            <p className="text-3xl font-serif text-slate-900 leading-tight mb-8">
              "LexHonduras devuelve lo que más vale para un abogado: su tiempo"
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative z-10 border-l border-[#f5e6dc] pl-12">
            <div className="mb-6">
               <span className="text-4xl font-serif tracking-widest text-slate-800">ST</span>
            </div>
            <p className="text-sm tracking-widest uppercase text-slate-500 mb-8">Abogada</p>
            <button className="text-[#1a7484] font-medium underline">Leer caso</button>
          </div>
        </div>
      </div>

      {/* Call to actions bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Deja que la tecnología se ocupe del trabajo repetitivo</h2>
        <p className="text-slate-600 max-w-3xl mx-auto mb-16">
          LexHonduras no busca sustituir tu criterio, sino potenciarlo. Libérate de las tareas que consumen tu tiempo y enfoca tu energía en la estrategia, la relación con el cliente y el crecimiento de tu práctica legal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=600" alt="Abogado autónomo" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-4">¿Eres abogado autónomo o trabajas en un despacho pequeño?</h3>
              <p className="text-slate-600 mb-8 flex-1">
                Regístrate gratis y explora la herramienta a tu ritmo. Tu cuenta incluye 20 interacciones para que descubras su potencial.
              </p>
              <div>
                <button onClick={onStart} className="bg-[#1a7484] text-white px-6 py-2 rounded-full font-medium hover:bg-[#145d6a] transition-colors">
                  Accede gratis
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" alt="Despacho" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-4">¿Formas parte de un despacho o departamento?</h3>
              <p className="text-slate-600 mb-8 flex-1">
                Agenda una demo personalizada con nosotros y te mostraremos casos de uso específicos para tu área de práctica.
              </p>
              <div>
                <button onClick={onStart} className="bg-white border border-[#1a7484] text-[#1a7484] px-6 py-2 rounded-full font-medium hover:bg-slate-50 transition-colors">
                  Solicita una demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
