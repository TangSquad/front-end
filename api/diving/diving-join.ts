import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';

interface Response {
  success: boolean;
  message: string;
  data: null;
}

const joinDiving = async (divingId: number) => {
  try {
    const response = await apiClient.put<Response>(api.ENDPOINTS.DIVING.DIVING_JOIN.replace('{divingId}', `${divingId}`));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get joined diving');
    else
      throw new Error('Failed to get joined diving');
  }
};

export {
  joinDiving,
};