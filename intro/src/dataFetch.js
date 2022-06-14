/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import useJsonFetch from './useJsonFetch';

function DataFetch(){
const data = useJsonFetch('data'); 
return(
    <div>Успешное получение данных</div>
)
}

export default DataFetch;