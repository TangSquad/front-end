import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';

type LikedLogbook = {
  logbookId: number;
  userId: number;
  thumbnailUrl: string | null;
  isPublic: boolean;
  title: string;
  contents: string;
  date: string;
  location: string;
}

const getLikedLogbook = async (): Promise<LikedLogbook[]> => {
  try {
    const response = await apiClient.get<LikedLogbook[]>(api.ENDPOINTS.LOGBOOK.LIKED_LOGBOOK);

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
  LikedLogbook,
};