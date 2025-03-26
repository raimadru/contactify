import { api } from '../services/api.ts';
import { useState } from 'react';
import { UserData } from '../types/table.ts';

export const useUserData = (id: string) => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const fetchUserData = async (id: string) => {
    try {
      const response = await api.get(`/contacts/${id}`);
      setData(response.data);
    } catch (error) {
      console.error('Error while fetching data ', error);
    } finally {
      setLoading(true);
    }
  };

  fetchUserData(id).then((r) => r);

  return { data, loading };
};
