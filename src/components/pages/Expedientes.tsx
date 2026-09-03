import React from 'react';
import { ArrowRight, CheckCircle2, FileText, Settings, MessageSquare, Lightbulb, Check } from 'lucide-react';

export const Expedientes = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="flex-1 w-full bg-white pt-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block border border-slate-200 text-slate-500 text-xs font-semibold px-3 py-1 rounded-full mb-6">Nueva Funcionalidad: Expedientes</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight mb-4">
            LexHonduras en detalle<br />
            Trabaja con la IA igual que en la vida real.<br />
            <span className="text-[#76c2cf]">Presentamos Expedientes.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Deja de repetirle a LexHonduras de qué va tu caso. Agrupa los documentos, dale las instrucciones de tu estrategia y abre todas las conversaciones que necesites. Todo conectado en un mismo espacio virtual. Igual a cómo tú trabajas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onStart} className="bg-[#1a7484] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#145d6a] transition-colors text-center shadow-md">
              Crear mi primer Expediente
            </button>
            <button className="border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-colors text-center">
              Ver cómo funciona
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#e8f1f2] to-[#76c2cf]/20 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Expedientes UI" className="rounded-2xl shadow-2xl border border-slate-100 object-cover aspect-[4/3] w-full" />
        </div>
      </div>

      {/* Social Proof */}
      <div className="border-y border-slate-100 py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-slate-500 mb-8">Despachos y empresas que confían en nosotros</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Logos placeholders */}
            <div className="text-xl font-serif font-bold text-slate-800">LexCorp</div>
            <div className="text-xl font-serif font-bold text-slate-800">Justicia Global</div>
            <div className="text-xl font-serif font-bold text-slate-800">Bufete Central</div>
            <div className="text-xl font-serif font-bold text-slate-800">LegalTech</div>
          </div>
        </div>
      </div>

      {/* The Problem & Solution */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 leading-tight">
            Tus casos no son chats aislados. Son un conjunto de piezas.
          </h2>
          <p className="text-slate-600 mb-4">
            En tu día a día, cuando gestionas un asunto en el despacho, trabajas por expedientes. Abres una carpeta digital para ese caso, metes ahí todos los documentos del cliente y, con la estrategia clara, te pones a redactar demandas, responder correos o buscar jurisprudencia.
          </p>
          <p className="text-slate-600">
            El problema es que, hasta ahora, la IA no entendía este flujo: cada vez que abrías un chat nuevo, tenías que empezar de cero. Te tocaba volver a escribir largos prompts para ponerla en contexto, arrastrar otra vez los mismos contratos y repetir quién era el demandante. Un bucle ineficiente que te hacía perder un tiempo valioso.
          </p>
        </div>
        <div className="bg-[#f8fafb] rounded-3xl p-8 lg:p-12 border border-slate-100 relative">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#1a7484]">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif text-slate-900 mb-4">La Solución</h3>
          <p className="text-slate-600">
            Los Expedientes de LexHonduras son la evolución inteligente del clásico «expediente caja» físico. Centralizas la documentación del caso, fijas la estrategia y abres múltiples conversaciones (tus carpetillas) que comparten esa misma base. Le das el contexto a la IA una sola vez, ahorras horas de trabajo repetitivo y gestionas tu asunto tal y como lo harías en la vida real.
          </p>
        </div>
      </div>

      {/* 3 Key Pieces */}
      <div className="bg-[#fdfdfd] border-t border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-16 text-center max-w-2xl mx-auto">
            Todo tu caso unificado en<br />
            <span className="text-[#76c2cf]">tres piezas clave</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-50">
              <FileText className="w-8 h-8 text-[#1a7484] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-slate-800 mb-3">Los Documentos:</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tu prueba y tu fondo legal. Sube los documentos de tu caso a este expediente para que solo estén en el contexto de este asunto. Igual que haces en tu despacho físico, aislando la documentación para que la IA no se invente nada ni lo mezcle con otros casos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-50">
              <Settings className="w-8 h-8 text-[#1a7484] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-slate-800 mb-3">Las Instrucciones:</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tienes hasta 16,000 caracteres para poner a LexHonduras en situación. Puedes decirle: «Somos la defensa, el despido es disciplinario, el objetivo es llegar a un acuerdo rápido...». Estas instrucciones personalizadas son el «cerebro» del expediente y se aplicarán automáticamente a todo lo que hagas dentro de él.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-50">
              <MessageSquare className="w-8 h-8 text-[#1a7484] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-slate-800 mb-3">Las Conversaciones:</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Abre tantas conversaciones como necesites. Usa un chat para analizar la demanda contraria, otro para preparar el interrogatorio y otro para redactar un burofax. Todas las conversaciones comparten las instrucciones y los documentos del expediente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-16 max-w-2xl">
          Pensado para que vayas al<br />
          <span className="text-[#76c2cf]">grano y sin riesgos</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#f8fafb] rounded-2xl p-6 border border-slate-100 flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <CheckCircle2 className="w-5 h-5 text-[#1a7484]" /> Espacio de sobra
            </div>
            <p className="text-slate-600 text-sm">Crea todos los expedientes que quieras. Cientos de folios de texto legal caben perfectamente en cada uno.</p>
          </div>
          
          <div className="bg-[#f8fafb] rounded-2xl p-6 border border-slate-100 flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <CheckCircle2 className="w-5 h-5 text-[#1a7484]" /> Cierra y archiva cuando termines
            </div>
            <p className="text-slate-600 text-sm">Los expedientes tienen su ciclo. Cuando cierres un asunto en el mundo real, hazlo también en LexHonduras. El expediente pasará a tu archivo de cerrados para no molestar en tu día a día, pero estará siempre disponible por si necesitas reabrirlo en el futuro.</p>
          </div>
          
          <div className="bg-[#f8fafb] rounded-2xl p-6 border border-slate-100 flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <CheckCircle2 className="w-5 h-5 text-[#1a7484]" /> Tus asuntos urgentes, siempre a mano
            </div>
            <p className="text-slate-600 text-sm">Desde el menú de opciones del expediente (los tres puntos), puedes fijar tus casos más importantes con una chincheta. Aparecerán destacados para que accedas a ellos con un solo clic.</p>
          </div>
          
          <div className="bg-[#f8fafb] rounded-2xl p-6 border border-slate-100 flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <CheckCircle2 className="w-5 h-5 text-[#1a7484]" /> Máxima flexibilidad con tus chats
            </div>
            <p className="text-slate-600 text-sm">¿Un chat que abriste hace días cuadra con un expediente nuevo? Muévelo dentro de la carpeta. A partir de la siguiente pregunta que le hagas, la IA tendrá en cuenta de forma automática todos los documentos e instrucciones de ese expediente.</p>
          </div>
        </div>
      </div>
      
      {/* Use Cases */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-16 text-center">
            Si ahora que lo vas a usar hoy.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="aspect-[4/3] bg-white rounded-2xl shadow-md border border-slate-100 mb-6 flex items-center justify-center p-4">
                 <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" alt="Litigio" className="rounded-xl w-full h-full object-cover opacity-80" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Preparar un litigio complejo</h3>
              <p className="text-slate-600">
                Mete la demanda en Documentos. En Instrucciones, dile a LexHonduras que actúe como el abogado contrario. Abre varios Chats simultáneos para intentar tumbar tus argumentos o preparar preguntas trampa para la vista.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] bg-white rounded-2xl shadow-md border border-slate-100 mb-6 flex items-center justify-center p-4">
                 <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" alt="Due Diligence" className="rounded-xl w-full h-full object-cover opacity-80" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Revisión de contratos (Due Diligence)</h3>
              <p className="text-slate-600">
                Sube todas las escrituras al expediente. Usa una Conversación para extraer las cláusulas de cambio de control, y otra distinta para hacer un cuadro resumen de las indemnizaciones. Todo bebiendo de la misma fuente de verdad.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-16 max-w-xl">
          Lo que dicen nuestros clientes
        </h2>
        <div className="bg-white border border-slate-200 rounded-3xl p-10 flex flex-col gap-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Christian Vilalta</h4>
                <p className="text-slate-500 text-sm">Socio Director</p>
              </div>
            </div>
            <div className="text-2xl font-serif font-bold text-slate-300">gremicat:</div>
          </div>
          <p className="text-2xl md:text-3xl font-serif text-slate-800 leading-tight">
            "LexHonduras es la compañera de equipo que siempre está disponible"
          </p>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-[#1a7484]"></div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="bg-gradient-to-br from-[#1a7484] to-[#12535e] py-24 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#76c2cf]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Organiza tu cabeza.<br />
            Organiza tu IA.
          </h2>
          <p className="text-[#e8f1f2] mb-10">
            Los Expedientes ya están en tu cuenta de LexHonduras. Agrupa tus documentos, marca tus instrucciones y deja de perder el tiempo repitiendo lo mismo.
          </p>
          <button onClick={onStart} className="bg-white text-[#1a7484] px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-colors shadow-lg">
            Probar Expedientes ahora en LexHonduras
          </button>
        </div>
      </div>
    </div>
  );
};
