
import React, { useState, useEffect } from 'react';
import { AuthState, User, Appointment, ThemeType } from './types';
import { THEMES } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesList from './components/ServicesList';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });
  const [view, setView] = useState<'home' | 'auth' | 'dashboard'>('home');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('LUXURY');

  useEffect(() => {
    const storedUser = localStorage.getItem('lumiere_user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setAuth({ user, isAuthenticated: true });
      setCurrentTheme(user.theme || 'LUXURY');
    }
    const storedAppts = localStorage.getItem('lumiere_appointments');
    if (storedAppts) setAppointments(JSON.parse(storedAppts));
  }, []);

  const themeStyles = THEMES[currentTheme];

  const handleLogin = (user: User) => {
    setAuth({ user, isAuthenticated: true });
    setCurrentTheme(user.theme);
    localStorage.setItem('lumiere_user', JSON.stringify(user));
    setView('dashboard');
  };

  const handleLogout = () => {
    setAuth({ user: null, isAuthenticated: false });
    localStorage.removeItem('lumiere_user');
    setView('home');
  };

  const toggleTheme = () => {
    const nextTheme: ThemeType = 
      currentTheme === 'LUXURY' ? 'LIGHT' : 
      currentTheme === 'LIGHT' ? 'CONTRAST' : 'LUXURY';
    
    setCurrentTheme(nextTheme);
    if (auth.user) {
      const updatedUser = { ...auth.user, theme: nextTheme };
      setAuth({ ...auth, user: updatedUser });
      localStorage.setItem('lumiere_user', JSON.stringify(updatedUser));
    }
  };

  const addAppointment = (appt: Appointment) => {
    const newAppts = [...appointments, appt];
    setAppointments(newAppts);
    localStorage.setItem('lumiere_appointments', JSON.stringify(newAppts));
  };

  const removeAppointment = (id: string) => {
    const newAppts = appointments.filter(a => a.id !== id);
    setAppointments(newAppts);
    localStorage.setItem('lumiere_appointments', JSON.stringify(newAppts));
  };

  const updateAppointment = (updatedAppt: Appointment) => {
    const newAppts = appointments.map(a => a.id === updatedAppt.id ? updatedAppt : a);
    setAppointments(newAppts);
    localStorage.setItem('lumiere_appointments', JSON.stringify(newAppts));
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${themeStyles.bg} ${themeStyles.text}`}>
      <Navbar 
        auth={auth} 
        themeStyles={themeStyles}
        currentTheme={currentTheme}
        onLogout={handleLogout} 
        onNavigate={setView} 
        onToggleTheme={toggleTheme}
        currentView={view}
      />
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero themeStyles={themeStyles} onBook={() => auth.isAuthenticated ? setView('dashboard') : setView('auth')} />
            <ServicesList themeStyles={themeStyles} />
          </>
        )}
        
        {view === 'auth' && (
          <AuthPage themeStyles={themeStyles} onLogin={handleLogin} />
        )}
        
        {view === 'dashboard' && auth.user && (
          <Dashboard 
            user={auth.user} 
            themeStyles={themeStyles}
            allAppointments={appointments}
            onAddAppointment={addAppointment}
            onRemoveAppointment={removeAppointment}
            onUpdateAppointment={updateAppointment}
          />
        )}
      </main>

      <AIAssistant />

      <footer className={`${themeStyles.bg} border-t ${themeStyles.border} py-12 px-4 text-center`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-2xl font-serif mb-4 ${themeStyles.accent}`}>Lumière Archi-Beauty</h2>
          <p className="opacity-60 mb-8">Onde tecnologia e sofisticação se encontram.</p>
          <div className="mt-12 opacity-40 text-xs">
            &copy; 2025 Lumière SaaS. Design de Elite.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
