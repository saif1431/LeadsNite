import React, { useEffect } from 'react';

const CalendlyButton = ({ url, text, className }) => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      head.removeChild(script);
    };
  }, []);

  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      console.error('Calendly widget not loaded');
    }
  };

  return (
    <button onClick={openCalendly} className={className}>
      {text}
    </button>
  );
};

export default CalendlyButton;