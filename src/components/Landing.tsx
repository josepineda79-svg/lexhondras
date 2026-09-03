import { ProductoQueEs } from "./pages/ProductoQueEs";
import { Buscador } from "./pages/Buscador";
import { Expedientes } from "./pages/Expedientes";
import { Conocimiento } from "./pages/Conocimiento";
import { Soluciones } from "./pages/Soluciones";
import { Faq } from "./pages/Faq";
import { CasosExito } from "./pages/CasosExito";
import { Blog } from "./pages/Blog";
import React, { useState } from "react";
import { ChevronDown, Sparkles, Brain, Gavel, FileText, Scale, Lock, CheckCircle2, Shield, FileLock2, ArrowRight, Menu, Calculator, Download, Users, Landmark, Building2, Play, Check, HelpCircle, FileSearch, FolderOpen, BookOpen, ClipboardList, PenTool } from "lucide-react";

interface LandingProps {
  onEnterWorkspace: () => void;
}

export function Landing({ onEnterWorkspace }: LandingProps) {
  const [view, setView] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Onboarding State
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const handleStartOnboarding = () => {
    setShowOnboarding(true);
    setOnboardingStep(0);
  };

  const closeOnboarding = () => {
    setShowOnboarding(false);
  };

  const completeOnboarding = () => {
    setShowOnboarding(false);
    onEnterWorkspace();
  };

  // Common Navigation Component to share between home and subpages
  const Navigation = () => (
    <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setView('home')}
        >
          <div className="w-8 h-8 bg-white border border-[#1a7484] rounded-full flex items-center justify-center">
            <Scale className="w-4 h-4 text-[#1a7484]" />
          </div>
          <span className="text-2xl font-serif font-medium tracking-tight text-slate-800">lexhonduras</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          
          {/* Producto Dropdown */}
          <div className="relative group h-full flex items-center">
            <button onClick={() => setView('producto')} className="flex items-center gap-1 font-medium text-slate-700 hover:text-[#1a7484] transition-colors">
              Producto <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-[60px] left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-2 w-[340px] flex flex-col gap-1">
                {[
                  { icon: HelpCircle, title: 'Producto', desc: '¿Qué es LexHonduras?', id: 'producto_que_es' },
                  { icon: FileSearch, title: 'Buscador de Jurisprudencia con IA', desc: 'Más de 2.5 millones', id: 'producto_buscador' },
                  { icon: FolderOpen, title: 'Expedientes', desc: 'Organiza y gestiona tus proyectos', id: 'producto_expedientes' },
                  { icon: BookOpen, title: 'Conocimiento de LexHonduras', desc: 'Fuentes jurídicas', id: 'producto_conocimiento' }
                ].map((item, i) => (
                  <button key={i} onClick={() => setView('recursos_faq')} className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left w-full">
                    <div className="w-10 h-10 bg-[#e8f1f2] rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#1a7484]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm mb-0.5">{item.title}</h4>
                      <p className="text-[13px] text-slate-500">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Soluciones Dropdown */}
          <div className="relative group h-full flex items-center">
            <button onClick={() => setView('soluciones')} className="flex items-center gap-1 font-medium text-slate-700 hover:text-[#1a7484] transition-colors">
              Soluciones <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-[60px] left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-2 w-[300px] flex flex-col gap-1">
                {[
                  { icon: Scale, title: 'Despachos de abogados' },
                  { icon: Building2, title: 'Departamentos jurídicos' },
                  { icon: ClipboardList, title: 'Asesorías y Gestorías' },
                  { icon: Landmark, title: 'Administraciones públicas' }
                ].map((item, i) => (
                  <button key={i} onClick={() => setView('soluciones')} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left w-full">
                    <div className="w-10 h-10 bg-[#e8f1f2] rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#1a7484]" />
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm">{item.title}</h4>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={() => setView('precios')} className="font-medium text-slate-700 hover:text-[#1a7484] transition-colors">Precios</button>
          
          {/* Recursos Dropdown */}
          <div className="relative group h-full flex items-center">
            <button onClick={() => setView('recursos_faq')} className="flex items-center gap-1 font-medium text-slate-700 hover:text-[#1a7484] transition-colors">
              Recursos <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-[60px] left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-6 w-[650px] flex gap-8">
                <div className="flex-1 flex flex-col gap-1">
                  {[
                    { icon: PenTool, title: 'Blog', desc: 'Contenido y actualidad', id: 'recursos_blog' },
                    { icon: FileText, title: 'Casos de éxito', desc: 'Conoce como nos usan los clientes', id: 'recursos_casos' },
                    { icon: HelpCircle, title: 'Preguntas frecuentes', desc: 'Resuelve tus dudas', id: 'recursos_faq' }
                  ].map((item, i) => (
                    <button key={i} onClick={() => setView(item.id)} className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left w-full">
                      <div className="w-10 h-10 bg-[#e8f1f2] rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#1a7484]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm mb-0.5">{item.title}</h4>
                        <p className="text-[13px] text-slate-500">{item.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="w-[280px] border-l border-slate-100 pl-8 flex flex-col pt-2">
                  <h4 className="font-serif text-xl text-slate-900 mb-4">Artículo destacado</h4>
                  <div className="rounded-xl overflow-hidden mb-4 bg-slate-100 h-[140px]">
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400&h=250" alt="Artículo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 leading-snug mb-3">Más de 230.000 nuevas sentencias de 2025 y 2026: el Tribunal Supremo...</p>
                  <button onClick={() => setView('recursos_faq')} className="text-[#1a7484] text-sm font-medium text-left hover:underline">Leer artículo</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={handleStartOnboarding}
            className="px-5 py-2.5 text-[15px] font-medium text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
          >
            Iniciar sesión
          </button>
          <button 
            onClick={handleStartOnboarding}
            className="bg-[#1a7484] text-white px-6 py-2.5 text-[15px] font-medium rounded-full hover:bg-[#145d6a] transition-all"
          >
            Accede gratis
          </button>
        </div>

        <Menu className="w-6 h-6 text-slate-600 lg:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg p-4 flex flex-col gap-4">
          <button onClick={() => { setView('producto_que_es'); setMobileMenuOpen(false); }} className="text-left font-medium text-slate-700">Producto</button>
          <button onClick={() => { setView('soluciones'); setMobileMenuOpen(false); }} className="text-left font-medium text-slate-700">Soluciones</button>
          <button onClick={() => { setView('precios'); setMobileMenuOpen(false); }} className="text-left font-medium text-slate-700">Precios</button>
          <hr/>
          <button onClick={handleStartOnboarding} className="w-full border border-slate-200 py-2 rounded-full font-medium text-slate-700">Iniciar sesión</button>
          <button onClick={handleStartOnboarding} className="w-full bg-[#1a7484] py-2 rounded-full font-medium text-white">Accede gratis</button>
        </div>
      )}
    </nav>
  );

  // Common Footer Component
  const Footer = () => (
    <footer className="bg-[#f8fafb] pt-20 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => setView('home')}>
              <div className="w-8 h-8 bg-white border border-[#1a7484] rounded-full flex items-center justify-center">
                <Scale className="w-4 h-4 text-[#1a7484]" />
              </div>
              <span className="text-2xl font-serif font-medium tracking-tight text-slate-800">lexhonduras</span>
            </div>
            <p className="text-sm text-slate-500 mb-2">Avda. Los Próceres, 1234,</p>
            <p className="text-sm text-slate-500 mb-2">Tegucigalpa,</p>
            <p className="text-sm text-slate-500">Honduras</p>
          </div>

          <div>
            <h4 className="font-medium text-slate-900 mb-6">Producto</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><button onClick={() => setView('producto_que_es')} className="hover:text-[#1a7484]">¿Qué es LexHonduras?</button></li>
              <li><button onClick={() => setView('producto_buscador')} className="hover:text-[#1a7484]">Buscador de sentencias</button></li>
              <li><button onClick={() => setView('producto_expedientes')} className="hover:text-[#1a7484]">Expedientes</button></li>
              <li><button onClick={() => setView('producto_conocimiento')} className="hover:text-[#1a7484]">Conocimiento</button></li>
              <li><button onClick={() => setView('precios')} className="hover:text-[#1a7484]">Precios</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-slate-900 mb-6">Soluciones</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><button onClick={() => setView('soluciones')} className="hover:text-[#1a7484]">Despachos de abogados</button></li>
              <li><button onClick={() => setView('soluciones')} className="hover:text-[#1a7484]">Departamentos jurídicos</button></li>
              <li><button onClick={() => setView('soluciones')} className="hover:text-[#1a7484]">Asesorías y Gestorías</button></li>
              <li><button onClick={() => setView('soluciones')} className="hover:text-[#1a7484]">Administraciones públicas</button></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h4 className="font-medium text-slate-900 mb-4">¿Cómo podemos ayudarte?</h4>
            <p className="text-sm text-slate-600 mb-4">
              <strong>Soporte y Planes:</strong> Para dudas o incidencias, escríbenos a <a href="#" className="text-[#1a7484] underline">soporte@lexhonduras.ai</a>.
            </p>
            <p className="text-sm text-slate-600 mb-6">
              Resuelve tus dudas al instante en nuestro Centro de Ayuda.
            </p>
            <button onClick={() => setView('recursos_faq')} className="px-5 py-2 border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-50">
              Ir al Centro de Ayuda
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 text-xs text-slate-500">
          <p>© 2026 LexHonduras.ai</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={() => setView('legal')} className="hover:text-slate-900">Política de Privacidad</button>
            <button onClick={() => setView('legal')} className="hover:text-slate-900">Cookies</button>
            <button onClick={() => setView('legal')} className="hover:text-slate-900">Términos y Condiciones</button>
          </div>
        </div>
      </div>
    </footer>
  );


  // Page Templates
  if (view === 'producto_que_es') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">
        <Navigation />
        <ProductoQueEs onStart={handleStartOnboarding} />
        <Footer />
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}
      </div>
    );
  }

  if (view === 'producto_buscador') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">
        <Navigation />
        <Buscador onStart={handleStartOnboarding} />
        <Footer />
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}
      </div>
    );
  }

  if (view === 'producto_expedientes') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">
        <Navigation />
        <Expedientes onStart={handleStartOnboarding} />
        <Footer />
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}
      </div>
    );
  }

  if (view === 'producto_conocimiento') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">
        <Navigation />
        <Conocimiento />
        <Footer />
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}
      </div>
    );
  }

  if (view === 'soluciones') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">
        <Navigation />
        <Soluciones onStart={handleStartOnboarding} />
        <Footer />
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}
      </div>
    );
  }

  if (view === 'recursos_faq') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">
        <Navigation />
        <Faq />
        <Footer />
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}
      </div>
    );
  }

  if (view === 'recursos_casos') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">
        <Navigation />
        <CasosExito onStart={handleStartOnboarding} />
        <Footer />
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}
      </div>
    );
  }

  if (view === 'recursos_blog') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">
        <Navigation />
        <Blog />
        <Footer />
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}
      </div>
    );
  }

  // Precios Page Template
  if (view === 'precios') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">
        <Navigation />
        
        {/* Pricing Header */}
        <div className="pt-32 pb-16 text-center px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tight">Planes y precios</h1>
          <p className="text-lg text-slate-600 mb-8">Consigue el copiloto de los profesionales jurídicos</p>
          
          <div className="inline-flex bg-[#f8fafb] border border-slate-200 p-1 rounded-full mb-12">
            <button className="px-6 py-2 rounded-full bg-white shadow-sm text-sm font-semibold text-slate-800">Mensual</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1">
              Anual <span className="text-[#1a7484] hidden sm:inline">(Ahorra 21% en un pago único)</span>
            </button>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Pro Plan */}
            <div className="border border-slate-200 rounded-3xl p-8 hover:border-[#6ad2de] transition-colors bg-[#fdfdfd] relative flex flex-col">
              <h3 className="text-2xl font-serif text-slate-900 mb-2">LexHonduras Pro</h3>
              <p className="text-sm text-slate-500 mb-6 min-h-[40px]">Ideal para abogados y profesionales autónomos</p>
              
              <div className="flex items-center justify-between mb-6 border border-slate-200 rounded-full px-4 py-2 bg-white">
                <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                  <Users className="w-4 h-4" /> Usuarios
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-slate-400 hover:text-slate-700 font-bold text-lg leading-none">-</button>
                  <span className="font-bold text-slate-800">1</span>
                  <button className="text-white bg-[#1a7484] rounded-full w-5 h-5 flex items-center justify-center font-bold text-sm leading-none">+</button>
                </div>
              </div>
              
              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">99€</span>
                <span className="text-slate-500 font-medium">/mes</span>
              </div>
              <p className="text-[10px] text-slate-400 mb-8 uppercase tracking-widest font-bold">IVA no incluido</p>
              
              <button 
                onClick={handleStartOnboarding}
                className="w-full bg-[#1a7484] text-white py-3 rounded-full font-medium hover:bg-[#145d6a] transition-colors mb-8 shadow-md"
              >
                Accede gratis
              </button>
              
              <div className="space-y-4 text-sm text-slate-600 flex-1">
                <p className="font-bold text-slate-800 mb-2">Incluye:</p>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> De 1 a 5 usuarios</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> Interacción ilimitada con el copiloto</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> Subida de documentos en los chats (PDF, DOCX, etc.)</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> Acceso a Base de Conocimiento General de LexHonduras</div>
              </div>
            </div>

            {/* Max Plan */}
            <div className="border-2 border-[#1a7484] rounded-3xl p-8 bg-white relative shadow-xl shadow-[#1a7484]/10 flex flex-col">
              <h3 className="text-2xl font-serif text-slate-900 mb-2">LexHonduras Max</h3>
              <p className="text-sm text-slate-500 mb-6 min-h-[40px]">Máxima potencia con Expedientes inteligentes incluidos</p>
              
              <div className="flex items-center justify-between mb-6 border border-slate-200 rounded-full px-4 py-2 bg-white">
                <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                  <Users className="w-4 h-4" /> Usuarios
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-slate-400 hover:text-slate-700 font-bold text-lg leading-none">-</button>
                  <span className="font-bold text-slate-800">1</span>
                  <button className="text-white bg-[#1a7484] rounded-full w-5 h-5 flex items-center justify-center font-bold text-sm leading-none">+</button>
                </div>
              </div>
              
              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">119€</span>
                <span className="text-slate-500 font-medium">/mes</span>
              </div>
              <p className="text-[10px] text-slate-400 mb-8 uppercase tracking-widest font-bold">IVA no incluido</p>
              
              <button 
                onClick={handleStartOnboarding}
                className="w-full bg-[#1a7484] text-white py-3 rounded-full font-medium hover:bg-[#145d6a] transition-colors mb-8 shadow-md"
              >
                Contratar
              </button>
              
              <div className="space-y-4 text-sm text-slate-600 flex-1">
                <p className="font-bold text-slate-800 mb-2">Incluye:</p>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> De 1 a 5 usuarios</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> Todo lo del plan Pro</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> Biblioteca de cliente: Sube tus propias plantillas y jurisprudencia</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> Expedientes inteligentes: Instrucciones personalizadas y documentos</div>
              </div>
            </div>
            
            {/* Biz Plan */}
            <div className="border border-slate-200 rounded-3xl p-8 hover:border-[#6ad2de] transition-colors bg-[#f8fafb] flex flex-col">
              <h3 className="text-2xl font-serif text-slate-900 mb-2">LexHonduras Biz</h3>
              <p className="text-sm text-slate-500 mb-6 min-h-[40px]">Todo lo del plan MAX y todos los servicios premium</p>
              
              <div className="flex items-center gap-2 mb-6 text-sm text-[#1a7484] font-semibold py-2.5">
                <Users className="w-4 h-4" /> A partir de 6 usuarios
              </div>
              
              <div className="mb-2 mt-1">
                <span className="text-[28px] font-bold text-slate-900 leading-none">Consultar precio</span>
              </div>
              <p className="text-[10px] text-transparent mb-8 uppercase tracking-widest font-bold">Spacer</p>
              
              <button className="w-full bg-white border border-[#1a7484] text-[#1a7484] py-3 rounded-full font-medium hover:bg-slate-50 transition-colors mb-8">
                Solicitar demostración
              </button>
              
              <div className="space-y-4 text-sm text-slate-600 flex-1">
                <p className="font-bold text-slate-800 mb-2">Incluye:</p>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> Todo lo del plan MAX</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> Demo personalizada y Periodo de Prueba Gratuito</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> Onboarding personalizado con Diploma y Formación en Legal Prompting</div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a7484] shrink-0 mt-0.5" /> Gestor de cuenta dedicado y Soporte prioritario</div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}
      </div>
    );
  }

  // Subpage Template
  if (view !== 'home') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans relative">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-40">
          <div className="w-16 h-16 bg-[#f2f6f7] rounded-full flex items-center justify-center mb-6">
             <Brain className="w-8 h-8 text-[#1a7484]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 capitalize">{view.replace('-', ' ')}</h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl">
            Has navegado a una sección secundaria. LexHonduras está integrando esta funcionalidad próximamente. Mientras tanto, puedes explorar la demostración de la plataforma principal.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => setView('home')} 
              className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-full font-medium hover:bg-slate-50 transition-colors"
            >
              Volver al Inicio
            </button>
            <button 
              onClick={handleStartOnboarding}
              className="bg-[#1a7484] text-white px-8 py-3 rounded-full font-medium hover:bg-[#145d6a] transition-colors shadow-lg shadow-[#1a7484]/20"
            >
              Ir al Workspace
            </button>
          </div>
        </div>
        <Footer />
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}
      </div>
    );
  }

  // MAIN HOME PAGE (Maite.ai Clone)
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-[#1a7484]/20 relative">
      <Navigation />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="pt-20 pb-16 px-6 text-center max-w-6xl mx-auto flex flex-col items-center">
          <h1 className="text-[44px] md:text-[64px] font-serif font-medium text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Tu sistema experto legal <span className="text-[#1a7484]">impulsado por IA</span>
          </h1>
          <p className="text-[19px] text-slate-600 mb-10 max-w-3xl leading-relaxed">
            Reduce el tiempo y aumenta la precisión legal. Creado para abogados y profesionales legales en Honduras.
          </p>
          <button 
            onClick={handleStartOnboarding}
            className="bg-[#1a7484] text-white px-8 py-3.5 text-base font-medium rounded-full hover:bg-[#145d6a] transition-all shadow-lg shadow-[#1a7484]/20 mb-16"
          >
            Accede gratis
          </button>

          {/* Hero Image Block */}
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000" 
              alt="Abogada usando LexHonduras" 
              className="w-full h-[300px] md:h-[500px] object-cover object-top"
            />
            {/* Floating Chat UI element mimicking the screenshot */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-12 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 w-[90%] md:w-[350px] flex items-start gap-3">
              <div className="w-10 h-10 bg-[#e8f1f2] rounded-full flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-[#1a7484]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">LexHonduras</p>
                <p className="text-sm text-slate-600">Hola. He analizado el caso y completado la subsunción. La demanda por despido injustificado está lista para descargar en .docx.</p>
              </div>
            </div>
          </div>
        </section>

        {/* LOGOS SECTION */}
        <section className="py-12 border-y border-gray-100 bg-[#fafcfc]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm text-slate-500 font-medium mb-8">Despachos, empresas y entidades que confían en nosotros</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
              {/* Fake Logos for layout similarity */}
              <div className="flex items-center gap-2 font-serif text-xl font-bold"><Building2 className="w-6 h-6"/> LexCorp</div>
              <div className="flex items-center gap-2 font-serif text-xl font-bold"><Scale className="w-6 h-6"/> Central Law</div>
              <div className="flex items-center gap-2 font-serif text-xl font-bold"><Landmark className="w-6 h-6"/> CAH</div>
              <div className="flex items-center gap-2 font-serif text-xl font-bold"><BriefcaseIcon /> Arias</div>
              <div className="flex items-center gap-2 font-serif text-xl font-bold"><Users className="w-6 h-6"/> Aguilar & Asoc</div>
            </div>
          </div>
        </section>

        {/* LO QUE HACE ESPECIAL (The Differentiator Grid) */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <h2 className="text-4xl font-serif text-slate-900 md:w-1/3 leading-tight">
              Lo que hace <span className="text-[#1a7484]">especial</span> a LexHonduras
            </h2>
            <p className="text-lg text-slate-600 md:w-2/3 md:pt-2 leading-relaxed">
              Fiabilidad, seguridad y confianza son los pilares en los que se sustenta nuestro sistema experto. A diferencia de un chatbot tradicional (RAG), nuestra arquitectura está diseñada para resolver casos reales.
            </p>
          </div>

          {/* Grid Layout matching the screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Card 1: Context Caching */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
               <h3 className="text-2xl font-serif text-slate-900 mb-6">Context Caching Completo</h3>
               <div className="w-32 h-32 bg-[#e8f1f2] rounded-full flex items-center justify-center mb-6 relative">
                 <div className="absolute inset-2 border-2 border-dashed border-[#1a7484] rounded-full"></div>
                 <div className="text-center">
                   <p className="text-3xl font-bold text-[#1a7484] leading-none">1M+</p>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Tokens</p>
                 </div>
               </div>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Cargamos el Código Procesal y jurisprudencia íntegra en memoria. Eliminamos la pérdida de contexto de las búsquedas vectoriales.
               </p>
            </div>

            {/* Card 2: Subsunción */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
               <h3 className="text-2xl font-serif text-slate-900 mb-4">Subsunción Forense</h3>
               <p className="text-sm text-slate-600 leading-relaxed mb-6">
                 No respondemos como un chatbot genérico. Aplicamos el silogismo que exige un litigante.
               </p>
               <div className="mt-auto bg-[#f8fafb] rounded-2xl p-5 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#1a7484] text-white flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-sm font-medium text-slate-700">Hechos</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#1a7484] text-white flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-sm font-medium text-slate-700">Premisa Mayor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1a7484] text-white flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-sm font-medium text-slate-700">Petitorio Final</span>
                  </div>
               </div>
            </div>

            {/* Card 3: Juez Legal */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden relative">
               <h3 className="text-2xl font-serif text-slate-900 mb-4">Juez Legal Autocorrector</h3>
               <p className="text-sm text-slate-600 leading-relaxed mb-6 relative z-10">
                 Un agente autónomo audita la respuesta borrador. Si detecta un error en la norma, auto-corrige el documento al instante antes de entregarlo.
               </p>
               {/* UI Mockup Snippet */}
               <div className="mt-auto bg-slate-50 p-4 rounded-xl border border-slate-200 relative z-10 shadow-sm">
                 <div className="flex gap-2 items-center mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-bold text-slate-700">Auditoría Aprobada</span>
                 </div>
                 <p className="text-xs text-slate-500 italic">"Cita del Artículo 452 verificada contra publicaciones de La Gaceta."</p>
               </div>
               {/* Decorative background circle */}
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#f0f5f6] rounded-full -z-0"></div>
            </div>
          </div>

          {/* Bottom 2 Wide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f0f5f6] border border-slate-200 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                 <Calculator className="w-6 h-6 text-[#1a7484]" />
               </div>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Módulo Financiero</p>
               <h3 className="text-3xl font-serif text-slate-900 mb-4">Liquidador con datos reales</h3>
               <p className="text-base text-slate-600 leading-relaxed">
                 Ejecuta el Liquidador Laboral integrando las tasas de cambio del BCH en tiempo real y las fórmulas exactas de la Secretaría de Trabajo (STSS).
               </p>
            </div>
            
            <div className="bg-[#f0f5f6] border border-slate-200 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                 <Download className="w-6 h-6 text-[#1a7484]" />
               </div>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Copiloto de Ejecución</p>
               <h3 className="text-3xl font-serif text-slate-900 mb-4">Generación de Escritos (.docx)</h3>
               <p className="text-base text-slate-600 leading-relaxed">
                 No solo mostramos texto en pantalla. Descarga directamente archivos Word (.docx) formateados con arancel, suma, comparecencia y petitorio según la práctica forense hondureña.
               </p>
            </div>
          </div>
        </section>

        {/* COMO TE AYUDA (Alternating Sections) */}
        <section className="py-24 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
                ¿Cómo te ayuda <span className="text-[#1a7484]">LexHonduras</span>?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Nuestra IA legal te ayudará en todas las tareas de tu día a día. Gracias a nuestro copiloto tendrás toda la potencia de la tecnología y la doctrina procesal para tu práctica.
              </p>
            </div>

            {/* Alternating Block 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-slate-900 mb-6">Analiza, consulta y resuelve dudas</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Los abogados enfrentan el reto de buscar información precisa rápidamente en grandes bases de datos. LexHonduras realiza búsquedas exhaustivas mediante Context Caching masivo, analiza tus documentos procesales, identifica riesgos y sugiere el petitorio exacto.
                </p>
                <button onClick={handleStartOnboarding} className="bg-[#1a7484] text-white px-6 py-3 rounded-full font-medium hover:bg-[#145d6a] transition-colors">
                  Accede gratis
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-[#1a7484] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  {/* Mockup Window */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden relative z-10 aspect-[4/3] flex flex-col">
                    <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-500" />
                      <span className="text-xs font-medium text-slate-700">Demanda_Laboral_Borrador.docx</span>
                    </div>
                    <div className="flex-1 p-6 bg-slate-50 flex flex-col">
                      <div className="flex-1"></div>
                      <div className="bg-white border border-slate-200 rounded-full p-2 flex items-center shadow-sm">
                        <input type="text" placeholder="Pedir algo a LexHonduras..." className="flex-1 bg-transparent border-none outline-none px-4 text-sm" disabled />
                        <div className="w-8 h-8 bg-[#1a7484] rounded-full flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternating Block 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-slate-900 mb-6">Genera información legal fiable</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Redactar documentos legales complejos consume tiempo y requiere precisión absoluta. Nuestro Juez Legal multi-agente audita cada escrito para crear borradores eficaces, legalmente correctos (con formato .docx) y listos para los tribunales.
                </p>
                <button onClick={handleStartOnboarding} className="bg-[#1a7484] text-white px-6 py-3 rounded-full font-medium hover:bg-[#145d6a] transition-colors">
                  Accede gratis
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-[#e8ecec] rounded-3xl p-8 shadow-inner border border-slate-200">
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-8 h-8 bg-[#1a7484] rounded-full flex items-center justify-center shrink-0">
                        <Scale className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100">
                        <p className="text-sm text-slate-700 leading-relaxed mb-3">
                          Aquí tienes la <strong>Demanda por Despido Injustificado</strong>. He aplicado las tasas del BCH del día de hoy y estructurado la comparecencia.
                        </p>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm w-fit">
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                             <Download className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">Escrito_Demanda.docx</p>
                            <p className="text-xs text-slate-500">24 KB • Listo para imprimir</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* HAZ MUCHO MAS (Teal Strip with Scrolling Prompts) */}
        <section className="py-24 bg-[#235b66] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Haz mucho más de lo que habías imaginado
            </h2>
            <p className="text-lg text-white/80">
              Todas tus tareas y trabajos impulsados por la IA de LexHonduras.
            </p>
          </div>

          {/* Horizontal scrollable cards area */}
          <div className="flex gap-6 overflow-x-auto pb-8 px-6 max-w-[1400px] mx-auto snap-x hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            <div className="shrink-0 w-[300px] bg-white text-slate-800 p-6 rounded-2xl shadow-lg snap-center border-t-4 border-[#1a7484]">
              <p className="text-sm leading-relaxed">
                Liquida las <span className="font-bold">prestaciones laborales</span> de un empleado despedido ayer, usando el tipo de cambio del BCH.
              </p>
            </div>
            <div className="shrink-0 w-[300px] bg-white text-slate-800 p-6 rounded-2xl shadow-lg snap-center border-t-4 border-[#1a7484]">
              <p className="text-sm leading-relaxed">
                Redacta una <span className="font-bold">demanda de reclamación de cantidad</span> por impago de factura mercantil.
              </p>
            </div>
            <div className="shrink-0 w-[300px] bg-white text-slate-800 p-6 rounded-2xl shadow-lg snap-center border-t-4 border-[#1a7484]">
              <p className="text-sm leading-relaxed">
                Analiza este contrato e <span className="font-bold">identifica cláusulas de riesgo</span> o abusivas según el Código Civil.
              </p>
            </div>
            <div className="shrink-0 w-[300px] bg-white text-slate-800 p-6 rounded-2xl shadow-lg snap-center border-t-4 border-[#1a7484]">
              <p className="text-sm leading-relaxed">
                Resume esta sentencia de la <span className="font-bold">Corte Suprema</span> en 5 puntos clave para aplicar a mi caso en casación.
              </p>
            </div>
            <div className="shrink-0 w-[300px] bg-white text-slate-800 p-6 rounded-2xl shadow-lg snap-center border-t-4 border-[#1a7484]">
              <p className="text-sm leading-relaxed">
                Crea un <span className="font-bold">contrato de arrendamiento</span> para un local comercial en Tegucigalpa.
              </p>
            </div>
          </div>
        </section>

        {/* TARGET AUDIENCES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                  Diferentes profesionales,<br/>una sola herramienta.
                </h2>
              </div>
              <div className="flex-1 md:pb-2">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Ya seas autónomo, un gran despacho, una gestoría o un departamento jurídico, LexHonduras se adapta a ti. Analizamos documentos y redactamos con precisión permitiéndote enfocarte en la estrategia que aporta más valor.
                </p>
                <button onClick={handleStartOnboarding} className="bg-[#1a7484] text-white px-6 py-3 rounded-full font-medium hover:bg-[#145d6a] transition-colors inline-block">
                  Accede gratis
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Audience Cards */}
              <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setView('soluciones')}>
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600" alt="Despachos de abogados" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 right-6 text-white text-xl font-medium leading-tight">Despachos de abogados</h3>
              </div>
              <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setView('soluciones')}>
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Departamentos jurídicos" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 right-6 text-white text-xl font-medium leading-tight">Departamentos jurídicos</h3>
              </div>
              <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setView('soluciones')}>
                <img src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&q=80&w=600" alt="Asesorías" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 right-6 text-white text-xl font-medium leading-tight">Asesorías y Gestorías</h3>
              </div>
              <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setView('soluciones')}>
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" alt="Administraciones" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 right-6 text-white text-xl font-medium leading-tight">Administraciones públicas</h3>
              </div>
            </div>
          </div>
        </section>

        {/* SEGURIDAD Y PRIVACIDAD */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 max-w-3xl">
              <p className="text-sm font-medium text-[#1a7484] mb-4 uppercase tracking-widest">Tu confianza es nuestra prioridad</p>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
                Seguridad y privacidad
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                En LexHonduras, entendemos que la seguridad y el secreto profesional exigido por el CAH es una prioridad fundamental. Nuestro copiloto legal está diseñado con la máxima atención a la protección de datos y expedientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#f2f6f7] rounded-3xl p-8 border border-[#e1ecef]">
                <Shield className="w-8 h-8 text-[#1a7484] mb-6" />
                <h4 className="text-lg font-medium text-slate-900 mb-2">No usamos los datos de los usuarios</h4>
                <p className="text-sm text-slate-600">Ni para entrenar modelos de IA ni para alimentar a la base general.</p>
              </div>
              <div className="bg-[#f2f6f7] rounded-3xl p-8 border border-[#e1ecef]">
                <FileLock2 className="w-8 h-8 text-[#1a7484] mb-6" />
                <h4 className="text-lg font-medium text-slate-900 mb-2">Anonimización</h4>
                <p className="text-sm text-slate-600">Garantizamos la privacidad de los expedientes de sus clientes.</p>
              </div>
              <div className="bg-[#f2f6f7] rounded-3xl p-8 border border-[#e1ecef]">
                <Lock className="w-8 h-8 text-[#1a7484] mb-6" />
                <h4 className="text-lg font-medium text-slate-900 mb-2">Confidencialidad absoluta</h4>
                <p className="text-sm text-slate-600">No se comparten los datos, asegurando el secreto profesional forense.</p>
              </div>
            </div>

            <div className="bg-[#f2f6f7] rounded-3xl p-8 border border-[#e1ecef] flex flex-col md:flex-row items-center justify-between gap-8">
               <div>
                 <h4 className="text-lg font-medium text-slate-900 mb-2">Cifrado y Seguridad de Acceso</h4>
                 <p className="text-sm text-slate-600">Cumplimos con los más estrictos estándares de cifrado de extremo a extremo.</p>
               </div>
               <div className="flex gap-4">
                 <div className="w-16 h-16 bg-white rounded-xl border border-[#e1ecef] flex flex-col items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm">
                   <Lock className="w-6 h-6 text-[#1a7484] mb-1" /> TLS 1.2
                 </div>
                 <div className="w-16 h-16 bg-white rounded-xl border border-[#e1ecef] flex flex-col items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm text-center px-1">
                   <Shield className="w-6 h-6 text-[#1a7484] mb-1" /> AES-256
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-[#eef4f5] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
              <div className="flex-1 relative z-10">
                <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-widest">Empieza hoy mismo</p>
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                  Prueba LexHonduras <span className="text-[#1a7484]">gratis</span> y sin compromiso
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-md">
                  Accede ahora y descubre cómo nuestra arquitectura puede ayudarte a trabajar más rápido y con mayor seguridad procesal en tus casos.
                </p>
                <button onClick={handleStartOnboarding} className="bg-[#1a7484] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#145d6a] transition-all shadow-lg shadow-[#1a7484]/20">
                  Accede gratis
                </button>
              </div>
              <div className="flex-1 relative w-full h-[300px] md:h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Abogado profesional"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute top-1/2 -translate-y-1/2 -left-8 md:-left-16 bg-white p-4 rounded-2xl shadow-xl w-[280px]">
                  <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-3">
                    <div className="w-8 h-8 bg-[#1a7484] rounded-full flex items-center justify-center shrink-0">
                      <Scale className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs text-slate-600">Hola José. ¿En qué puedo ayudarte hoy?</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p className="text-xs text-slate-500">
                      Genera una contestación de demanda de familia en base al expediente adjunto...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      
      {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}
    </div>
  );
}

// Onboarding Modal Flow
function OnboardingModal({ step, setStep, onClose, onComplete, termsAccepted, setTermsAccepted }: any) {
  
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  
  const toggleArea = (area: string) => {
    if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter(a => a !== area));
    } else {
      setSelectedAreas([...selectedAreas, area]);
    }
  };

  const ProgressDots = ({ current, total }: { current: number, total: number }) => (
    <div className="flex justify-center items-center gap-4 mb-8 relative">
      {/* Connector Line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[1px] bg-slate-200 -z-10"></div>
      
      {Array.from({ length: total }).map((_, i) => (
        <div 
          key={i} 
          className={`w-6 h-6 rounded-full flex items-center justify-center bg-white border-2 transition-colors z-10
            ${i < current ? 'border-[#5bc7d6] bg-[#5bc7d6]' : 
              i === current ? 'border-[#5bc7d6]' : 'border-slate-300'}
          `}
        >
          {i < current && <Check className="w-3 h-3 text-white" />}
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br from-[#9ce3ec] to-[#60c4d5]">
      <div className="min-h-full w-full flex items-center justify-center py-8 px-4">
      
      {step === 0 && (
        <div className="bg-white w-full max-w-[500px] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-10 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#1a7484] rounded-full flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="text-3xl font-serif text-slate-800 tracking-tight">lexhonduras</span>
            </div>
            
            <h2 className="text-[22px] font-bold text-slate-800 leading-tight mb-2">
              Por favor, acepta nuestros<br/>términos y políticas para continuar
            </h2>
            <p className="text-sm text-slate-500 mb-8">
              Al continuar, aceptas las condiciones mencionadas.
            </p>
            
            <div className="w-full flex items-start gap-3 mb-8 text-left">
              <div className="mt-1">
                 <input 
                   type="checkbox" 
                   id="terms" 
                   checked={termsAccepted}
                   onChange={(e) => setTermsAccepted(e.target.checked)}
                   className="w-4 h-4 rounded border-gray-300 text-[#3a4149] focus:ring-[#3a4149] cursor-pointer"
                 />
              </div>
              <label htmlFor="terms" className="text-sm text-slate-700 cursor-pointer">
                He leído y acepto los Términos de Servicio y la Política de Privacidad
              </label>
            </div>
            
            <button 
              onClick={() => setStep(1)}
              disabled={!termsAccepted}
              className={`w-full py-3.5 rounded-lg font-medium text-white transition-colors flex items-center justify-center gap-2
                ${termsAccepted ? 'bg-[#374151] hover:bg-slate-800' : 'bg-slate-300 cursor-not-allowed'}
              `}
            >
              Continuar <span className="text-xs">▶</span>
            </button>
          </div>
          
          <div className="bg-[#f9fafb] border-t border-slate-100 flex flex-col">
            <div className="py-4 border-b border-slate-100 text-center">
              <p className="text-sm text-slate-500">¿Tiene una cuenta? <button className="font-medium text-slate-700 hover:underline" onClick={onComplete}>Entrar</button></p>
            </div>
            <div className="py-4 text-center flex justify-center gap-4 text-sm text-slate-500">
              <button className="hover:text-slate-700">Privacidad</button>
              <button className="hover:text-slate-700">Términos</button>
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="flex flex-col items-center">
          <ProgressDots current={0} total={5} />
          <p className="text-xs text-slate-500 mb-4">Paso 1: Sobre ti</p>
          
          <div className="bg-white w-full max-w-[600px] rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h2 className="text-2xl font-serif text-slate-900 text-center mb-8">
              ¿En qué áreas del derecho ejerces?
            </h2>
            
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-6">
              {['Civil y familia', 'Penal y económico', 'Administrativo y público', 'Extranjería e inmigración', 'Mercantil y empresa', 'Fiscal y tributario', 'Digital, IP y datos', 'Derecho procesal', 'Laboral', 'Inmobiliario y urbanismo', 'Bancario y seguros', 'Otro'].map(area => (
                <div key={area} className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id={`area-${area}`}
                    checked={selectedAreas.includes(area)}
                    onChange={() => toggleArea(area)}
                    className="w-4 h-4 rounded border-gray-300 text-[#5bc7d6] focus:ring-[#5bc7d6] cursor-pointer"
                  />
                  <label htmlFor={`area-${area}`} className="text-sm text-slate-700 cursor-pointer">{area}</label>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={() => setStep(2)}
                className="bg-[#6cd0dd] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#5bc7d6] transition-colors"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col items-center">
          <ProgressDots current={1} total={5} />
          <p className="text-xs text-slate-500 mb-4">Paso 2: Uso principal</p>
          
          <div className="bg-white w-full max-w-[600px] rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h2 className="text-2xl font-serif text-slate-900 text-center mb-2">
              ¿Cuál será el uso principal que le darás a LexHonduras?
            </h2>
            <p className="text-center text-sm text-slate-500 mb-8">
              Selecciona las opciones para personalizar tu visita guiada:
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
               {[
                 { title: 'Investigación jurídica', desc: 'Búsqueda de jurisprudencia, leyes y doctrina', icon: '🔍' },
                 { title: 'Redacción de escritos', desc: 'Generación de demandas, contratos y correos', icon: '✍️' },
                 { title: 'Revisión de documentos', desc: 'Auditoría de contratos, detección de riesgos y cláusulas', icon: '🛡️' },
                 { title: 'Análisis de expedientes', desc: 'Síntesis de hechos, cronologías y extracción de datos', icon: '🗂️' },
                 { title: 'Estrategia y "brainstorming"', desc: 'Preparación de juicios y búsqueda de argumentos', icon: '💡' }
               ].map((item, idx) => {
                 const isSelected = selectedAreas.includes(item.title);
                 return (
                 <button 
                   key={idx} 
                   onClick={() => toggleArea(item.title)}
                   className={`border rounded-xl p-3 text-center transition-all outline-none ${isSelected ? 'border-[#1a7484] bg-[#e8f1f2]/50 ring-1 ring-[#1a7484]' : 'border-slate-200 hover:border-[#5bc7d6] hover:shadow-sm'}`}
                 >
                   <div className="text-2xl mb-2">{item.icon}</div>
                   <h4 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h4>
                   <p className="text-[11px] text-slate-500 leading-tight">{item.desc}</p>
                 </button>
               )})}
            </div>
            
            <div className="flex justify-between items-center">
              <button onClick={() => setStep(1)} className="text-slate-600 font-medium text-sm hover:text-slate-900">Atrás</button>
              <button 
                onClick={onComplete}
                className="bg-[#1a7484] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#145d6a] transition-colors"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col items-center">
          <ProgressDots current={2} total={5} />
          <p className="text-xs text-slate-500 mb-4">Paso 3: Entorno</p>
          
          <div className="bg-white w-full max-w-[500px] rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h2 className="text-2xl font-serif text-slate-900 text-center mb-8">
              Entorno de trabajo
            </h2>
            
            <div className="flex flex-col gap-2 mb-6">
               {[
                 'Autónomo o profesional independiente',
                 'Despacho de abogados o Firma legal',
                 'Departamento legal de empresa (in-house)',
                 'Asesoría / Gestoría',
                 'Sector público y administración',
                 'Estudiante u Opositor'
               ].map((env, idx) => (
                 <button 
                  key={idx} 
                  onClick={onComplete} // Auto-advance on selection
                  className="w-full text-left border border-slate-200 rounded-lg p-3 text-sm text-slate-700 hover:border-[#5bc7d6] hover:bg-[#f8fcfd] hover:text-slate-900 transition-colors"
                 >
                   {env}
                 </button>
               ))}
            </div>
            
            <div className="flex justify-start">
              <button onClick={() => setStep(2)} className="text-slate-600 font-medium text-sm hover:text-slate-900">Atrás</button>
            </div>
          </div>
        </div>
      )}

      </div>
    </div>
  );
}

// Minimal icon stub for missing Lucide icons to prevent errors if not imported above
function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

