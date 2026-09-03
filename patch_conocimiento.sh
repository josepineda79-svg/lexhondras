#!/bin/bash
sed -i '/if (view === '"'"'producto_expedientes'"'"') {/,/  }/!b;//!d;/  }/a\
  if (view === '"'"'producto_conocimiento'"'"') {\
    return (\
      <div className="min-h-screen bg-white flex flex-col font-sans relative selection:bg-[#1a7484]/20">\
        <Navigation />\
        <Conocimiento />\
        <Footer />\
        {showOnboarding && <OnboardingModal step={onboardingStep} setStep={setOnboardingStep} onClose={closeOnboarding} onComplete={completeOnboarding} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />}\
      </div>\
    );\
  }\
' src/components/Landing.tsx
