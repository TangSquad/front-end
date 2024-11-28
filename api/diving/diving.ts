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

const getMyDiving = async () => {
  try {
    const response = await apiClient.get<Diving[]>(api.ENDPOINTS.DIVING.DIVING);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get my diving');
    else
      throw new Error('Failed to get all diving');
  }
};

const getDivingById = async (divingId: number) => {
  try {
    const response = await apiClient.get<Diving>(api.ENDPOINTS.DIVING.DIVING_BY_ID.replace('{divingId}', divingId.toString()));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get diving by id');
    else
      throw new Error('Failed to get diving');
  }
};

const getDivingAll = async () => {
  try {
    const response = await apiClient.get<Diving[]>(api.ENDPOINTS.DIVING.DIVING_ALL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get all diving');
    else
      throw new Error('Failed to get all diving');
  }
};

export {
  Diving,
  getMyDiving,
  getDivingById,
  getDivingAll,
};