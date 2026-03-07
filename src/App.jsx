import { useState, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import Chapter from './components/ebook/Chapter';
import { chapters } from './data/chapters';

function App() {
  const [activeChapterId, setActiveChapterId] = useState(1);
  const [activeChapter, setActiveChapter] = useState(chapters[0]);
  const [unlockedSections, setUnlockedSections] = useState([1]);

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
