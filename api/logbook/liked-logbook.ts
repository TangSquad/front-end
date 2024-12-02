import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
import { Logbook } from 'types/Logbook';

const getLikedLogbook = async (): Promise<Logbook[]> => {
  try {
    const response = await apiClient.get<Logbook[]>(api.ENDPOINTS.LOGBOOK.LIKED_LOGBOOK);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to get liked logbooks');
    } else {
      throw new Error('Failed to get liked logbooks');
    }
  }
};

export {
  getLikedLogbook,
};