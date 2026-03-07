import { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Share2, Printer, Unlock, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import Chapter1Simulation from '../simulations/Chapter1Simulation';
import Chapter2Simulation from '../simulations/Chapter2Simulation';
import Chapter3Simulation from '../simulations/Chapter3Simulation';
import Chapter4Simulation from '../simulations/Chapter4Simulation';
import Chapter5Simulation from '../simulations/Chapter5Simulation';
import Chapter6Simulation from '../simulations/Chapter6Simulation';
import Chapter7Simulation from '../simulations/Chapter7Simulation';

import ImpactSimulator from '../simulations/ImpactSimulator';
import DataFetcherMock from '../simulations/DataFetcherMock';
import ImputationSim from '../simulations/ImputationSim';
import ArchitectureQuiz from '../simulations/ArchitectureQuiz';
import ScatterCorrelation from '../simulations/ScatterCorrelation';
import ChartSelector from '../simulations/ChartSelector';
import RandomForestMock from '../simulations/RandomForestMock';
import SigMapSimulation from '../simulations/SigMapSimulation';
import DataFormatQuiz from '../simulations/DataFormatQuiz';
import ExcelMock from '../simulations/ExcelMock';
import ChartBuilder from '../simulations/ChartBuilder';
import PandasDragDrop from '../simulations/PandasDragDrop';
import PandasFilterDragDrop from '../simulations/PandasFilterDragDrop';

import PowerQueryFlow from '../simulations/PowerQueryFlow';
import ExcelStats from '../simulations/ExcelStats';
import CarbonScenario from '../simulations/CarbonScenario';
import DashboardKpi from '../simulations/DashboardKpi';

import AnatomyGrid from '../simulations/AnatomyGrid';
import FormulaBasic from '../simulations/FormulaBasic';
import StatsBasic from '../simulations/StatsBasic';
import GraphBasic from '../simulations/GraphBasic';
import ImportFlow from '../simulations/ImportFlow';

import styles from './Chapter.module.css';

// We now map simulations via string identifiers in the chapters.js
const getSimulation = (simName) => {
  switch (simName) {
    case 'ImpactSimulator': return <ImpactSimulator />;
    case 'QuestionBuilder': return <Chapter1Simulation />; // Reusing the visual created in phase 1
    
    case 'DataFetcherMock': return <DataFetcherMock />;
    case 'NDVIViewer': return <Chapter2Simulation />;
    case 'DataFormatQuiz': return <DataFormatQuiz />;

    case 'TableCleaner': return <Chapter3Simulation />;
    case 'ImputationSim': return <ImputationSim />;

    case 'ArchitectureQuiz': return <ArchitectureQuiz />;
    case 'PipelineBuilder': return <Chapter4Simulation />;
    case 'ExcelMock': return <ExcelMock />;

    case 'AnomalyDetector': return <Chapter5Simulation />;
    case 'ScatterCorrelation': return <ScatterCorrelation />;

    case 'ChartSelector': return <ChartSelector />;
    case 'ColorblindTest': return <Chapter6Simulation />;
    case 'SigMapSimulation': return <SigMapSimulation />;
    case 'ChartBuilder': return <ChartBuilder />;

    case 'PythonTerminal': return <Chapter7Simulation />;
    case 'RandomForestMock': return <RandomForestMock />;

    case 'PandasDragDrop': return <PandasDragDrop />;
    case 'PandasFilterDragDrop': return <PandasFilterDragDrop />;
    
    case 'AnatomyGrid': return <AnatomyGrid />;
    case 'FormulaBasic': return <FormulaBasic />;
    case 'StatsBasic': return <StatsBasic />;
    case 'GraphBasic': return <GraphBasic />;
    case 'ImportFlow': return <ImportFlow />;

    case 'PowerQueryFlow': return <PowerQueryFlow />;
    case 'ExcelStats': return <ExcelStats />;
    case 'CarbonScenario': return <CarbonScenario />;
    case 'DashboardKpi': return <DashboardKpi />;

    default: return null;
  }
};

const Chapter = ({ chapter, totalChapters, setActiveChapter, unlockedSections = [1], setUnlockedSections }) => {
  if (!chapter) return null;

  const isFirst = chapter.id === 1;
  const isLast = chapter.id === totalChapters;

  const handlePrev = useCallback(() => {
    if (!isFirst) {
      setActiveChapter(chapter.id - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isFirst, chapter.id, setActiveChapter]);

  const handleNext = useCallback(() => {
    if (!isLast && unlockedSections.includes(chapter.id + 1)) {
      setActiveChapter(chapter.id + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isLast, unlockedSections, chapter.id, setActiveChapter]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const fireConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#2ea14f', '#f39c12', '#ffffff']
      });
      confetti({
        particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#2ea14f', '#f39c12', '#ffffff']
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  const isLockedNext = !unlockedSections.includes(chapter.id + 1) && !isLast;

  const handleUnlockNext = () => {
    if (!unlockedSections.includes(chapter.id + 1)) {
      setUnlockedSections(prev => [...prev, chapter.id + 1]);
    }
    setActiveChapter(chapter.id + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.chapterLabel}>Capítulo {chapter.id}</span>
          <div className={styles.actions}>
            <button className={styles.actionBtn} aria-label="Imprimir capítulo">
              <Printer size={18} />
            </button>
            <button className={styles.actionBtn} aria-label="Compartilhar">
              <Share2 size={18} />
            </button>
          </div>
        </div>
        <h1 className={styles.title}>{chapter.title}</h1>
      </header>

      <div className={styles.content}>
        {/* Agora iterando pelos subsections/subtópicos */}
        {chapter.subsections && chapter.subsections.map((sub) => (
          <section key={sub.id} id={`sub-${sub.id}`} className={styles.section} style={{ paddingBottom: '3rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ 
                backgroundColor: 'var(--color-bg)', 
                color: 'var(--color-secondary)', 
                padding: '0.25rem 0.5rem', 
                borderRadius: '4px', 
                fontWeight: 'bold' 
              }}>
                {sub.id}
              </span>
              <h2 className={styles.subtitle} style={{ margin: 0, borderLeft: 'none', paddingLeft: 0 }}>
                {sub.title}
              </h2>
            </div>

            <div className={styles.textContainer}>
              {sub.content.split('\n').map((paragraph, pIndex) => (
                <p key={pIndex} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Simulação específica deste subcapítulo injetada nativamente */}
            {sub.simulation && (
              <div style={{ marginTop: '2rem' }}>
                {getSimulation(sub.simulation)}
              </div>
            )}
            
            <hr style={{ border: 'none', borderBottom: '1px dashed var(--color-border)', margin: '3rem 0 0 0' }} />
          </section>
        ))}
      </div>

      <footer className={styles.footer}>
        <button 
          onClick={handlePrev} 
          disabled={isFirst}
          className={`${styles.navBtn} ${isFirst ? styles.disabled : ''}`}
        >
          <ChevronLeft size={20} />
          <span>Capítulo Anterior</span>
        </button>

        <span className={styles.progress}>
          {chapter.id} de {totalChapters}
        </span>

        {isLockedNext ? (
          <button 
            onClick={handleUnlockNext} 
            className={styles.navBtn}
            style={{ backgroundColor: 'var(--color-secondary)', color: 'white', border: 'none', padding: '0.75rem 1.5rem' }}
          >
            <span style={{ fontWeight: 'bold' }}>Concluir e Desbloquear</span>
            <Unlock size={20} />
          </button>
        ) : (
          <button 
            onClick={fireConfetti} 
            className={`${styles.navBtn}`}
            style={{ backgroundColor: 'var(--color-primary)', color: 'white', border: 'none' }}
          >
            <span>Finalizar Curso</span>
            <Award size={20} />
          </button>
        )}
      </footer>
    </article>
  );
};

export default Chapter;
