import fs from 'fs';
let content = fs.readFileSync('src/components/Landing.tsx', 'utf-8');

const blocks = `
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
`;

const lines = content.split('\n');
const startIdx = lines.findIndex(line => line.includes("if (view === 'producto_que_es')"));
const endIdx = lines.findIndex(line => line.includes("if (view === 'precios')"));

if (startIdx !== -1 && endIdx !== -1) {
  // Replace the blocks from startIdx-1 to endIdx (exclusive of endIdx)
  lines.splice(startIdx - 1, endIdx - startIdx, blocks);
  fs.writeFileSync('src/components/Landing.tsx', lines.join('\n'));
} else {
  console.log("Could not find start/end indices.");
}
