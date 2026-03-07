import { useState, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import Chapter from './components/ebook/Chapter';
import { chapters } from './data/chapters';

function App() {
  const [activeChapterId, setActiveChapterId] = useState(() => {
    const saved = localStorage.getItem('lotus_activeChapter');
    return saved ? parseInt(saved, 10) : 1;
  });
  const [activeChapter, setActiveChapter] = useState(chapters[0]);
  const [unlockedSections, setUnlockedSections] = useState(() => {
    const saved = localStorage.getItem('lotus_unlockedSections');
    return saved ? JSON.parse(saved) : [1];
  });
  
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('lotus_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lotus_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lotus_activeChapter', activeChapterId);
  }, [activeChapterId]);

  useEffect(() => {
    localStorage.setItem('lotus_unlockedSections', JSON.stringify(unlockedSections));
  }, [unlockedSections]);

  useEffect(() => {
    const chapter = chapters.find(c => c.id === activeChapterId);
    if (chapter) {
      setActiveChapter(chapter);
    }
  }, [activeChapterId]);

  return (
    <MainLayout 
      chapters={chapters} 
      activeChapter={activeChapterId} 
      setActiveChapter={setActiveChapterId}
      unlockedSections={unlockedSections}
      theme={theme}
      setTheme={setTheme}
    >
      <Chapter 
        chapter={activeChapter} 
        totalChapters={chapters.length} 
        setActiveChapter={setActiveChapterId} 
        unlockedSections={unlockedSections}
        setUnlockedSections={setUnlockedSections}
      />
    </MainLayout>
  );
}

export default App;
