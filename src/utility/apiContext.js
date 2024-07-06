import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const ApiContext = createContext();

// Create a provider component
export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (apiEndpoint) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
      if (result.length > 0) {
        const keys = Object.keys(result[0]);
        setHeaders(keys)
       
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{ data,headers, loading, error, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};

// Custom hook to use the ApiContext
export const useApi = () => {
  return useContext(ApiContext);
};
