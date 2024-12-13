import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';

interface Response {
  registeredUserIds: string[];
}

const joinMoim = async (moimId: number) => {
  try {
    const response = await apiClient.post<Response>(api.ENDPOINTS.MOIM.MOIM_JOIN.replace('{moimId}', `${moimId}`));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Axios failed to join moim');
    else
      throw new Error('Failed to join moim');
  }
};

const leaveMoim = async (moimId: number) => {
  // TODO: Implement leaveMoim
};

export {
  joinMoim,
  leaveMoim,
};