import React, { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

export function Blog() {
  const [activeTag, setActiveTag] = useState('Todo');

  const tags = [
    'Todo', 'Administración Pública', 'Autor invitado', 'Gestión de Despachos', 
    'Noticias', 'Práctica y Actualidad Jurídica', 'Producto'
  ];

  return (
    <div className="pt-24 pb-20 bg-[#fcfdfd] min-h-screen">
      
      {/* Blog Header & Tags */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 pt-8">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Blog</h1>
        
        <div className="flex flex-wrap gap-2 md:gap-6">
          {tags.map((tag) => (
            <button 
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeTag === tag 
                  ? 'bg-[#1a7484] text-white' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Post */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:shadow-md transition-shadow">
          <div className="lg:w-7/12 h-64 lg:h-[400px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200" 
              alt="Hero post" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="lg:w-5/12 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex gap-4 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-md">Producto</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 py-1">15 May 2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 leading-tight group-hover:text-[#1a7484] transition-colors">
              Más de 230.000 nuevas sentencias de 2025 y 2026: la Corte Suprema directos a LexHonduras
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Acabamos de completar nuestra carga de jurisprudencia más potente: 231.405 nuevas resoluciones enfocadas en los tribunales que de verdad marcan tu estrategia.
            </p>
          </div>
        </div>
      </div>

      {/* Artículos destacados */}
      <div className="bg-[#f5f8f9] py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif text-slate-900 mb-10">Artículos destacados</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6 h-[300px]">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" alt="Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex gap-4 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a7484]">Noticias</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">17 Feb 2026</span>
              </div>
              <h3 className="text-2xl font-serif text-slate-900 group-hover:text-[#1a7484] transition-colors">
                LexHonduras se une a Doctrine para liderar la IA jurídica en la región
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { cat: 'Gestión de Despachos', date: '11 Ago 2026', title: 'Las 8 Mejores Herramientas de IA para Abogados (Guía Práctica 2026)', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300' },
                { cat: 'Práctica y Actualidad', date: '21 May 2026', title: 'De la ciencia ficción a la realidad: los abogados ya preparan juicios con IA', img: 'https://images.unsplash.com/photo-1505664173616-5bc77b9d6eb4?auto=format&fit=crop&q=80&w=300' },
                { cat: 'Práctica y Actualidad', date: '11 Abr 2026', title: 'Revolucionando el Derecho con Legal Prompting e IA', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=300' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group cursor-pointer items-center">
                  <div className="w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div>
                    <div className="flex gap-4 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{item.cat}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.date}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#1a7484] transition-colors leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expertos Invitados */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/4">
            <h2 className="text-3xl font-serif text-slate-900 mb-2">Artículos de</h2>
            <h2 className="text-3xl font-serif text-[#5bc7d6] mb-8">nuestros expertos invitados</h2>
          </div>
          
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6 h-[200px]">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex gap-4 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded">Artículos de autores invitados</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 py-1">4 Jun 2026</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1a7484] transition-colors">
                Traducción jurídica: Sistemas legales, documentación y el papel de la IA
              </h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                Una aproximación a la traducción jurídica como práctica experta entre sistemas legales, documentación especializada y tecnología.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                <span className="text-xs font-bold text-slate-800">Gisella Policastro Ponce</span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6 h-[200px]">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=600" alt="Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex gap-4 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded">Artículos de autores invitados</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 py-1">13 Abr 2026</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1a7484] transition-colors">
                IA Jurídica: El Copiloto Estratégico en la Era del Derecho Aumentado
              </h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                La historia de la abogacía es, en gran medida, la historia de su capacidad de adaptación.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                <span className="text-xs font-bold text-slate-800">Octavio Suárez Silva</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#145d6a] to-[#1a7484] py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            ¿Listo para potenciar tu práctica legal?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            No esperes más para ser más eficiente. Crea tu cuenta y empieza a usar LexHonduras ahora mismo sin ningún compromiso.
          </p>
          <button className="bg-white text-[#1a7484] px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors">
            Accede gratis
          </button>
        </div>
      </div>

    </div>
  );
}
