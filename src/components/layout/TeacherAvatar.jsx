import React, { useState, useEffect } from 'react';
import { Bot, X } from 'lucide-react';
import { getText } from '../../utils/i18n';

const TeacherAvatar = ({ tip, language = 'pt' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Re-trigger the avatar when the tip string changes
  useEffect(() => {
    if (tip && !isDismissed) {
      setIsVisible(true);
      
      // Auto-hide the speech bubble after 15 seconds so it doesn't stay forever
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 15000);
      
      return () => clearTimeout(timer);
    }
  }, [tip, isDismissed]);

  if (!tip || isDismissed) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      zIndex: 50,
      pointerEvents: 'none' // allow clicking through transparent areas
    }}>
      
      {/* Speech Bubble */}
      <div style={{
         opacity: isVisible ? 1 : 0,
         transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
         transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
         backgroundColor: 'white',
         color: '#1f2937',
         padding: '1.2rem',
         borderRadius: '16px 16px 4px 16px',
         boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
         marginBottom: '10px',
         maxWidth: '300px',
         lineHeight: 1.5,
         fontSize: '0.95rem',
         position: 'relative',
         border: '2px solid #10b981',
         pointerEvents: 'auto' // Make bubble clickable
      }}>
         <button 
           onClick={() => setIsVisible(false)}
           style={{
             position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af'
           }}
           title={getText({ pt: 'Fechar Dica', en: 'Close Tip' }, language)}
         >
            <X size={16} />
         </button>
         
         <div style={{ fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span role="img" aria-label="lightbulb">💡</span> {getText({ pt: 'Dica do Especialista', en: 'Expert Tip' }, language)}
         </div>
         {tip}
      </div>

      {/* Avatar Icon */}
      <button 
         onClick={() => setIsVisible(!isVisible)}
         style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
            pointerEvents: 'auto',
            transform: isVisible ? 'scale(1.1)' : 'scale(1)',
            animation: !isVisible ? 'bounce 2s infinite' : 'none'
         }}
         onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = isVisible ? 'scale(1.1)' : 'scale(1)'}
         title={getText({ pt: 'Professor Virtual', en: 'Virtual Teacher' }, language)}
      >
         <Bot size={32} />
      </button>

      {/* Basic Keyframes for attention bounce */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};

export default TeacherAvatar;
