import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
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

const likeDiving = async (divingId: number) => {
  try {
    const response = await apiClient.post(api.ENDPOINTS.DIVING.DIVING_LIKE.replace('{divingId}', divingId.toString()));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to like diving');
    else
      throw new Error('Failed to like diving');
  }
};

const unlikeDiving = async (divingId: number) => {
  try {
    const response = await apiClient.delete(api.ENDPOINTS.DIVING.DIVING_UNLIKE.replace('{divingId}', divingId.toString()));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to unlike diving');
    else
      throw new Error('Failed to unlike diving');
  }
};

export {
  getDivingLiked,
  likeDiving,
  unlikeDiving,
};