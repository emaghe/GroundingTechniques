import React, { useState, createContext, useContext } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Globe, Check } from 'lucide-react';

// i18n Configuration
const translations = {
  en: {
    title: "5-4-3-2-1 Grounding Technique",
    subtitle: "A mindfulness exercise to help you stay present",
    language: "Language",
    start: "Start Exercise",
    next: "Next",
    previous: "Previous",
    restart: "Restart",
    complete: "Complete",
    completed: "Exercise Completed!",
    completedMessage: "Great job! You've completed the 5-4-3-2-1 grounding technique. Take a moment to notice how you feel now.",
    stepOf: "Step",
    of: "of",
    completed: "completed",
    credits: "Credits",
    steps: {
      5: {
        title: "5 Things You Can See",
        description: "Look around and identify 5 things you can see. Take your time to really observe them.",
        placeholder: "Describe something you can see..."
      },
      4: {
        title: "4 Things You Can Touch",
        description: "Notice 4 things you can physically touch around you. Focus on their texture and temperature.",
        placeholder: "Describe something you can touch..."
      },
      3: {
        title: "3 Sounds You Can Hear",
        description: "Listen carefully and identify 3 different sounds around you.",
        placeholder: "Describe a sound you can hear..."
      },
      2: {
        title: "2 Things You Can Smell",
        description: "Take a deep breath and notice 2 different scents.",
        placeholder: "Describe something you can smell..."
      },
      1: {
        title: "1 Thing You Can Taste",
        description: "Focus on 1 taste in your mouth right now.",
        placeholder: "Describe something you can taste..."
      }
    }
  },
  it: {
    title: "Tecnica di Grounding 5-4-3-2-1",
    subtitle: "Un esercizio di mindfulness per aiutarti a rimanere presente",
    language: "Lingua",
    start: "Inizia Esercizio",
    next: "Avanti",
    previous: "Indietro",
    restart: "Ricomincia",
    complete: "Completa",
    completed: "Esercizio Completato!",
    completedMessage: "Ottimo lavoro! Hai completato la tecnica di grounding 5-4-3-2-1. Prenditi un momento per notare come ti senti ora.",
    stepOf: "Passo",
    of: "di",
    completed: "completato",
    credits: "Crediti",
    steps: {
      5: {
        title: "5 Cose Che Puoi Vedere",
        description: "Guardati intorno e identifica 5 cose che puoi vedere. Prenditi il tempo per osservarle davvero.",
        placeholder: "Descrivi qualcosa che puoi vedere..."
      },
      4: {
        title: "4 Cose Che Puoi Toccare",
        description: "Nota 4 cose che puoi toccare fisicamente intorno a te. Concentrati sulla loro consistenza e temperatura.",
        placeholder: "Descrivi qualcosa che puoi toccare..."
      },
      3: {
        title: "3 Suoni Che Puoi Sentire",
        description: "Ascolta attentamente e identifica 3 suoni diversi intorno a te.",
        placeholder: "Descrivi un suono che puoi sentire..."
      },
      2: {
        title: "2 Cose Che Puoi Annusare",
        description: "Fai un respiro profondo e nota 2 profumi diversi.",
        placeholder: "Descrivi qualcosa che puoi annusare..."
      },
      1: {
        title: "1 Cosa Che Puoi Assaporare",
        description: "Concentrati su 1 sapore che hai in bocca in questo momento.",
        placeholder: "Descrivi qualcosa che puoi assaporare..."
      }
    }
  },
  es: {
    title: "Técnica de Conexión 5-4-3-2-1",
    subtitle: "Un ejercicio de mindfulness para ayudarte a mantenerte presente",
    language: "Idioma",
    start: "Comenzar Ejercicio",
    next: "Siguiente",
    previous: "Anterior",
    restart: "Reiniciar",
    complete: "Completar",
    completed: "¡Ejercicio Completado!",
    completedMessage: "¡Excelente trabajo! Has completado la técnica de conexión 5-4-3-2-1. Tómate un momento para notar cómo te sientes ahora.",
    stepOf: "Paso",
    of: "de",
    completed: "completado",
    credits: "Créditos",
    steps: {
      5: {
        title: "5 Cosas Que Puedes Ver",
        description: "Mira a tu alrededor e identifica 5 cosas que puedes ver. Tómate tu tiempo para observarlas realmente.",
        placeholder: "Describe algo que puedes ver..."
      },
      4: {
        title: "4 Cosas Que Puedes Tocar",
        description: "Nota 4 cosas que puedes tocar físicamente a tu alrededor. Concéntrate en su textura y temperatura.",
        placeholder: "Describe algo que puedes tocar..."
      },
      3: {
        title: "3 Sonidos Que Puedes Escuchar",
        description: "Escucha atentamente e identifica 3 sonidos diferentes a tu alrededor.",
        placeholder: "Describe un sonido que puedes escuchar..."
      },
      2: {
        title: "2 Cosas Que Puedes Oler",
        description: "Respira profundamente y nota 2 aromas diferentes.",
        placeholder: "Describe algo que puedes oler..."
      },
      1: {
        title: "1 Cosa Que Puedes Saborear",
        description: "Concéntrate en 1 sabor que tienes en la boca ahora mismo.",
        placeholder: "Describe algo que puedes saborear..."
      }
    }
  },
  fr: {
    title: "Technique d'Ancrage 5-4-3-2-1",
    subtitle: "Un exercice de pleine conscience pour vous aider à rester présent",
    language: "Langue",
    start: "Commencer l'Exercice",
    next: "Suivant",
    previous: "Précédent",
    restart: "Recommencer",
    complete: "Terminer",
    completed: "Exercice Terminé!",
    completedMessage: "Excellent travail! Vous avez terminé la technique d'ancrage 5-4-3-2-1. Prenez un moment pour remarquer comment vous vous sentez maintenant.",
    stepOf: "Étape",
    of: "de",
    completed: "terminé",
    credits: "Crédits",
    steps: {
      5: {
        title: "5 Choses Que Vous Pouvez Voir",
        description: "Regardez autour de vous et identifiez 5 choses que vous pouvez voir. Prenez le temps de vraiment les observer.",
        placeholder: "Décrivez quelque chose que vous pouvez voir..."
      },
      4: {
        title: "4 Choses Que Vous Pouvez Toucher",
        description: "Remarquez 4 choses que vous pouvez toucher physiquement autour de vous. Concentrez-vous sur leur texture et température.",
        placeholder: "Décrivez quelque chose que vous pouvez toucher..."
      },
      3: {
        title: "3 Sons Que Vous Pouvez Entendre",
        description: "Écoutez attentivement et identifiez 3 sons différents autour de vous.",
        placeholder: "Décrivez un son que vous pouvez entendre..."
      },
      2: {
        title: "2 Choses Que Vous Pouvez Sentir",
        description: "Respirez profondément et remarquez 2 parfums différents.",
        placeholder: "Décrivez quelque chose que vous pouvez sentir..."
      },
      1: {
        title: "1 Chose Que Vous Pouvez Goûter",
        description: "Concentrez-vous sur 1 goût que vous avez dans la bouche maintenant.",
        placeholder: "Décrivez quelque chose que vous pouvez goûter..."
      }
    }
  }
};

