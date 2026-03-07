import React, { useState } from 'react';
import { Leaf, Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import styles from './Login.module.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Acesso Sustentável Negado: Preencha todos os campos.');
      return;
    }

    setLoading(true);

    // Mock Backend Validation Timer
    setTimeout(() => {
      if (email === 'admin@ibama.gov' && password === 'lotus2026') {
         // Success
         onLogin({ name: 'Analista Master', email });
      } else {
         setError('Acesso Sustentável Negado: Credenciais inválidas (Tente admin@ibama.gov / lotus2026)');
         setLoading(false);
      }
    }, 1200);
  };

  return (
    <div className={styles.loginContainer}>
      
      {/* Esquerda: Banner Visual */}
      <div className={styles.visualSide}>
         <div className={styles.overlay}></div>
         <div className={styles.visualContent}>
            <div className={styles.logoBrand}>
               <Leaf size={42} strokeWidth={1.5} color="#4ade80" />
               <h1>Lotus Academy</h1>
            </div>
            <h2>O maior portal de Data Science Ambiental da América Latina.</h2>
            <p>Conecte-se para continuar seu treinamento técnico em Geoprocessamento, Python e Excel Avançado.</p>
            
            <div className={styles.statsPanel}>
               <div className={styles.statBox}>
                  <span className={styles.statNum}>3</span>
                  <span className={styles.statLabel}>Cursos Densos</span>
               </div>
               <div className={styles.statBox}>
                  <span className={styles.statNum}>34</span>
                  <span className={styles.statLabel}>Laboratórios</span>
               </div>
            </div>
         </div>
      </div>

      {/* Direita: Formulário de Acesso */}
      <div className={styles.formSide}>
         <div className={styles.formWrapper}>
            <div className={styles.mobileLogo}>
               <Leaf size={32} color="var(--color-primary)" />
               <span>Lotus Academy</span>
            </div>

            <div className={styles.formHeader}>
               <h3>Bem-vindo de volta!</h3>
               <p>Acesse seu painel (SaaS V2)</p>
            </div>

            {error && (
               <div className={styles.errorBanner}>
                 {error}
               </div>
            )}

            <form onSubmit={handleLogin} className={styles.loginForm}>
               <div className={styles.inputGroup}>
                  <label htmlFor="email">E-mail Institucional</label>
                  <div className={styles.inputWrapper}>
                     <Mail size={18} className={styles.inputIcon} />
                     <input 
                       id="email"
                       type="email" 
                       placeholder="analista@meioambiente.gov" 
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                       autoComplete="email"
                     />
                  </div>
               </div>

               <div className={styles.inputGroup}>
                  <div className={styles.passwordHeader}>
                     <label htmlFor="password">Senha de Acesso</label>
                     <a href="#" className={styles.forgotLink}>Esqueci minha senha</a>
                  </div>
                  <div className={styles.inputWrapper}>
                     <Lock size={18} className={styles.inputIcon} />
                     <input 
                       id="password"
                       type="password" 
                       placeholder="••••••••" 
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                     />
                  </div>
               </div>

               <button 
                 type="submit" 
                 className={`${styles.submitBtn} ${loading ? styles.loadingBtn : ''}`}
                 disabled={loading}
               >
                  {loading ? (
                    'Autenticando na Nuvem...'
                  ) : (
                    <>Entrar na Academia <ArrowRight size={18} /></>
                  )}
               </button>
            </form>

            <div className={styles.footerNote}>
               Dica V2: Use <strong>admin@ibama.gov</strong> e senha <strong>lotus2026</strong> para entrar.
            </div>
         </div>
      </div>

    </div>
  );
};

export default Login;
