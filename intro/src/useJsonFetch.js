import React, { useState, useEffect } from 'react';

function useJsonFetch(props){
    const [state, setState] = useState('loading');
    useEffect(() => {
      function loading() {
        fetch(props)
          .then(res => res.json())
          .then((result) => {setState(result)},
            (error) => {setState(error)}) 
            } 
       return loading()  
    }, []);
    
    return state;
}

export default useJsonFetch;