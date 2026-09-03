import { PanelLeftClose, Edit, History, Archive, BookOpen, ChevronDown, Star, Zap, MoreHorizontal, Plus, FileText, Scale, Mic, ArrowUp, Brain, Info, Lock, CloudUpload, Search, Edit3, X, FolderPlus } from "lucide-react";
import { useState } from "react";

interface WorkspaceProps {
  onExitWorkspace: () => void;
}

export function Workspace({ onExitWorkspace }: WorkspaceProps) {

  const [activeView, setActiveView] = useState<'chat' | 'history' | 'dossiers' | 'library'>('chat');
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);

  const renderChat = () => (
    <>
      <header className="h-16 px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-medium text-slate-800">Nuevo chat</h1>
          <button className="text-slate-300 hover:text-amber-400 transition-colors">
            <Star className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center gap-4 relative">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <Zap className="w-4 h-4" />
            Contratar un plan
          </button>
          <button onClick={() => setHeaderMenuOpen(!headerMenuOpen)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>

          {headerMenuOpen && (
            <div className="absolute top-12 right-0 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3">
                <Star className="w-4 h-4" /> Marcar como favorito
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3">
                <Edit3 className="w-4 h-4" /> Cambiar nombre
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3">
                <Archive className="w-4 h-4" /> Mover a...
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3">
                <CloudUpload className="w-4 h-4 rotate-180" /> Descargar
              </button>
              <div className="h-px bg-slate-100 my-1"></div>
              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3">
                <Archive className="w-4 h-4" /> Eliminar conversación
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
        <div className="w-32 h-32 mb-12 relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[1.5px] border-[#1a7484]/40 scale-75"></div>
          <div className="absolute inset-0 rounded-full border-[1.5px] border-[#1a7484]/30 scale-90 translate-y-1"></div>
          <div className="absolute inset-0 rounded-full border-[1.5px] border-[#1a7484]/20 scale-100 translate-y-2 translate-x-1"></div>
          <div className="absolute inset-0 rounded-full border-[1.5px] border-[#1a7484]/10 scale-110 translate-y-3 -translate-x-1"></div>
          <div className="absolute inset-0 rounded-full border-[1.5px] border-[#1a7484]/5 scale-125 translate-y-4"></div>
          <Brain className="w-16 h-16 text-[#1a7484] relative z-10" strokeWidth={1} />
        </div>

        <div className="w-full max-w-3xl">
          <div className="bg-white border border-slate-300 shadow-md rounded-2xl p-3 flex flex-col focus-within:border-[#1a7484] focus-within:ring-1 focus-within:ring-[#1a7484] transition-all">
            <textarea 
              placeholder="Pedir algo a LexHonduras..."
              className="w-full resize-none min-h-[60px] p-2 text-[15px] text-slate-800 placeholder:text-slate-400 focus:outline-none bg-transparent"
              rows={1}
            />
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-transparent">
              <div className="flex items-center gap-1 text-slate-500">
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative">
                  <FileText className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-slate-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white">0</span>
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <Scale className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-400 hover:text-slate-700 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <button className="w-9 h-9 bg-[#6ad2de] hover:bg-[#5bc7d6] text-white rounded-xl flex items-center justify-center transition-colors">
                  <ArrowUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">
            LexHonduras genera contenido por IA, revísalo antes de usarlo.
          </p>
        </div>
      </div>
    </>
  );

  const renderHistory = () => (
    <div className="flex-1 flex flex-col h-full p-8 overflow-y-auto">
      <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-serif text-slate-900 flex items-center gap-3">
          <History className="w-6 h-6" /> Historial
        </h2>
        <button onClick={() => setActiveView('chat')} className="bg-[#1a7484] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#145d6a] transition-colors flex items-center gap-2">
          <Edit className="w-4 h-4" /> Nueva conversación
        </button>
      </div>
      
      <div className="max-w-4xl mx-auto w-full">
        <div className="relative mb-10">
          <input 
            type="text" 
            placeholder="Buscar en tus conversaciones" 
            className="w-full border border-slate-200 rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:border-[#1a7484]"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        <div>
          <p className="text-xs font-bold text-slate-400 mb-4">Hoy</p>
          <div className="border-t border-slate-100">
            {[
              { title: 'Nuevo chat', time: 'hace unos segundos' },
              { title: 'Nuevo chat', time: 'hace 26 minutos' },
              { title: 'Nuevo chat', time: 'hace 28 minutos' },
              { title: 'Nueva conversación', time: 'hace 29 minutos' }
            ].map((chat, i) => (
              <div key={i} className="py-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer -mx-4 px-4 transition-colors">
                <p className="font-serif font-bold text-slate-700 text-lg">{chat.title}</p>
                <p className="text-xs text-slate-400">Último mensaje {chat.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDossiers = () => (
    <div className="flex-1 flex flex-col h-full p-8 overflow-y-auto">
      <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-serif text-slate-900 flex items-center gap-3">
          <Archive className="w-6 h-6" /> Expedientes
        </h2>
        <button className="bg-[#1a7484] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#145d6a] transition-colors flex items-center gap-2">
          <FolderPlus className="w-4 h-4" /> Nuevo expediente
        </button>
      </div>
      
      <div className="max-w-4xl mx-auto w-full">
        <div className="relative mb-12">
          <input 
            type="text" 
            placeholder="Buscar en tus expedientes" 
            className="w-full border border-slate-200 rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:border-[#1a7484]"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Aún no hay expedientes en tu cuenta</h3>
          <p className="text-slate-600 mb-6 max-w-md">
            Los expedientes te ayudan a organizar tus conversaciones, documentos e instrucciones por caso legal.
          </p>
          <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors flex items-center gap-2 border border-slate-200">
            <FolderPlus className="w-4 h-4" /> Nuevo expediente
          </button>
        </div>
      </div>
    </div>
  );

  const renderLibrary = () => (
    <div className="flex-1 flex flex-col h-full p-8 overflow-y-auto">
      <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-serif text-slate-900 flex items-center gap-3">
          Biblioteca
        </h2>
        <button className="text-slate-600 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors border border-slate-200">
          <Plus className="w-5 h-5" />
        </button>
      </div>
      
      <div className="max-w-4xl mx-auto w-full space-y-6">
        
        <div className="bg-[#f8fafb] border border-slate-200 rounded-xl p-4 flex items-start gap-4 relative">
          <Info className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm text-slate-700 mb-1 pr-6">
              Todo lo que subes a tu Biblioteca en LexHonduras es anonimizado y encriptado. Garantizamos la privacidad de tu información siguiendo los protocolos del SOC2.
            </p>
            <button className="text-sm text-slate-800 flex items-center gap-1 hover:underline font-medium">
              <Lock className="w-3.5 h-3.5" /> Saber más sobre privacidad
            </button>
          </div>
          <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center justify-center bg-[#fafcfc]">
          <CloudUpload className="w-12 h-12 text-slate-800 mb-6" />
          <button className="bg-[#1a7484] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#145d6a] transition-colors">
            Subir documento
          </button>
        </div>

      </div>
    </div>
  );


  return (
    <div className="h-screen w-full flex font-sans bg-white text-slate-800 selection:bg-[#1a7484]/20">
      
      {/* Sidebar */}
      <aside className="w-[280px] flex-none border-r border-slate-200 bg-white flex flex-col shrink-0">
        {/* Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-transparent shrink-0">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onExitWorkspace}>
            <div className="w-7 h-7 bg-[#e8f1f2] rounded-full flex items-center justify-center shrink-0">
              <Scale className="w-4 h-4 text-[#1a7484]" />
            </div>
            <span className="text-xl font-serif tracking-tight text-slate-800">lexhonduras</span>
          </div>
          <button className="p-1.5 text-slate-400 hover:bg-slate-100 rounded-md transition-colors">
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>

        {/* Main Menu */}
        <div className="px-3 py-4 flex flex-col gap-1">
          <button onClick={() => setActiveView('chat')} className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors w-full text-left font-medium ${activeView === 'chat' ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-100'}`}>
            <Edit className="w-4 h-4 text-slate-500" />
            Nueva conversación
          </button>
          <button onClick={() => setActiveView('history')} className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors w-full text-left font-medium ${activeView === 'history' ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-100'}`}>
            <History className="w-4 h-4 text-slate-500" />
            Historial de conversaciones
          </button>
          <button onClick={() => setActiveView('dossiers')} className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors w-full text-left font-medium ${activeView === 'dossiers' ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-100'}`}>
            <Archive className="w-4 h-4 text-slate-500" />
            Expedientes
          </button>
          <button onClick={() => setActiveView('library')} className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors w-full text-left font-medium ${activeView === 'library' ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-100'}`}>
            <BookOpen className="w-4 h-4 text-slate-500" />
            Biblioteca
          </button>
        </div>

        {/* Scrollable Sections */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6 scrollbar-hide">
          {/* Expedientes Section */}
          <div>
            <div className="flex items-center gap-1 px-3 mb-2 text-xs font-semibold text-slate-500 hover:text-slate-700 cursor-pointer">
              Expedientes <ChevronDown className="w-3 h-3" />
            </div>
            <div className="px-3 py-1">
              <p className="text-sm text-slate-400">Aún no hay expedientes</p>
            </div>
          </div>

          {/* Conversaciones Section */}
          <div>
            <div className="flex items-center gap-1 px-3 mb-2 text-xs font-semibold text-slate-500 hover:text-slate-700 cursor-pointer">
              Tus conversaciones <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex flex-col gap-1">
              <button onClick={() => setActiveView('chat')} className={`flex items-center px-3 py-2 text-sm rounded-lg w-full text-left font-medium border ${activeView === 'chat' ? 'bg-slate-100 border-slate-200 text-slate-900' : 'bg-[#f8fafb] text-slate-800 border-slate-100 hover:bg-slate-50'}`}>
                Nuevo chat
              </button>
              <button onClick={() => setActiveView('chat')} className="flex items-center px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 rounded-lg w-full text-left font-medium border border-transparent">
                Nuevo chat
              </button>
              <button onClick={() => setActiveView('chat')} className="flex items-center px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 rounded-lg w-full text-left font-medium border border-transparent">
                Nuevo chat
              </button>
              <button onClick={() => setActiveView('chat')} className="flex items-center px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 rounded-lg w-full text-left font-medium border border-transparent">
                Nueva conversación
              </button>
            </div>
          </div>
        </div>

        {/* User Profile Footer */}
        <div className="p-3 border-t border-slate-200 mt-auto">
          <button className="w-full flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl transition-colors">
            <div className="flex items-center gap-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="User avatar" 
                className="w-9 h-9 rounded-full object-cover shrink-0"
              />
              <div className="flex flex-col items-start truncate">
                <span className="text-sm font-semibold text-slate-800 truncate w-full text-left">Carlos José Pineda</span>
                <span className="text-xs text-slate-500 truncate w-full text-left">jose.pineda79@g...</span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[9px] font-bold tracking-wider text-slate-500 uppercase border border-slate-200 px-1.5 py-0.5 rounded">FREE</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-white">
        {activeView === 'chat' && renderChat()}
        {activeView === 'history' && renderHistory()}
        {activeView === 'dossiers' && renderDossiers()}
        {activeView === 'library' && renderLibrary()}
      </main>
      
    </div>
  );
}

