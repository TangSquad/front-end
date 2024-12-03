import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
import { Introduction } from 'types/User';

interface IntroductionResponse {
  success: boolean;
  message: string;
  data: Introduction;
}

const getMyIntroduction = async (): Promise<IntroductionResponse> => {
  try {
    const response = await apiClient.get<IntroductionResponse>(api.ENDPOINTS.USER.INTRODUCTION);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get introduction');
    else
      throw new Error('Failed to get introduction');
  }
};

export { 
  getMyIntroduction,
};