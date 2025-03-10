import React from 'react'
import { useState, useEffect } from 'react'


export const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        handleSize();

        window.addEventListener('resize', handleSize);

        return () => window.removeEventListener('resize', handleSize);
    },[])

  return windowSize;
  
}

export default useWindowSize