// Language Context
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  return (
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        {children}
      </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Styles
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    padding: '12px'
  },
  innerContainer: {
    maxWidth: '768px',
    margin: '0 auto',
    paddingTop: '32px',
    paddingBottom: '32px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '16px'
  },
  stepIndicator: {
    fontSize: '14px',
    color: '#6b7280'
  },
  languageSelector: {
    position: 'relative',
    display: 'inline-block'
  },
  languageButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    fontSize: '14px',
    fontWeight: '500'
  },
  languageButtonHover: {
    backgroundColor: '#dcfce7'
  },
  languageDropdown: {
    position: 'absolute',
    top: '100%',
    right: '0',
    marginTop: '4px',
    backgroundColor: 'white',
    border: '1px solid #bbf7d0',
    borderRadius: '8px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
    minWidth: '128px'
  },
  languageOption: {
    display: 'block',
    width: '100%',
    padding: '8px 12px',
    textAlign: 'left',
    fontSize: '14px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  languageOptionHover: {
    backgroundColor: '#f0fdf4'
  },
  languageOptionActive: {
    backgroundColor: '#dcfce7',
    color: '#15803d',
    fontWeight: '500'
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#dcfce7',
    borderRadius: '4px',
    marginBottom: '24px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#22c55e',
    transition: 'width 0.5s ease-out'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #dcfce7',
    padding: '24px',
    marginBottom: '24px'
  },
  welcomeCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    border: '1px solid #bbf7d0',
    padding: '32px',
    textAlign: 'center'
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px'
  },
  stepNumber: {
    width: '48px',
    height: '48px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  stepTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: 0
  },
  stepDescription: {
    color: '#6b7280',
    marginTop: '4px',
    margin: 0
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  inputWrapper: {
    position: 'relative'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #bbf7d0',
    borderRadius: '8px',
    resize: 'none',
    height: '80px',
    fontSize: '14px',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'inherit'
  },
  textareaFocus: {
    borderColor: '#22c55e',
    boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.2)',
    outline: 'none'
  },
  checkIcon: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    color: '#22c55e'
  },
  progressText: {
    marginTop: '16px',
    fontSize: '14px',
    color: '#6b7280'
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s'
  },
  backButton: {
    color: '#6b7280',
    backgroundColor: 'transparent'
  },
  backButtonHover: {
    color: '#1f2937'
  },
  nextButton: {
    backgroundColor: '#22c55e',
    color: 'white',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  nextButtonHover: {
    backgroundColor: '#16a34a',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  },
  nextButtonDisabled: {
    backgroundColor: '#d1d5db',
    cursor: 'not-allowed'
  },
  startButton: {
    backgroundColor: '#22c55e',
    color: 'white',
    padding: '12px 32px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  startButtonHover: {
    backgroundColor: '#16a34a',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  },
  iconLarge: {
    width: '80px',
    height: '80px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
    color: 'white',
    fontSize: '32px',
    fontWeight: 'bold'
  },
  completedIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '16px',
    margin: 0
  },
  subtitle: {
    fontSize: '18px',
    color: '#6b7280',
    marginBottom: '32px',
    margin: 0
  },
  completedTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '16px',
    margin: 0
  },
  completedMessage: {
    fontSize: '18px',
    color: '#6b7280',
    marginBottom: '32px',
    margin: 0
  },
  restartButton: {
    backgroundColor: '#22c55e',
    color: 'white',
    padding: '12px 32px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '0 auto'
  },
  restartButtonHover: {
    backgroundColor: '#16a34a',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  },
  credits: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#6b7280'
  },
  creditsLink: {
    color: '#22c55e',
    textDecoration: 'none'
  }
};

