import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import config from './popupConfig.json'; // Importas tu "interruptor"

const PromoPopup = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Solo se abre si el JSON dice que está activo
    if (config.active) {
      const timer = setTimeout(() => setIsOpen(true), 1500); // Aparece tras 1.5s
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen || !config.active) return null;

  return (
    <div className="popup-overlay">
      <div 
        className="popup-content" 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${config.backgroundImage})` }}
      >
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        
        <h2>{t(config.content.titleKey)}</h2>
        <p>{t(config.content.subtitleKey)}</p>
        
        <a href={config.link} className="popup-button">
          {t(config.content.buttonKey)}
        </a>
      </div>
    </div>
  );
};

export default PromoPopup;
