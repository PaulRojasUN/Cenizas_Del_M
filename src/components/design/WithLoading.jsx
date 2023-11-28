// withLoading.jsx
import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const withLoading = (Component) => {
  return (props) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 2500);
      return () => {
        clearTimeout(timer);
      };
    }, []);

    return (
      <Loader isReady={loaded}>
        <Component {...props} />
      </Loader>
    );
  };
};

export default withLoading;