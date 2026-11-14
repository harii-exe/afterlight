import React from 'react';
import { useRoute } from './router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MissionPage } from './pages/MissionPage';
import { MissionsDirectoryPage } from './pages/MissionsDirectoryPage';
import { ExplorePage } from './pages/ExplorePage';
import { DiscoveriesPage } from './pages/DiscoveriesPage';
import { AboutPage } from './pages/AboutPage';

export const App: React.FC = () => {
  const [route, navigate] = useRoute();

  return (
    <div className="afterlight-app">
      <Navbar currentRoute={route} onNavigate={navigate} />

      <main className="main-content-flow">
        {route.page === 'home' && <HomePage onNavigate={navigate} />}
        {route.page === 'missions' && <MissionsDirectoryPage onNavigate={navigate} />}
        {route.page === 'mission' && (
          <MissionPage missionId={route.mission} onNavigate={navigate} />
        )}
        {route.page === 'explore' && <ExplorePage onNavigate={navigate} />}
        {route.page === 'discoveries' && <DiscoveriesPage onNavigate={navigate} />}
        {route.page === 'about' && <AboutPage onNavigate={navigate} />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
