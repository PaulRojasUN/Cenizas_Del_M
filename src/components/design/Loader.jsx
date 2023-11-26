import React, { useState, useEffect } from 'react';

function Loader({ onLoad, onError, onProgress, children }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      onLoad();
    }, 3000);

    const progressInterval = setInterval(() => {
      onProgress();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoad, onProgress]);

  if (!loaded) {
    return <div>Cargando...</div>;
  }

  return children;
}

export default Loader;