// FEATURE: Main Application
// FILE: App.tsx
// PURPOSE: Main application component with routing and authentication
// LAST MODIFIED: January 28, 2025

import React from 'react';
import { AuthProvider } from './hooks/useAuth';
import LoginPage from './pages/auth/LoginPage';
import './styles/globals.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <LoginPage />
      </div>
    </AuthProvider>
  );
}

export default App;