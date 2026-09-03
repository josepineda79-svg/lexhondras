import React, { useState } from 'react';
import { ChevronDown, FileText, Flag, Landmark, Briefcase, Scale } from 'lucide-react';

export const Conocimiento = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sources = [
    {
      title: "Diario Oficial La Gaceta de Honduras",
      desc: "Leyes de la República, Decretos Ejecutivos, Acuerdos Ministeriales y Reglamentos publicados oficialmente.",
      icon: FileText,
      detail: "Acceso actualizado diariamente a todas las publicaciones históricas y recientes del Diario Oficial La Gaceta de la República de Honduras."
    },
    {
      title: "Jurisprudencia de la Corte Suprema de Justicia (CSJ)",
      desc: "Sentencias, fallos de inconstitucionalidad, recursos de casación y doctrina procesal sentada por las Salas de la CSJ.",
      icon: Scale,
      detail: "Más de 2.5 millones de párrafos jurisprudenciales analizados con silogismo procesal y subsunción forense."
    },
    {
      title: "Códigos e Instrumentos Legales Vigentes",
      desc: "Código Procesal Civil (CPC), Código del Trabajo, Código Penal, Código Procesal Penal, Código de Comercio y Código de Familia.",
      icon: Landmark,
      detail: "Indexados con Context Caching de 1M+ tokens para respuesta inmediata sin alucinaciones procesales."
    },
    {
      title: "Regulación Administrativa y Financiera (STSS, BCH, SAR)",
      desc: "Circulares del Banco Central de Honduras (BCH), tablas de salarios mínimos de la Secretaría de Trabajo (STSS) y normativa tributaria (SAR).",
      icon: Briefcase,
      detail: "Integrado directamente con el Liquidador Laboral y Financiero con conversión automatizada."
    },
    {
      title: "Tratados y Convenios Internacionales de Honduras",
      desc: "Convenios de la OIT, Tratados de Derechos Humanos y Acuerdos de Integración Centroamericana ratificados por el Congreso Nacional.",
      icon: Flag,
      detail: "Fuentes primarias supranacionales aplicables por el principio de supremacía constitucional en derecho hondureño."
    }
  ];

  return (
    <div className="flex-1 w-full bg-[#f8fafb] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-2">¿Qué sabe LexHonduras?</h1>
          <h2 className="text-4xl md:text-5xl font-serif text-[#76c2cf]">Visualizador de fuentes jurídicas</h2>
        </div>

        <div className="flex flex-col gap-4">
          {sources.map((source, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex items-center justify-between cursor-pointer hover:border-slate-200 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-start gap-6">
                <source.icon className="w-8 h-8 text-[#1a7484] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-serif text-slate-900 mb-1">{source.title}</h3>
                  <p className="text-slate-500">{source.desc}</p>
                </div>
              </div>
              <ChevronDown className={`w-6 h-6 text-[#1a7484] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
