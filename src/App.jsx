import { useState, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import Chapter from './components/ebook/Chapter';
import { chapters as dataScienceChapters } from './data/chapters';
import { excelChapters } from './data/excelChapters';

import { DndProvider } from 'react-dnd';
import { MultiBackend } from 'react-dnd-multi-backend';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';

function App() {
  const [activeCourseId, setActiveCourseId] = useState(() => {
    return localStorage.getItem('lotus_activeCourse') || 'data_science';
  });

  const getActiveChaptersObj = () => activeCourseId === 'excel_ambiente' ? excelChapters : dataScienceChapters;
  const currentChaptersObj = getActiveChaptersObj();

  const [activeChapterId, setActiveChapterId] = useState(() => {
    const saved = localStorage.getItem(`lotus_activeChapter_${activeCourseId}`);
    if (saved) return parseInt(saved, 10);
    // fallback to legacy if data_science
    if (activeCourseId === 'data_science') {
       const legacy = localStorage.getItem('lotus_activeChapter');
       if (legacy) return parseInt(legacy, 10);
    }
    return 1;
  });

  const [activeChapter, setActiveChapter] = useState(() => {
    return currentChaptersObj.find(c => c.id === activeChapterId) || currentChaptersObj[0];
  });

  const [unlockedSections, setUnlockedSections] = useState(() => {
    const saved = localStorage.getItem(`lotus_unlockedSections_${activeCourseId}`);
    if (saved) return JSON.parse(saved);
    if (activeCourseId === 'data_science') {
      const legacy = localStorage.getItem('lotus_unlockedSections');
      if (legacy) return JSON.parse(legacy);
    }
    return [1];
  });
  
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('lotus_theme') || 'light';
  });

  // Effect to switch course data in memory when activeCourseId changes
  useEffect(() => {
    localStorage.setItem('lotus_activeCourse', activeCourseId);
    
    // Switch state contexts.
    const savedChapter = localStorage.getItem(`lotus_activeChapter_${activeCourseId}`);
    if (savedChapter) {
        setActiveChapterId(parseInt(savedChapter, 10));
    } else {
        if (activeCourseId === 'data_science') {
            const legacy = localStorage.getItem('lotus_activeChapter');
            setActiveChapterId(legacy ? parseInt(legacy, 10) : 1);
        } else {
            setActiveChapterId(1);
        }
    }
    
    const savedUnlocked = localStorage.getItem(`lotus_unlockedSections_${activeCourseId}`);
    if (savedUnlocked) {
      setUnlockedSections(JSON.parse(savedUnlocked));
    } else {
      if (activeCourseId === 'data_science') {
        const legacy = localStorage.getItem('lotus_unlockedSections');
        setUnlockedSections(legacy ? JSON.parse(legacy) : [1]);
      } else {
        setUnlockedSections([1]);
      }
    }
  }, [activeCourseId]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lotus_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(`lotus_activeChapter_${activeCourseId}`, activeChapterId);
    if (activeCourseId === 'data_science') {
        localStorage.setItem('lotus_activeChapter', activeChapterId);
    }
  }, [activeChapterId, activeCourseId]);

  useEffect(() => {
    localStorage.setItem(`lotus_unlockedSections_${activeCourseId}`, JSON.stringify(unlockedSections));
    if (activeCourseId === 'data_science') {
        localStorage.setItem('lotus_unlockedSections', JSON.stringify(unlockedSections));
    }
  }, [unlockedSections, activeCourseId]);

  useEffect(() => {
    const chapter = currentChaptersObj.find(c => c.id === activeChapterId);
    if (chapter) {
      setActiveChapter(chapter);
    }
  }, [activeChapterId, activeCourseId]);

  const courses = [
    { id: 'data_science', name: 'Ciência de Dados Ambientais' },
    { id: 'excel_ambiente', name: 'Excel Ambiental: A Física dos Dados' }
  ];

  return (
    <MainLayout 
      chapters={currentChaptersObj} 
      activeChapter={activeChapterId} 
      setActiveChapter={setActiveChapterId}
      unlockedSections={unlockedSections}
      theme={theme}
      setTheme={setTheme}
      courses={courses}
      activeCourseId={activeCourseId}
      setActiveCourseId={setActiveCourseId}
    >
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <Chapter 
          chapter={activeChapter} 
          totalChapters={currentChaptersObj.length} 
          setActiveChapter={setActiveChapterId} 
          unlockedSections={unlockedSections}
          setUnlockedSections={setUnlockedSections}
        />
      </DndProvider>
    </MainLayout>
  );
}

export default App;
