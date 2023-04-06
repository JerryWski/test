import React, { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import styles from './App.module.css';
import WelcomeSection from './components/WelcomeSection';

const App: React.FC = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const toggleOverlay: () => void = () => {
    setIsOverlayActive(!isOverlayActive);
  };

  useEffect(() => {
    if (isOverlayActive) {
      document.body.classList.add(styles.overlay_active);
    } else {
      document.body.classList.remove(styles.overlay_active);
    }
  }, [isOverlayActive]);

  return (
    <>
      <header className={styles.header}>
        <NavigationBar toggleOverLay={toggleOverlay} />
      </header>
      <main>
        <WelcomeSection />
      </main>
    </>
  );
};

export default App;
