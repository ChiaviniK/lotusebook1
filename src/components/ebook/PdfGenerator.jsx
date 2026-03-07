import React, { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.min.js';
import { Download, Loader2 } from 'lucide-react';
import styles from './PdfGenerator.module.css';

const PdfGenerator = ({ chapters, courseName }) => {
  const contentRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    
    const element = contentRef.current;
    
    const opt = {
      margin:       15,
      filename:     `lotus_${courseName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak:    { mode: ['css', 'legacy'] }
    };

    try {
      element.style.display = 'block';
      const pdfBlob = await html2pdf().set(opt).from(element).output('blob');
      
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = opt.filename;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup DOM
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
    } finally {
      element.style.display = 'none';
      setIsGenerating(false);
    }
  };

  return (
    <>
      <button 
        onClick={handleDownloadPdf} 
        disabled={isGenerating}
        className={styles.downloadButton}
      >
        {isGenerating ? <Loader2 size={18} className={styles.spin} /> : <Download size={18} />}
        <span>{isGenerating ? 'Compilando PDF...' : 'Baixar E-book (PDF)'}</span>
      </button>

      {/* Hidden Layout HTML2PDF */}
      <div style={{ display: 'none' }}>
        <div ref={contentRef} className={styles.pdfContainer}>
          
          {/* Capa */}
          <div className={styles.coverPage}>
            <div className={styles.coverContent}>
              <h1 className={styles.coverTitle}>Lotus Academy</h1>
              <h2 className={styles.coverSubtitle}>{courseName}</h2>
              <p className={styles.coverDate}>Gerado em {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>

          {/* Chapters */}
          {chapters.map((chapter) => (
            <div key={chapter.id} className={styles.chapterPage}>
              <h1 className={styles.chapterTitle}>Capítulo {chapter.id}: {chapter.title}</h1>
              
              {chapter.content && (
                <div 
                  className={styles.chapterContent} 
                  dangerouslySetInnerHTML={{ __html: chapter.content.replace(/\n/g, '<br/>') }}
                />
              )}

              {chapter.subsections && chapter.subsections.map((sub) => (
                <div key={sub.id} className={styles.subsection}>
                  <h2 className={styles.subTitle}>{sub.id} {sub.title}</h2>
                  <div 
                    className={styles.subContent}
                    dangerouslySetInnerHTML={{ __html: sub.content.replace(/\n/g, '<br/>') }} 
                  />
                  {sub.simulation && sub.simulation !== "Placeholder" && (
                    <div className={styles.simNote}>
                       [Neste ponto do E-book online, há uma simulação interativa: {sub.simulation}. Acesse a plataforma Lotus Academy para vivenciar a experiência prática em laboratório.]
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default PdfGenerator;
