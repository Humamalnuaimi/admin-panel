// FEATURE: Main Application
// FILE: App.tsx
// PURPOSE: Main application component with routing and authentication
// LAST MODIFIED: January 28, 2025

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import UsersPage from './pages/users/UsersPage';
import './styles/globals.css';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

// App Routes Component
const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route 
        path="/login" 
        element={user ? <Navigate to="/dashboard" replace /> : <LoginPage />} 
      />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/users" 
        element={
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/" 
        element={<Navigate to={user ? "/dashboard" : "/login"} replace />} 
      />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;