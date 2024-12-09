import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
import { Moim } from 'types/Gatherings';

const getMoimActive = async () => {
  try {
    const response = await apiClient.get<Moim[]>(api.ENDPOINTS.MOIM.MOIM_ACTIVE);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Axios failed to get active moim');
    else
      throw new Error('Failed to get active moim');
  }
};

export {
  getMoimActive,
};