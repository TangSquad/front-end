import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
import { Moim } from 'types/Gatherings';

const getMoimLiked = async () => {
  try {
    const response = await apiClient.get<Moim[]>(api.ENDPOINTS.MOIM.MOIM_LIKED);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get liked moim');
    else
      throw new Error('Failed to get liked moim');
  }
};

const likeMoim = async (moimId: number) => {
  try {
    const response = await apiClient.post(api.ENDPOINTS.MOIM.MOIM_LIKE.replace('{moimId}', moimId.toString()));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to like diving');
    else
      throw new Error('Failed to like diving');
  }
};

const unlikeMoim = async (moimId: number) => {
  try {
    const response = await apiClient.delete(api.ENDPOINTS.MOIM.MOIM_LIKE.replace('{moimId}', moimId.toString()));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to unlike diving');
    else
      throw new Error('Failed to unlike diving');
  }
};

export {
  getMoimLiked,
  likeMoim,
  unlikeMoim,
};