import React, { useState, useEffect, useRef } from 'react';
import useJsonFetch from './useJsonFetch';

function LoadingFetch(props){
    const [visibility, setVisibility] = useState('visible');
    const loading = useJsonFetch('http://localhost:7070/loading');
    let latestLoading = useRef('loading');
    if(loading !== 'loading') {
        latestLoading.current = loading;
    }
    useEffect(() => {
        function preloader() {
         if (latestLoading.current !== 'loading') {
      setVisibility('hidden')  
    }}
         return function cleanup() {
        preloader()
      };
    }, [loading])
    return(
        <div className={visibility}>Загрузка</div>
        
    )
}

export default LoadingFetch;