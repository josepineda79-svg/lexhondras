import React from 'react';
import { CheckCircle2, ThumbsUp, Scale, FileText, BookOpen, Settings } from 'lucide-react';

export const ProductoQueEs = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="flex-1 w-full bg-white pt-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">LexHonduras en detalle</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight mb-6">
            Centraliza tu conocimiento y <span className="text-[#1a7484]">acelera tu trabajo</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Explora en detalle cómo el chat conversacional de LexHonduras, su base de conocimiento jurídica y la personalización para tu despacho se combinan para transformar tu forma de trabajar.
          </p>
          <button onClick={onStart} className="w-full sm:w-auto bg-[#1a7484] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#145d6a] transition-colors shadow-md">
            Accede gratis
          </button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#e8f1f2] to-[#76c2cf]/20 rounded-3xl transform rotate-2 scale-105 -z-10"></div>
          <img src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&q=80&w=800" alt="Plataforma UI" className="rounded-2xl shadow-2xl border border-slate-100 object-cover aspect-[4/3] w-full" />
        </div>
      </div>

      {/* Mini Features */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f8fafb] border border-slate-100 p-8 rounded-2xl flex flex-col gap-4">
            <CheckCircle2 className="w-8 h-8 text-[#1a7484]" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-slate-900">Precisión probada, conocimiento real</h3>
            <p className="text-slate-600 text-sm">LexHonduras no es una IA generalista. Su capacidad de razonamiento jurídico es la mejor del mercado, demostrada con una nota de 99 sobre 100 en el test de acceso a la judicatura.</p>
          </div>
          <div className="bg-[#f8fafb] border border-slate-100 p-8 rounded-2xl flex flex-col gap-4">
            <ThumbsUp className="w-8 h-8 text-[#1a7484]" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-slate-900">Intuitiva y fácil de usar</h3>
            <p className="text-slate-600 text-sm">Hemos diseñado LexHonduras para que su uso sea tan sencillo como enviar un mensaje. No necesitas formación técnica ni complejos manuales. Si sabes chatear, sabes cómo potenciar tu trabajo.</p>
          </div>
        </div>
      </div>

      {/* Deep Dive */}
      <div className="bg-[#fdfdfd] border-t border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-16 text-center max-w-2xl mx-auto">
            Una herramienta pensada <br/><span className="text-[#76c2cf]">para tu día a día</span>
          </h2>
          
          <div className="space-y-24">
            {/* 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <Scale className="w-10 h-10 text-[#1a7484] mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-serif text-slate-900 mb-4">Copiloto diseñado para el profesional legal</h3>
                <p className="text-slate-600 mb-6">Cada profesional del despacho dispone de su propio Copiloto, un entorno de trabajo privado y personal. Organiza tus casos en chats individuales con memoria persistente, para que puedas retomar cualquier conversación donde la dejaste. Además, puedes interactuar mediante texto o usando el dictado por voz para mayor agilidad y comodidad.</p>
                <button onClick={onStart} className="bg-[#1a7484] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#145d6a] transition-colors shadow-sm">Accede gratis</button>
              </div>
              <div className="bg-[#f8fafb] p-4 rounded-3xl border border-slate-100 aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#e8f1f2]/50"></div>
                <div className="relative z-10 w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-100 p-4">
                  <div className="h-4 w-32 bg-slate-200 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-8 w-3/4 bg-slate-100 rounded"></div>
                    <div className="h-8 w-1/2 bg-[#1a7484]/10 rounded ml-auto"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
              <div className="order-2 md:order-1 bg-[#f8fafb] p-4 rounded-3xl border border-slate-100 aspect-video flex items-center justify-center">
                <FileText className="w-24 h-24 text-slate-300" strokeWidth={1} />
              </div>
              <div className="order-1 md:order-2">
                <FileText className="w-10 h-10 text-[#1a7484] mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-serif text-slate-900 mb-4">Trabaja de forma fluida con tus documentos</h3>
                <p className="text-slate-600 mb-6">Analiza múltiples documentos legales subiéndolos directamente al chat en formatos como PDF, DOCX o incluso imágenes escaneadas gracias a la tecnología OCR. Cuando termines, descarga las respuestas de LexHonduras o la conversación completa en formato Word o PDF para usarlos de inmediato.</p>
                <button onClick={onStart} className="bg-[#1a7484] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#145d6a] transition-colors shadow-sm">Accede gratis</button>
              </div>
            </div>
            
            {/* 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <BookOpen className="w-10 h-10 text-[#1a7484] mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-serif text-slate-900 mb-4">Apóyate en una base de conocimiento jurídica y actualizada</h3>
                <p className="text-slate-600 mb-6">LexHonduras opera sobre una base de conocimiento legal propia y privada que no accede a internet, garantizando la seguridad de tus consultas. Esta base incluye toda la legislación hondureña y se enriquece con millones de sentencias, actualizadas constantemente para asegurar la máxima precisión.</p>
                <button onClick={onStart} className="bg-[#1a7484] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#145d6a] transition-colors shadow-sm">Accede gratis</button>
              </div>
              <div className="bg-[#f8fafb] p-4 rounded-3xl border border-slate-100 aspect-video flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-slate-300" strokeWidth={1} />
              </div>
            </div>
            
            {/* 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
              <div className="order-2 md:order-1 bg-[#f8fafb] p-4 rounded-3xl border border-slate-100 aspect-video flex items-center justify-center">
                <Settings className="w-24 h-24 text-slate-300" strokeWidth={1} />
              </div>
              <div className="order-1 md:order-2">
                <Settings className="w-10 h-10 text-[#1a7484] mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-serif text-slate-900 mb-4">Adapta LexHonduras a la forma de trabajar de tu despacho</h3>
                <p className="text-slate-600 mb-6">Haz que LexHonduras sea una extensión de tu despacho. Sube tus propias sentencias, normativas internas, convenios o plantillas. La información, tratada de forma 100% confidencial y anonimizada, permite que cada LexHonduras sea único para cada organización, adaptada a vuestra especialización y forma de trabajar.</p>
                <button onClick={onStart} className="bg-[#1a7484] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#145d6a] transition-colors shadow-sm">Accede gratis</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Horizontal Scroller (simulated) */}
      <div className="bg-gradient-to-r from-[#1a7484] to-[#12535e] py-16 overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-serif text-white mb-2 text-center">Haz mucho más de lo que habías imaginado</h2>
        <p className="text-[#e8f1f2] mb-12 text-center text-sm">Todas tus tareas y trabajos impulsado por la IA de LexHonduras</p>
        
        <div className="flex gap-4 px-6 overflow-x-auto pb-4 no-scrollbar">
          {[
            "Redacta una demanda de impago de factura.",
            "Analiza este contrato para mi cliente.",
            "Resume esta sentencia en 5 caso.",
            "Crea una cláusula de acuerdo de colaboración.",
            "Elabora un borrador de un penitenciario.",
            "Convierte este informe técnico en un email que un cliente pueda entender."
          ].map((text, i) => (
            <div key={i} className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl p-4 shrink-0 w-64 text-white text-sm">
              {text}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
