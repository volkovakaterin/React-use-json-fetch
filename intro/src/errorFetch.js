/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import useJsonFetch from './useJsonFetch';

function ErrorFetch (props){
    const error = useJsonFetch('http://localhost:7070/error');
}

export default ErrorFetch;