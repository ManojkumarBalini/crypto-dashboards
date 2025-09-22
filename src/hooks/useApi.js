import { useState, useEffect, useRef } from 'react';
import { apiCache } from '../services/cache';

const useApi = (apiCall, params = {}, dependencies = [], cacheKey = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check cache first
        if (cacheKey) {
          const cachedData = apiCache.get(cacheKey);
          if (cachedData && isMounted.current) {
            setData(cachedData);
            setLoading(false);
            return;
          }
        }

        const response = await apiCall(params);
        
        if (isMounted.current) {
          setData(response.data);
          
          // Cache the data
          if (cacheKey) {
            apiCache.set(cacheKey, response.data);
          }
        }
      } catch (err) {
        if (isMounted.current) {
          setError(err.message || 'An error occurred');
        }
      } finally {
        if (isMounted.current) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, dependencies);

  return { data, loading, error };
};

export default useApi;