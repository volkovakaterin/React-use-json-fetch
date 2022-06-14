/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import useJsonFetch from './useJsonFetch';

function ErrorFetch (props){
    const error = useJsonFetch('error');
}

export default ErrorFetch;