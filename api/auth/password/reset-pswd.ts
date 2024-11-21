import axios from 'axios';
import apiClient from '../../apiClient';
import { api } from 'constants/';

interface sendCodeResponseData{
  success: boolean;
  message: string;
  data: null;
}

const sendCode = async (email: string): Promise<sendCodeResponseData> => {
  try {
    const response = await apiClient.post<sendCodeResponseData>(api.ENDPOINTS.PASSWORD.SEND_CODE, {
      email,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to send code');
    } else {
      throw new Error('Failed to send code');
    }
  }
};

export {
  sendCode,
};