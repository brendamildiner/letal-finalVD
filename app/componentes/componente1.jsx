'use client'
import React, { useEffect } from 'react';

const FlourishV1 = () => {
  useEffect(() => {
    // Crear y añadir el script de Flourish al documento
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flourish-embed flourish-chart" data-src="visualisation/19330883">
    </div>
  );
};

export default FlourishV1;




