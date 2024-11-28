import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

// DivingImgUrl to be added
interface DivingType {
  divingId: number;
  userId: number;
  divingName: string;
  divingIntro: string;
  limitPeople: number;
  limitLicense: string;
  location: string;
  age: string;
  moodOne: string;
  moodTwo: string;
  startDate: string;
  endDate: string;
}

const getDivingLiked = async () => {
  try {
    const response = await apiClient.get<DivingType[]>(api.ENDPOINTS.DIVING.DIVING_LIKED);
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