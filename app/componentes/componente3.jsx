'use client'

import React, { useEffect } from 'react';

const FlourishV3 = () => {
  useEffect(() => {
    // Crear y cargar el script de Flourish en el documento
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Eliminar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flourish-embed" data-src="story/2698013" style={{ width: '100%', height: '800px' }}>
      {/* Fallback para navegadores que no soporten JavaScript */}
      <noscript>
        <img
          src="https://public.flourish.studio/story/2698013/thumbnail"
          width="100%"
          alt="visualization"
        />
      </noscript>
    </div>
  );
};

export default FlourishV3;

{/*}
<div class="flourish-embed" data-src="story/2698013"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/story/2698013/thumbnail" width="100%" alt="visualization" /></noscript></div>
*/}





