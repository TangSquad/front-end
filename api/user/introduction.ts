import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

interface IntroductionType {
  introduction: string;
  link: string;
  affiliation: string;
  prevDiving: string;
}

interface IntroductionResponse {
  success: boolean;
  message: string;
  data: IntroductionType;
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
  IntroductionType,
};