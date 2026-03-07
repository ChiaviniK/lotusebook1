import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import styles from './MainLayout.module.css';

const MainLayout = ({ chapters, activeChapter, setActiveChapter, unlockedSections, theme, setTheme, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.layout}>
      <Sidebar 
        chapters={chapters} 
        activeChapter={activeChapter} 
        setActiveChapter={setActiveChapter}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        unlockedSections={unlockedSections}
        theme={theme}
        setTheme={setTheme}
      />
      
      <main className={`${styles.main} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <header className={styles.mobileHeader}>
          <button onClick={toggleSidebar} className={styles.menuButton}>
            <Menu size={24} />
          </button>
          <span className={styles.mobileTitle}>E-book de Dados Ambientais</span>
        </header>
        
        <div className={styles.contentContainer}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
