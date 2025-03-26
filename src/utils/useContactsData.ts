import { useEffect, useState } from 'react';
import { api } from '../services/api.ts';

export const useContactsData = () => {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get('/contacts');
        await setData(response.data);
      } catch (error) {
        console.error('Error while fetching data ', error);
      } finally {
        setError(error);
      }
    };

    fetchData().then((r) => r);

    return () => {
      controller.abort();
    };
  }, [error]);

  return { data, error, loading };
};
