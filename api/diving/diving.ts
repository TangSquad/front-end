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

const getMyDiving = async () => {
  try {
    const response = await apiClient.get<DivingType[]>(api.ENDPOINTS.DIVING.DIVING);
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
    const response = await apiClient.get<DivingType>(api.ENDPOINTS.DIVING.DIVING_BY_ID.replace('{divingId}', divingId.toString()));
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
    const response = await apiClient.get<DivingType[]>(api.ENDPOINTS.DIVING.DIVING_ALL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get all diving');
    else
      throw new Error('Failed to get all diving');
  }
};

export {
  DivingType,
  getMyDiving,
  getDivingById,
  getDivingAll,
};