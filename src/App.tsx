/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Landing } from './components/Landing';
import { Workspace } from './components/Workspace';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'workspace'>('landing');

  return (
    <>
      {currentView === 'landing' ? (
        <Landing onEnterWorkspace={() => setCurrentView('workspace')} />
      ) : (
        <Workspace onExitWorkspace={() => setCurrentView('landing')} />
      )}
    </>
  );
}