// Language Selector Component
const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'it', name: 'Italiano' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' }
  ];

  return (
      <div style={styles.languageSelector}>
        <button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              ...styles.languageButton,
              ...(isHovered ? styles.languageButtonHover : {})
            }}
        >
          <Globe size={18} style={{ color: '#16a34a' }} />
          <span style={{ color: '#15803d' }}>{t.language}</span>
          <ChevronRight
              size={16}
              style={{
                color: '#16a34a',
                transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s'
              }}
          />
        </button>

        {isOpen && (
            <div style={styles.languageDropdown}>
              {languages.map((lang) => (
                  <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      onMouseEnter={(e) => {
                        if (language !== lang.code) {
                          e.target.style.backgroundColor = styles.languageOptionHover.backgroundColor;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (language !== lang.code) {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                      style={{
                        ...styles.languageOption,
                        ...(language === lang.code ? styles.languageOptionActive : {}),
                        borderRadius: lang === languages[0] ? '8px 8px 0 0' :
                            lang === languages[languages.length - 1] ? '0 0 8px 8px' : '0'
                      }}
                  >
                    {lang.name}
                  </button>
              ))}
            </div>
        )}
      </div>
  );
};

// Progress Indicator Component
const ProgressIndicator = ({ current, total }) => {
  return (
      <div style={styles.progressBar}>
        <div
            style={{
              ...styles.progressFill,
              width: `${(current / total) * 100}%`
            }}
        />
      </div>
  );
};

// Step Component
const StepComponent = ({ step, stepData, inputs, onInputChange }) => {
  const { t } = useLanguage();
  const requiredInputs = step;
  const currentInputs = inputs[step] || [];

  return (
      <div style={styles.card}>
        <div style={styles.stepHeader}>
          <div style={styles.stepNumber}>
            {step}
          </div>
          <div>
            <h2 style={styles.stepTitle}>{stepData.title}</h2>
            <p style={styles.stepDescription}>{stepData.description}</p>
          </div>
        </div>

        <div style={styles.inputContainer}>
          {Array.from({ length: requiredInputs }, (_, index) => (
              <div key={index} style={styles.inputWrapper}>
            <textarea
                value={currentInputs[index] || ''}
                onChange={(e) => onInputChange(step, index, e.target.value)}
                placeholder={`${index + 1}. ${stepData.placeholder}`}
                style={styles.textarea}
                onFocus={(e) => {
                  e.target.style.borderColor = styles.textareaFocus.borderColor;
                  e.target.style.boxShadow = styles.textareaFocus.boxShadow;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#bbf7d0';
                  e.target.style.boxShadow = 'none';
                }}
            />
                {currentInputs[index] && (
                    <Check size={20} style={styles.checkIcon} />
                )}
              </div>
          ))}
        </div>

        <div style={styles.progressText}>
          {Object.values(currentInputs).filter(input => input?.trim()).length} / {requiredInputs} {t.completed}
        </div>
      </div>
  );
};

// Main App Component
const GroundingApp = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [inputs, setInputs] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const steps = [5, 4, 3, 2, 1];
  const totalSteps = steps.length;

  const handleInputChange = (step, index, value) => {
    setInputs(prev => ({
      ...prev,
      [step]: {
        ...prev[step],
        [index]: value
      }
    }));
  };

  const canProceed = () => {
    if (currentStep >= totalSteps) return true;
    const currentStepNumber = steps[currentStep];
    const stepInputs = inputs[currentStepNumber] || {};
    const filledInputs = Object.values(stepInputs).filter(input => input?.trim()).length;
    return filledInputs >= currentStepNumber;
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setInputs({});
    setIsStarted(false);
  };

  if (!isStarted) {
    return (
        <div style={styles.container}>
          <div style={styles.innerContainer}>
            <div style={styles.header}>
              <div style={styles.credits}>
                <a href="https://www.duckintosh.com/" style={styles.creditsLink}>Duckintosh</a>
              </div>
              <LanguageSelector />
              <div style={styles.credits}>
                <span>{t.credits}</span>
                <a href="https://www.latela.com/percorso/10-crescita-personale/692-il-gioco-del-5-4-3-2-1" style={styles.creditsLink}>La Tela</a>
              </div>
            </div>

            <div style={styles.welcomeCard}>
              <div style={styles.iconLarge}>
                <span>5</span>
              </div>

              <h1 style={styles.title}>{t.title}</h1>
              <p style={styles.subtitle}>{t.subtitle}</p>

              <button
                  onClick={() => setIsStarted(true)}
                  onMouseEnter={() => setHoveredButton('start')}
                  onMouseLeave={() => setHoveredButton(null)}
                  style={{
                    ...styles.startButton,
                    ...(hoveredButton === 'start' ? styles.startButtonHover : {})
                  }}
              >
                {t.start}
              </button>
            </div>
          </div>
        </div>
    );
  }

  if (currentStep >= totalSteps) {
    return (
        <div style={styles.container}>
          <div style={styles.innerContainer}>
            <div style={styles.header}>
              <a href="https://duckintosh.com/">Duckintosh</a>
              <LanguageSelector />
              <div style={styles.credits}>
                <span>{t.credits}</span>
                <a href="https://www.latela.com/" style={styles.creditsLink}>La Tela</a>
              </div>
            </div>

            <div style={styles.welcomeCard}>
              <div style={styles.completedIcon}>
                <Check size={40} style={{ color: 'white' }} />
              </div>

              <h1 style={styles.completedTitle}>{t.completed}</h1>
              <p style={styles.completedMessage}>{t.completedMessage}</p>

              <button
                  onClick={handleRestart}
                  onMouseEnter={() => setHoveredButton('restart')}
                  onMouseLeave={() => setHoveredButton(null)}
                  style={{
                    ...styles.restartButton,
                    ...(hoveredButton === 'restart' ? styles.restartButtonHover : {})
                  }}
              >
                <RotateCcw size={20} />
                {t.restart}
              </button>
            </div>
          </div>
        </div>
    );
  }

  const currentStepNumber = steps[currentStep];
  const stepData = t.steps[currentStepNumber];

  return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <div style={styles.header}>
            <div style={styles.stepIndicator}>
              {t.stepOf} {currentStep + 1} {t.of} {totalSteps}
            </div>
            <LanguageSelector />
          </div>

          <ProgressIndicator current={currentStep + 1} total={totalSteps} />

          <StepComponent
              step={currentStepNumber}
              stepData={stepData}
              inputs={inputs}
              onInputChange={handleInputChange}
          />

          <div style={styles.navigation}>
            <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                onMouseEnter={() => setHoveredButton('back')}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  ...styles.navButton,
                  ...styles.backButton,
                  ...(hoveredButton === 'back' && currentStep > 0 ? styles.backButtonHover : {}),
                  opacity: currentStep === 0 ? 0.5 : 1,
                  cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
                }}
            >
              <ChevronLeft size={20} />
              {t.previous}
            </button>

            <button
                onClick={handleNext}
                disabled={!canProceed()}
                onMouseEnter={() => setHoveredButton('next')}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  ...styles.navButton,
                  ...styles.nextButton,
                  ...(hoveredButton === 'next' && canProceed() ? styles.nextButtonHover : {}),
                  ...(canProceed() ? {} : styles.nextButtonDisabled)
                }}
            >
              {currentStep === totalSteps - 1 ? t.complete : t.next}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
  );
};

// Root App Component
export default function App() {
  return (
      <LanguageProvider>
        <GroundingApp />
      </LanguageProvider>
  );
}