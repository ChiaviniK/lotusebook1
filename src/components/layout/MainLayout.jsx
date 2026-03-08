import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import styles from './MainLayout.module.css';
import { getText } from '../../utils/i18n';

const MainLayout = ({ 
  children, chapters, activeChapter, setActiveChapter, 
  unlockedSections, theme, setTheme, courses, activeCourseId, setActiveCourseId, userProfile, onLogout,
  language, setLanguage
}) => {
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
        courses={courses}
        activeCourseId={activeCourseId}
        setActiveCourseId={setActiveCourseId}
        userProfile={userProfile}
        onLogout={onLogout}
        language={language}
        setLanguage={setLanguage}
      />
      
      <main className={`${styles.main} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <header className={styles.mobileHeader}>
          <button onClick={toggleSidebar} className={styles.menuButton}>
            <Menu size={24} />
          </button>
          <span className={styles.mobileTitle}>{getText({ pt: 'E-book Ambiental', en: 'Environmental E-book' }, language)}</span>
        </header>
        
        <div className={styles.contentContainer}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
