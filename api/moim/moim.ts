import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';
import { Moim } from 'types/Gatherings';

const getMyMoim = async () => {
  try {
    const response = await apiClient.get<Moim[]>(api.ENDPOINTS.MOIM.MOIM);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get my moim');
    else
      throw new Error('Failed to get all moim');
  }
};

const getMoimById = async (moimId: number) => {
  try {
    const response = await apiClient.get<Moim>(api.ENDPOINTS.MOIM.MOIM_BY_ID.replace('{moimId}', moimId.toString()));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get moim by id');
    else
      throw new Error('Failed to get moim');
  }
};

const getMoimAll = async () => {
  try {
    const response = await apiClient.get<Moim[]>(api.ENDPOINTS.MOIM.MOIM_ALL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get all moim');
    else
      throw new Error('Failed to get all moim');
  }
};

export {
  getMyMoim,
  getMoimById,
  getMoimAll,
};