import React from 'react';
import styles from './WelcomSection.module.css';

const WelcomeSection: React.FC = () => {
  return (
    <section>
      <div className={styles.welcome_section}>
        <div className={styles.welcome_header__container}>
          <p className={styles.welcome_text}>#interior, #home, #passion</p>
          <h1 className={styles.welcome_header}>Let&apos;s Make Your Interior Better</h1>
        </div>
        <div className={styles.welcome_image__container}>
          <picture>
            <source
              srcSet={require('../images/stowidokow3-logo-half.png')}
              media='(max-width: 1639px)'
            />
            <img
              src={require('../images/stowidokow3-logo.png')}
              alt='Logo Stowidoków'
              className={styles.welcome_image}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
