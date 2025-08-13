import React, { useState, useContext } from 'react';
import Navbar from "./src/components/Navbar";
import Sidebar from "./src/components/Sidebar";
import Dashboard from "./src/components/Dashboard";
import LoginPage from "./src/components/LoginPage";
import ProfilePage from "./src/components/ProfilePage";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";
import TabContext from "./src/context/TabContext";

const AppContent = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState('dashboard'); // 'dashboard', 'login', 'profile'

  console.log('AppContent: isAuthenticated', isAuthenticated);
  console.log('AppContent: currentPage', currentPage);

    const handleLogin = () => {
    login();
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    logout();
    setCurrentPage('login');
  };

  const renderPage = () => {
    if (!isAuthenticated) {
      return <LoginPage onLogin={handleLogin} />;
    } else {
      switch (currentPage) {
        case 'dashboard':
          return (
            <div className="grid-cols-3 h-[25%] flex">
              <TabContext.Provider value={{ activeTab, setActiveTab }}>
                <Sidebar />
                <Dashboard />
              </TabContext.Provider>
            </div>
          );
        case 'profile':
          return <ProfilePage />;
        default:
          return <Dashboard />;
      }
    }
  };

  return (
    <TabContext.Provider value="">
      <div key={2}>
        <Navbar setCurrentPage={setCurrentPage} onLogout={handleLogout} />
        {renderPage()}
      </div>
    </TabContext.Provider>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
