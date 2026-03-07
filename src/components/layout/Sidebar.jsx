import { useState } from 'react';
import { BookOpen, ChevronRight, ChevronDown, Menu, Lock, Moon, Sun } from 'lucide-react';
import PdfGenerator from '../ebook/PdfGenerator';
import styles from './Sidebar.module.css';

const Sidebar = ({ chapters, activeChapter, setActiveChapter, isOpen, toggleSidebar, unlockedSections = [1], theme, setTheme, courses, activeCourseId, setActiveCourseId }) => {
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
          <h2 className={styles.title}>Lotus Academy</h2>
        </div>

        {courses && (
          <div style={{ padding: '0 1rem 1rem 1rem', borderBottom: '1px solid var(--color-border)' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--color-text-muted)', marginBottom: '0.5rem', display: 'block' }}>MÓDULO DE ENSINO</label>
            <select 
              value={activeCourseId} 
              onChange={(e) => {
                setActiveCourseId(e.target.value);
                if (window.innerWidth <= 768) toggleSidebar();
              }}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-main)',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>
          </div>
        )}

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
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
          <PdfGenerator 
            chapters={chapters} 
            courseName={courses?.find(c => c.id === activeCourseId)?.name || "Lotus E-book"} 
          />
        </div>

        <div className={styles.footer} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', paddingBottom: '2rem' }}>
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', 
              backgroundColor: 'var(--color-surface)', color: 'var(--color-text-main)', 
              border: '1px solid var(--color-border)', borderRadius: '99px', cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}</span>
          </button>
          <p>Para Todos © 2026</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
