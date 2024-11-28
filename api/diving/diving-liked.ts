import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

interface Diving {
  id: number;
  userId: number;
  isPublic: boolean;
  thumbnailUrl: string;
  divingName: string;
  divingIntro: string;
  age: string;
  moods: string[];
  currentPeople: number;
  limitPeople: number;
  licenseLimit: string;
  startDate: string;
  endDate: string;
  location: string;
  registedUserIds: number[];
}

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