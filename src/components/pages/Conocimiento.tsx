import React, { useState } from 'react';
import { ChevronDown, FileText, Flag, Landmark, Briefcase, Scale } from 'lucide-react';

export const Conocimiento = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sources = [
    {
      title: "Reglamentos Internacionales",
      desc: "Tratados internacionales, Reglamentos europeos y comunicaciones de entidades supranacionales.",
      icon: Flag
    },
    {
      title: "Boletines oficiales",
      desc: "Leyes orgánicas, Reales decretos y normativas estatales, autonómicas y provinciales.",
      icon: FileText
    },
    {
      title: "Tribunales administrativos",
      desc: "Resoluciones de tribunales especializados con carácter público.",
      icon: Landmark
    },
    {
      title: "Regulación administrativa",
      desc: "Convenios, comunicaciones vinculantes y normativa emitida por entidades públicas.",
      icon: Briefcase
    },
    {
      title: "Tribunales oficiales",
      desc: "Sentencias de los tribunales oficiales.",
      icon: Scale
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
