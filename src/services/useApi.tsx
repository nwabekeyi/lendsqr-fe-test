// hooks/useApi.tsx

import { useState, useEffect } from 'react';

interface ApiState<T> {
  data: T  | [];
  loading: boolean;
  error: string | null;
}

function useApi<T>(url: string, localStorageKey: string) {
  const [state, setState] = useState<ApiState<T>>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data is cached in localStorage
        const cachedData = localStorage.getItem(localStorageKey);
        if (cachedData) {
          setState({ data: JSON.parse(cachedData), loading: false, error: null });
        } else {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data: T = await response.json();
          console.log()
          setState({ data, loading: false, error: null });
          // Cache the fetched data in localStorage
          localStorage.setItem(localStorageKey, JSON.stringify(data));
        }
      } catch (error: any) {
        setState({ data: [], loading: false, error: error.message });
      }
    };

    fetchData();
  }, [url, localStorageKey]);

  return state;
}

export default useApi;
