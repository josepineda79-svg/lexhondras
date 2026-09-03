import React from 'react';
import { Search, Layers, FileText, CreditCard, Brain, Wrench, Shield, Tag, Laptop, AlertCircle } from 'lucide-react';

export function Faq() {
  const categories = [
    {
      icon: FileText,
      title: 'Generales (15)',
      links: [
        '¿Qué es LexHonduras y cómo ayuda a los profesionales del derecho?',
        '¿Qué nivel de inteligencia jurídica tiene LexHonduras? (Fiabilidad y Resultados)',
        '¿Para quién está diseñado LexHonduras?'
      ],
      viewAll: 'Ver todo 15'
    },
    {
      icon: CreditCard,
      title: 'Gestión de suscripción y pagos (21)',
      links: [
        '¿Cómo crear una cuenta en LexHonduras y acceder por primera vez?',
        '¿Qué planes de precios ofrece LexHonduras y en qué se diferencian?',
        '¿Cómo puedo contratar y activar una suscripción de pago?'
      ],
      viewAll: 'Ver todo 21'
    },
    {
      icon: Brain,
      title: 'Conocimiento de LexHonduras (7)',
      links: [
        '¿De qué fuentes obtiene LexHonduras su conocimiento jurídico?',
        '¿Qué legislación y jurisprudencia incluye exactamente LexHonduras?',
        '¿Cómo puedo verificar las leyes y sentencias que cita LexHonduras?'
      ],
      viewAll: 'Ver todo 7'
    },
    {
      icon: Wrench,
      title: 'Soporte técnico (6)',
      links: [
        '¿Cómo puedo contactar con el equipo de Soporte Técnico?',
        '¿Qué alcance tiene la asistencia técnica y el soporte de LexHonduras?',
        '¿Cómo puedo reportar un error o incidencia técnica?'
      ],
      viewAll: 'Ver todo 6'
    },
    {
      icon: Shield,
      title: 'Seguridad y privacidad (8)',
      links: [
        '¿Están seguros mis documentos? ¿Cómo garantizáis que no se comparten?',
        '¿Existe alguna cláusula explícita en el contrato que blinde mi información?',
        '¿Qué medidas de ciberseguridad técnica implementa la plataforma?'
      ],
      viewAll: 'Ver todo 8'
    },
    {
      icon: Tag,
      title: 'Planes y precios (5)',
      links: [
        '¿Los precios incluyen el ISV?',
        '¿Existe un periodo de prueba gratuito? ¿Qué incluye?',
        '¿Puedo cambiar de plan de suscripción? ¿Cómo afecta a mi facturación?'
      ],
      viewAll: 'Ver todo 5'
    },
    {
      icon: Laptop,
      title: 'Funcionalidades y usabilidad (27)',
      links: [
        'He realizado la compra. ¿Cómo empiezo a utilizar LexHonduras?',
        '¿Qué es un "Prompt" y cómo debo escribirlo?',
        '¿Cómo introduzco un prompt? (Escritura y Dictado por Voz)'
      ],
      viewAll: 'Ver todo 27'
    },
    {
      icon: AlertCircle,
      title: 'Resolución de problemas comunes (5)',
      links: [
        'Tengo una suscripción de pago, pero me dice que he agotado las consultas.',
        '¿Por qué me pide verificar el email cada vez que entro?',
        '¿Qué debo hacer si detecto que una respuesta de LexHonduras es incorrecta?'
      ],
      viewAll: 'Ver todo 5'
    }
  ];

  return (
    <div className="pt-20 bg-[#f8fcfd] min-h-screen">
      {/* Help Center Header */}
      <div className="bg-[#e8f1f2] border-b border-[#1a7484]/10 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h1 className="text-3xl font-bold text-slate-900">Base de conocimientos</h1>
          <div className="flex gap-4 items-center">
            <button className="text-sm font-medium text-slate-700 hover:text-[#1a7484]">Inicio</button>
            <button className="bg-[#1a7484] text-white px-4 py-2 rounded-lg text-sm font-medium">Preguntas frecuentes</button>
            <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">Reportar incidencia</button>
            
            <div className="relative ml-4 w-64">
              <input 
                type="text" 
                placeholder="Aquí encontrarás algunas soluciones..." 
                className="w-full border border-slate-200 rounded-lg pl-3 pr-10 py-2 text-sm outline-none focus:border-[#1a7484]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* Main FAQS intro */}
          <div className="p-8 border-b border-slate-100 flex gap-4">
            <div className="mt-1 text-slate-800">
               <Layers className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">FAQS (8)</h2>
              <p className="text-slate-600 text-sm">
                Bienvenido a tu base de recursos oficial. Aquí encontrarás respuestas claras para sacar el máximo partido a tu copiloto legal. Explora nuestras categorías principales para resolver tus dudas sobre la gestión de tu suscripción y facturación, el uso de la base de conocimiento y la subida de documentos, así como todo lo referente a la seguridad de tus datos, la resolución de incidencias y mucho más.
              </p>
            </div>
          </div>

          {/* Grid of categories */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {categories.map((cat, idx) => (
              <div key={idx} className={`p-8 border-slate-100 ${idx % 2 === 0 ? 'border-r' : ''} ${idx < categories.length - 2 ? 'border-b' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <cat.icon className="w-6 h-6 text-slate-800" />
                  <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                </div>
                <ul className="space-y-4 mb-6">
                  {cat.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="flex items-start gap-2 text-[#1a7484] hover:underline">
                        <FileText className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-tight">{link}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="#" className="text-[#1a7484] text-sm hover:underline font-medium">{cat.viewAll}</a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
