import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
import { Diving } from 'types/Gatherings';

const getDivingRecent = async () => {
  try {
    const response = await apiClient.get<Diving[]>(api.ENDPOINTS.DIVING.DIVING_RECENT);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Axios failed to get recent diving');
    else
      throw new Error('Failed to get recent diving');
  }
};

const getDivingPopular = async () => {
  try {
    const response = await apiClient.get<string[]>(api.ENDPOINTS.DIVING.DIVING_POPULAR);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Axios failed to get popular diving');
    else
      throw new Error('Failed to get popular diving');
  }
};

export {
  getDivingRecent,
  getDivingPopular,
};