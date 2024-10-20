import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

// Expense to be added
interface Diving {
  divingId: number;
  userId: number;
  divingName: string;
  divingIntro: string;
  limitPeople: number;
  limitLicense: string;
  location: string;
  age: number;
  moodOne: string;
  moodTwo: string;
  startDate: string;
  endDate: string;
}

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

export {
  getDivingById,
};