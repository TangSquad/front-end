import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';

interface Response {
  success: boolean;
  message: string;
  data: null;
}

const joinMoim = async (moimId: number) => {
  try {
    const response = await apiClient.put<Response>(api.ENDPOINTS.MOIM.MOIM_JOIN.replace('{moimId}', `${moimId}`));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get joined moim');
    else
      throw new Error('Failed to get joined moim');
  }
};

export {
  joinMoim,
};