import { useState } from 'react';
import { BookOpen, ChevronRight, ChevronDown, Menu, Lock } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = ({ chapters, activeChapter, setActiveChapter, isOpen, toggleSidebar, unlockedSections = [1] }) => {
  const [expandedChapter, setExpandedChapter] = useState(1);

  const toggleAccordion = (chapterId) => {
    // If clicking an already expanded chapter, close it. Otherwise expand the new one.
    if (expandedChapter === chapterId) {
      setExpandedChapter(null);
    } else {
      setExpandedChapter(chapterId);
      // Automatically navigate to the main parent chapter ID when expanding
      setActiveChapter(chapterId); 
    }
  };

  const handleSubNavigate = (chapterId, subId) => {
    setActiveChapter(chapterId);
    // Smooth scroll specifically to the subsection anchored ID
    setTimeout(() => {
      const element = document.getElementById(`sub-${subId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={toggleSidebar}></div>
      
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <BookOpen size={24} className={styles.icon} />
          </div>
          <h2 className={styles.title}>Análise de Dados Ambientais</h2>
        </div>

        <nav className={styles.nav}>
          <div className={styles.navSection}>Conteúdo Completo</div>
          <ul className={styles.chapterList}>
            {chapters.map((chapter) => {
              const isLocked = !unlockedSections.includes(chapter.id);
              return (
              <li key={chapter.id} className={styles.chapterItemWrapper}>
                <button
                  className={`${styles.chapterButton} ${activeChapter === chapter.id ? styles.active : ''} ${isLocked ? styles.locked : ''}`}
                  onClick={() => !isLocked && toggleAccordion(chapter.id)}
                  style={{ opacity: isLocked ? 0.7 : 1, cursor: isLocked ? 'not-allowed' : 'pointer' }}
                >
                  <span className={styles.chapterNumber} style={{ backgroundColor: isLocked ? 'var(--color-border)' : '' }}>
                    {isLocked ? <Lock size={12} /> : chapter.id}
                  </span>
                  <span className={styles.chapterTitle}>{chapter.title}</span>
                  {expandedChapter === chapter.id ? (
                    <ChevronDown size={16} className={styles.accordionIcon} />
                  ) : (
                    <ChevronRight size={16} className={styles.accordionIcon} />
                  )}
                </button>
                
                {/* Embedded Subsections Accordion */}
                <div 
                  className={`${styles.subsectionsContainer} ${expandedChapter === chapter.id ? styles.expanded : ''}`}
                >
                  <ul className={styles.subList}>
                    {chapter.subsections.map(sub => (
                      <li key={sub.id}>
                        <button 
                          className={styles.subButton}
                          onClick={() => handleSubNavigate(chapter.id, sub.id)}
                        >
                          <span className={styles.subNumber}>{sub.id}</span>
                          <span className={styles.subTitle}>{sub.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )})}
          </ul>
        </nav>
        
        <div className={styles.footer}>
          <p>Para Todos © 2026</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
