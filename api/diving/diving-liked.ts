import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';
import { Diving } from 'types/Gatherings';

const getDivingLiked = async () => {
  try {
    const response = await apiClient.get<Diving[]>(api.ENDPOINTS.DIVING.DIVING_LIKED);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get liked diving');
    else
      throw new Error('Failed to get liked diving');
  }
};

export {
  getDivingLiked,
};