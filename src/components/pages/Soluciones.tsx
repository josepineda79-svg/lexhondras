import React from 'react';
import { ChevronDown, Shield, FileText, CheckCircle2, ArrowRight, Lock, MapPin, Search, Edit3 } from 'lucide-react';

export function Soluciones({ onStart }: { onStart: () => void }) {
  return (
    <div className="pt-32 pb-20 w-full overflow-hidden">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-slate-600 font-medium mb-4 uppercase tracking-wider text-sm">Despachos de abogados</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight mb-6">
              Multiplica la capacidad de tu despacho <span className="text-[#1a7484] italic">sin renunciar al rigor jurídico.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 italic">
              "Soy LexHonduras, tu copiloto de IA experto en derecho hondureño. Mientras yo analizo miles de folios y preparo tus borradores en segundos, tú te centras en ganar el caso y cuidar a tus clientes. Sin complicaciones y tan fácil como usar WhatsApp."
            </p>
            <button 
              onClick={onStart}
              className="bg-[#1a7484] text-white px-8 py-3 rounded-full font-medium hover:bg-[#145d6a] transition-colors"
            >
              Solicitar una demo
            </button>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-[#e8f1f2] rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800" 
              alt="Abogada trabajando" 
              className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="border-y border-slate-100 bg-[#f8fcfd] py-12 mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <h3 className="text-xl md:text-2xl font-serif text-slate-700 max-w-sm">
              Algunas firmas exigentes y profesionales de alto nivel <span className="text-[#5bc7d6]">que ya confían en nosotros</span>
            </h3>
            <div className="flex gap-8 flex-wrap items-center justify-center opacity-60 grayscale">
              <span className="text-xl font-bold font-serif">LexCorp</span>
              <span className="text-xl font-bold font-serif">Honduras Legal</span>
              <span className="text-xl font-bold font-serif">Asociados HN</span>
              <span className="text-xl font-bold font-serif">Bufete Central</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tres Pilares */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 mb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-2">Los tres pilares de LexHonduras</h2>
        <p className="text-[#5bc7d6] font-medium text-lg italic mb-12">Frente a otras IAs</p>

        <div className="space-y-4">
          <div className="bg-[#f8fcfd] border border-[#e8f1f2] rounded-xl p-5 flex items-center justify-between text-left cursor-pointer hover:border-[#5bc7d6] transition-colors">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-[#1a7484] w-6 h-6" />
              <span className="font-medium text-slate-800 text-lg">Precisión probada, conocimiento real</span>
            </div>
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </div>
          <div className="bg-[#f8fcfd] border border-[#e8f1f2] rounded-xl p-5 flex items-center justify-between text-left cursor-pointer hover:border-[#5bc7d6] transition-colors">
            <div className="flex items-center gap-4">
              <Lock className="text-[#1a7484] w-6 h-6" />
              <span className="font-medium text-slate-800 text-lg">Privacidad absoluta</span>
            </div>
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </div>
          <div className="bg-[#f8fcfd] border border-[#e8f1f2] rounded-xl p-5 flex items-center justify-between text-left cursor-pointer hover:border-[#5bc7d6] transition-colors">
            <div className="flex items-center gap-4">
              <Shield className="text-[#1a7484] w-6 h-6" />
              <span className="font-medium text-slate-800 text-lg">Control del despacho</span>
            </div>
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Casos de uso */}
      <div className="bg-[#f8fcfd] py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 text-center mb-20">Casos de uso prácticos</h2>

          <div className="space-y-24">
            {/* Caso 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-slate-900 mb-4">Análisis de expedientes en segundos</h3>
                <p className="text-slate-600 mb-8">
                  Sube un sumario de cien páginas y pídele a LexHonduras una cronología exacta de los hechos para agilizar tu trabajo.
                </p>
                <button onClick={onStart} className="bg-[#1a7484] text-white px-6 py-2 rounded-full font-medium hover:bg-[#145d6a] transition-colors text-sm">
                  Solicitar una demo
                </button>
              </div>
              <div className="flex-1">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative">
                  <div className="h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1568225421715-e21829e19d77?auto=format&fit=crop&q=80&w=600" alt="Expedientes" className="opacity-20 object-cover w-full h-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                       <Search className="w-12 h-12 text-[#1a7484] mb-4" />
                       <div className="w-3/4 h-2 bg-slate-200 rounded-full mb-2"></div>
                       <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-slate-900 mb-4">Primeros borradores sólidos</h3>
                <p className="text-slate-600 mb-8">
                  Genera la base de un recurso o una demanda con base legal actualizada y ahórrate el síndrome del folio en blanco.
                </p>
                <button onClick={onStart} className="bg-[#7fb9c2] text-white px-6 py-2 rounded-full font-medium hover:bg-[#5bc7d6] transition-colors text-sm">
                  Solicitar una demo
                </button>
              </div>
              <div className="flex-1">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative">
                  <div className="h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=600" alt="Borradores" className="opacity-20 object-cover w-full h-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                       <Edit3 className="w-12 h-12 text-[#5bc7d6] mb-4" />
                       <div className="w-full h-2 bg-slate-200 rounded-full mb-2"></div>
                       <div className="w-5/6 h-2 bg-slate-200 rounded-full mb-2"></div>
                       <div className="w-3/4 h-2 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 3 */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-slate-900 mb-4">Validación de estrategia procesal</h3>
                <p className="text-slate-600 mb-8">
                  Sube la demanda o el recurso de la parte contraria y pide a LexHonduras que identifique sus puntos débiles. Genera líneas de defensa alternativas, encuentra contraargumentos y pon a prueba tus propios fundamentos jurídicos antes de presentar tu escrito.
                </p>
                <button onClick={onStart} className="bg-[#1a7484] text-white px-6 py-2 rounded-full font-medium hover:bg-[#145d6a] transition-colors text-sm">
                  Solicitar una demo
                </button>
              </div>
              <div className="flex-1">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative">
                  <div className="h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600" alt="Estrategia" className="opacity-20 object-cover w-full h-full" />
                     <div className="absolute inset-0 flex items-center justify-center p-8">
                       <div className="bg-white shadow-md p-4 rounded-lg w-full flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-[#1a7484] flex-shrink-0"></div>
                         <div className="flex-1">
                           <div className="w-full h-2 bg-slate-200 rounded-full mb-2"></div>
                           <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seguridad y Privacidad */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Seguridad y privacidad</h2>
        <p className="text-slate-600 max-w-2xl mb-12">
          En LexHonduras entendemos que la seguridad es una prioridad fundamental para los profesionales legales. Nuestro copiloto legal impulsado por IA está diseñado con la máxima atención a la protección de datos y privacidad, cumpliendo con las normativas más estrictas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#f8fcfd] p-6 rounded-2xl border border-[#e8f1f2] flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100 text-[#1a7484]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Cumple estrictamente con regulaciones de datos</h4>
              <p className="text-sm text-slate-500">Privacidad desde el diseño en cada interacción.</p>
            </div>
          </div>
          <div className="bg-[#f8fcfd] p-6 rounded-2xl border border-[#e8f1f2] flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100 text-[#1a7484]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Nuestros servidores están seguros</h4>
              <p className="text-sm text-slate-500">Alojamiento de grado empresarial.</p>
            </div>
          </div>
          <div className="bg-[#f8fcfd] p-6 rounded-2xl border border-[#e8f1f2] flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100 text-[#1a7484]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">No usamos los datos de los usuarios</h4>
              <p className="text-sm text-slate-500">Ni para entrenar a los modelos ni para alimentar a LexHonduras.</p>
            </div>
          </div>
          <div className="bg-[#f8fcfd] p-6 rounded-2xl border border-[#e8f1f2] flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100 text-[#1a7484]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Seudonimización y anonimización</h4>
              <p className="text-sm text-slate-500">Anonimizamos cierta documentación de los clientes.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#f8fcfd] border border-[#e8f1f2] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-600 font-medium">Cumplimos con los más estrictos estándares de cifrado y seguridad de los datos y acceso seguro sin contraseñas.</p>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-white border border-[#1a7484] rounded-lg text-[#1a7484] font-bold text-sm">SOC 2</div>
            <div className="px-4 py-2 bg-white border border-[#1a7484] rounded-lg text-[#1a7484] font-bold text-sm">TLS 1.2</div>
            <div className="px-4 py-2 bg-white border border-[#1a7484] rounded-lg text-[#1a7484] font-bold text-sm">AES-256</div>
          </div>
        </div>
      </div>

      {/* Testimoniales */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
        <h2 className="text-3xl font-serif text-slate-900 mb-4">Testimoniales</h2>
        <p className="text-slate-600 mb-10">Nos rodeamos de las mejores personas para poder ofrecer lo mejor a nuestros usuarios.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a7484] p-8 rounded-2xl text-white">
            <p className="text-lg font-serif italic mb-8">"LexHonduras es un compañero más del departamento jurídico, su nombre humano ayuda a tratarla como tal!"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              <div>
                <p className="font-bold text-sm">Alicia Lorenzo Ucha</p>
                <p className="text-white/70 text-xs">Socia Responsable del Departamento Jurídico</p>
              </div>
            </div>
          </div>
          <div className="bg-[#145d6a] p-8 rounded-2xl text-white">
            <p className="text-lg font-serif italic mb-8">"Ahora respondo dudas de cualquier área de la empresa con mayor rapidez."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              <div>
                <p className="font-bold text-sm">Miguel A. Martín López</p>
                <p className="text-white/70 text-xs">Abogado en Asesoría Jurídica</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0f4650] p-8 rounded-2xl text-white">
            <p className="text-lg font-serif italic mb-8">"No concibo el ejercicio de la profesión en los tiempos de la IA sin LexHonduras"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              <div>
                <p className="font-bold text-sm">Alejandro García Fernández</p>
                <p className="text-white/70 text-xs">Socio y Gerente del Despacho</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1a7484] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              Nos rodeamos de las mejores personas para poder ofrecer lo mejor a nuestros usuarios.
            </h2>
            <p className="text-xl font-medium mb-4">¿Sois un equipo de más de 5? Hablemos.</p>
            <p className="text-white/80 mb-12">
              Agendad una sesión estratégica con uno de nuestros expertos. Analizamos vuestra metodología y os demostramos en directo cómo asumo vuestra carga documental para que vuestro equipo aporte el valor diferencial al cliente.
            </p>
            <div className="bg-white text-[#1a7484] p-6 rounded-xl inline-flex items-center gap-6">
               <div>
                 <p className="text-3xl font-bold">99/100</p>
                 <p className="text-xs text-slate-500">Es la nota de LexHonduras en el test de acceso a la judicatura</p>
               </div>
               <div className="w-16 h-16 bg-[#e8f1f2] rounded-full flex items-center justify-center flex-shrink-0">
                 <Shield className="w-8 h-8 text-[#1a7484]" />
               </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 text-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-center mb-6">Solicitud de información para despachos</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onStart(); }}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre" className="border border-slate-200 rounded-lg p-3 w-full outline-none focus:border-[#1a7484]" required />
                  <input type="text" placeholder="Apellidos" className="border border-slate-200 rounded-lg p-3 w-full outline-none focus:border-[#1a7484]" required />
                </div>
                <input type="email" placeholder="Correo Electrónico" className="border border-slate-200 rounded-lg p-3 w-full outline-none focus:border-[#1a7484]" required />
                <input type="tel" placeholder="Teléfono" className="border border-slate-200 rounded-lg p-3 w-full outline-none focus:border-[#1a7484]" required />
                <input type="text" placeholder="Nombre del despacho" className="border border-slate-200 rounded-lg p-3 w-full outline-none focus:border-[#1a7484]" required />
                <select className="border border-slate-200 rounded-lg p-3 w-full outline-none focus:border-[#1a7484] bg-white text-slate-500" required>
                  <option value="">Número de profesionales...</option>
                  <option value="1-5">1 a 5</option>
                  <option value="6-20">6 a 20</option>
                  <option value="21-50">21 a 50</option>
                  <option value="50+">Más de 50</option>
                </select>
                <textarea placeholder="Cuéntanos lo que necesitas" rows={4} className="border border-slate-200 rounded-lg p-3 w-full outline-none focus:border-[#1a7484] resize-none"></textarea>
                
                <div className="pt-2">
                  <p className="text-sm font-semibold mb-2 text-slate-700">Términos y condiciones *</p>
                  <p className="text-[10px] text-slate-500 mb-3 text-justify">
                    (*) Por medio de la presente, le comunicamos que el responsable del tratamiento de sus datos personales facilitados es LexHonduras...
                  </p>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" required />
                    <span className="text-xs text-slate-600">Acepto los términos y condiciones.</span>
                  </label>
                </div>
                
                <button type="submit" className="w-full bg-[#5bc7d6] text-white py-3 rounded-full font-bold hover:bg-[#4ab4c4] transition-colors mt-4">
                  SOLICITAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
