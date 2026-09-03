import React from 'react';
import { ChevronDown, Search, ShieldCheck, Shield, Lock, CheckCircle2, X } from 'lucide-react';

export const Buscador = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="flex-1 w-full bg-white pt-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight mb-6">
            Tu buscador de sentencias, <span className="text-[#1a7484]">pero con IA</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Accede a más de 2.5 millones de resoluciones judiciales y legislación actualizada. No te limites a encontrar el PDF: LexHonduras lo lee, lo analiza y extrae los argumentos ganadores por ti en segundos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button onClick={onStart} className="w-full sm:w-auto bg-[#1a7484] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#145d6a] transition-colors shadow-md">
              Acceder gratis
            </button>
            <p className="text-sm text-slate-500">20 consultas incluidas. Sin tarjeta de crédito.</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#f2f6f7] rounded-3xl transform -rotate-2 scale-105 -z-10"></div>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 aspect-[4/3] flex flex-col">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-4">
               <div className="w-3 h-3 rounded-full bg-red-400"></div>
               <div className="w-3 h-3 rounded-full bg-amber-400"></div>
               <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-slate-50 rounded-xl p-4 flex flex-col gap-3">
               <div className="h-6 w-1/3 bg-slate-200 rounded animate-pulse"></div>
               <div className="h-4 w-full bg-slate-200 rounded animate-pulse delay-75"></div>
               <div className="h-4 w-5/6 bg-slate-200 rounded animate-pulse delay-150"></div>
               <div className="h-4 w-4/6 bg-slate-200 rounded animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="border-y border-slate-100 py-10">
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

      {/* Feature Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-16 text-center">
          De la búsqueda por palabras a <span className="text-[#76c2cf]">la búsqueda por conceptos</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#f8fafb] rounded-xl flex items-center justify-center border border-slate-100">
              <CheckCircle2 className="w-6 h-6 text-[#1a7484]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Precisión probada, conocimiento real</h3>
            <p className="text-slate-600">LexHonduras obtuvo un 99/100 en el examen de acceso a la judicatura. Entiende conceptos jurídicos complejos mejor que cualquier buscador tradicional.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#f8fafb] rounded-xl flex items-center justify-center border border-slate-100">
              <Search className="w-6 h-6 text-[#1a7484]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Relevancia del 100%</h3>
            <p className="text-slate-600">A diferencia de ChatGPT, LexHonduras conecta cada argumento con su fuente oficial (enlace directo a la sentencia o artículo del código). Si no lo tiene, no lo inventa.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#f8fafb] rounded-xl flex items-center justify-center border border-slate-100">
              <X className="w-6 h-6 text-[#1a7484]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Deja de filtrar manualmente</h3>
            <p className="text-slate-600">No te damos 500 resultados para que tú los leas. Te damos la respuesta basada en los documentos más relevantes.</p>
          </div>
        </div>

        <div className="mt-24 bg-[#f8fafb] rounded-3xl p-8 lg:p-12 border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-md p-4 border border-slate-100 aspect-video flex items-center justify-center">
             <div className="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center">
               <span className="text-slate-400 font-medium">Animación Buscador</span>
             </div>
          </div>
          <div>
            <h3 className="text-3xl font-serif text-slate-900 mb-6 leading-tight">
              Tú tienes el control: <span className="text-[#76c2cf]">Activa el modo "Buscador de Sentencias"</span>
            </h3>
            <p className="text-slate-600 mb-6">
              A veces no necesitas creatividad, necesitas rigor. Activa el icono de la balanza en el chat. LexHonduras dejará de lado su conocimiento general y realizará una búsqueda estricta en nuestra base de datos de más de 2.5M de documentos y en los boletines actualizados a diario.
            </p>
            <ul className="space-y-3 mb-8 text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#1a7484]" /> Ideal para fundamentar demandas.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#1a7484]" /> Perfecto para encontrar jurisprudencia contradictoria.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#1a7484]" /> Actualización constante.</li>
            </ul>
            <button onClick={onStart} className="bg-[#1a7484] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#145d6a] transition-colors shadow-sm">
              Accede gratis
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Precisión y relevancia</p>
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12">
          La precisión que el derecho exige, <span className="text-[#76c2cf]">con la facilidad de la IA</span>
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-4 text-left font-medium text-slate-500 w-1/4"></th>
                <th className="p-4 text-center font-bold text-slate-800 bg-[#f8fafb] rounded-t-xl w-1/4">Buscadores Clásicos<br/><span className="text-sm font-normal text-slate-500">(Bases de datos)</span></th>
                <th className="p-4 text-center font-bold text-slate-800 w-1/4">ChatGPT / IAs Genéricas</th>
                <th className="p-4 text-center font-bold text-[#1a7484] bg-[#e8f1f2] rounded-t-xl w-1/4">LexHonduras</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="p-4 text-left font-medium">Volumen</td>
                <td className="p-4 text-center bg-[#f8fafb]">Millones de docs</td>
                <td className="p-4 text-center">No tiene sentencias verificadas</td>
                <td className="p-4 text-center bg-[#e8f1f2] font-semibold">+2.5M de Sentencias</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-left font-medium">Actualización</td>
                <td className="p-4 text-center bg-[#f8fafb]">Constante</td>
                <td className="p-4 text-center">Desconocida</td>
                <td className="p-4 text-center bg-[#e8f1f2] font-semibold">Constante</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-left font-medium">Análisis</td>
                <td className="p-4 text-center bg-[#f8fafb]">Manual (lo haces tú)</td>
                <td className="p-4 text-center">Automático (pero inventa)</td>
                <td className="p-4 text-center bg-[#e8f1f2] font-semibold">Automático y Fiable</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 text-left font-medium">Citas Reales</td>
                <td className="p-4 text-center bg-[#f8fafb]">Sí</td>
                <td className="p-4 text-center text-red-500">No fiable</td>
                <td className="p-4 text-center bg-[#e8f1f2] font-semibold">Sí</td>
              </tr>
              <tr>
                <td className="p-4 text-left font-medium">Privacidad</td>
                <td className="p-4 text-center bg-[#f8fafb] rounded-b-xl">Alta</td>
                <td className="p-4 text-center">Baja (usan tus datos)</td>
                <td className="p-4 text-center bg-[#e8f1f2] rounded-b-xl font-semibold">Empresarial (SOC 2)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Security & Privacy */}
      <div className="bg-[#fdfdfd] border-t border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Tu confianza es nuestra prioridad</p>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12">
            Seguridad y privacidad
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <ShieldCheck className="w-10 h-10 text-[#1a7484]" />
              <div className="text-lg font-bold text-slate-800">Cumple estrictamente con el RGPD y normativas locales</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <Lock className="w-10 h-10 text-[#1a7484]" />
              <div className="text-lg font-bold text-slate-800">Nuestros servidores están seguros</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f8fafb] border border-slate-100 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-2">No usamos los datos de los usuarios</h3>
              <p className="text-sm text-slate-600">Ni para entrenar a los modelos ni para alimentar a LexHonduras</p>
            </div>
            <div className="bg-[#f8fafb] border border-slate-100 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-2">Seudonimización / Anonimización</h3>
              <p className="text-sm text-slate-600">Anonimizamos cierta documentación de los clientes.</p>
            </div>
            <div className="bg-[#f8fafb] border border-slate-100 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-2">Confidencialidad privacidad de los datos</h3>
              <p className="text-sm text-slate-600">No se comparten los datos de los usuarios con nadie.</p>
            </div>
          </div>
          
          <div className="mt-6 bg-[#f8fafb] border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Cifrado y Seguridad de Acceso</h3>
              <p className="text-sm text-slate-600">Cumplimos con los más estrictos estándares de cifrado y seguridad de los datos y acceso seguro.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-800 text-xs text-center leading-tight">SOC<br/>2</div>
              <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center font-bold text-slate-600 text-xs">TLS 1.2</div>
              <div className="w-12 h-12 bg-emerald-100 rounded flex items-center justify-center font-bold text-emerald-800 text-xs text-center leading-tight">AES<br/>256</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="bg-gradient-to-br from-[#1a7484] to-[#12535e] py-24 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#76c2cf]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Encuentra el argumento ganador en segundos
          </h2>
          <p className="text-[#e8f1f2] mb-10">
            Prueba LexHonduras gratis y sin compromiso
          </p>
          <button onClick={onStart} className="bg-white text-[#1a7484] px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-colors shadow-lg">
            Accede gratis
          </button>
        </div>
      </div>
    </div>
  );
};
