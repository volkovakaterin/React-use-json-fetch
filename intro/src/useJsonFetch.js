import React, { useState, useEffect } from 'react';

function useJsonFetch(props){
    const [data, setData] = useState();
    const [loading, setLoading] = useState('loading');
    const [err, setError] = useState('1');
    useEffect(() => {
      function loading() {
        fetch(`http://localhost:7070/${props}`)
          .then(res => res.json())
          .then(
            (result) => {
                if(props === 'data') {setData(result)}
                else if(props === 'loading') {setLoading(result)}
                else if(props === 'error') {setError(result)}
              },
            (error) => {
                if(props === 'data') {setData(error)}
                else if(props === 'loading') {setLoading(error)}
                else if(props === 'error') {setError(error)}
            }
          )
      }  return function cleanup() {
        loading()
      };
    }, [])
    
    return [data, loading, err]
}

export default useJsonFetch;