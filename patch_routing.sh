#!/bin/bash
sed -i '/if (view === '"'"'producto_conocimiento'"'"') {/,/  }/!b;//!d;/  }/a\
  if (view === '"'"'soluciones'"'"') {\
    return (\
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">\
        <Navigation />\
        <Soluciones onStart={handleStartOnboarding} />\
        <Footer />\
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}\
      </div>\
    );\
  }\
\
  if (view === '"'"'recursos_faq'"'"') {\
    return (\
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">\
        <Navigation />\
        <Faq />\
        <Footer />\
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}\
      </div>\
    );\
  }\
\
  if (view === '"'"'recursos_casos'"'"') {\
    return (\
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">\
        <Navigation />\
        <CasosExito onStart={handleStartOnboarding} />\
        <Footer />\
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}\
      </div>\
    );\
  }\
\
  if (view === '"'"'recursos_blog'"'"') {\
    return (\
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">\
        <Navigation />\
        <Blog />\
        <Footer />\
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}\
      </div>\
    );\
  }\
' src/components/Landing.tsx
