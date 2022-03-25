import React, { useEffect, useState, createContext } from 'react';

export const WidthContext = createContext();

export const WidthProvider = (props) => {
  const [matchWidth, setMatchesWidth] = useState(
    window.matchMedia('(max-width:768px)').matches
  );

  useEffect(() => {
    function handleResize() {
      setMatchesWidth(window.matchMedia('(max-width:768px)').matches);
    }
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <WidthContext.Provider value={[matchWidth, setMatchesWidth]}>
      {props.children}
    </WidthContext.Provider>
  );
};
